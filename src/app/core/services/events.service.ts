// src/app/services/events.service.ts - FULLY FIXED
import { Injectable } from '@angular/core';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  doc, 
  getDocs, 
  getDoc,
  query,
  where,
  orderBy,
  Timestamp 
} from 'firebase/firestore';
import { 
  ref, 
  uploadBytesResumable,
  getDownloadURL, 
  deleteObject 
} from 'firebase/storage';
import { db, storage } from '../../../../firebase.config';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private eventsCollection = collection(db, 'events');

  constructor() {}

  // Get all published events
  async getPublishedEvents(): Promise<Event[]> {
    try {
      // استخدام query بسيط بدون orderBy في البداية
      const q = query(
        this.eventsCollection,
        where('published', '==', true)
      );
      
      const querySnapshot = await getDocs(q);
      const events = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Event));

      // ترتيب البيانات على الكلاينت
      return events.sort((a, b) => {
        const dateA = this.getDateValue(a.date);
        const dateB = this.getDateValue(b.date);
        return dateB - dateA; // ترتيب تنازلي
      });
    } catch (error) {
      console.error('Error getting published events:', error);
      // في حالة فشل الـ query، جرب بدون where
      try {
        const allDocs = await getDocs(this.eventsCollection);
        const events = allDocs.docs
          .map(doc => ({ id: doc.id, ...doc.data() } as Event))
          .filter(event => event.published === true)
          .sort((a, b) => {
            const dateA = this.getDateValue(a.date);
            const dateB = this.getDateValue(b.date);
            return dateB - dateA;
          });
        return events;
      } catch (fallbackError) {
        console.error('Fallback query also failed:', fallbackError);
        throw fallbackError;
      }
    }
  }

  // Get all events (for admin)
  async getAllEvents(): Promise<Event[]> {
    try {
      const querySnapshot = await getDocs(this.eventsCollection);
      const events = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as Event));

      // ترتيب على الكلاينت
      return events.sort((a, b) => {
        const dateA = this.getDateValue(a.createdAt);
        const dateB = this.getDateValue(b.createdAt);
        return dateB - dateA;
      });
    } catch (error) {
      console.error('Error getting all events:', error);
      throw error;
    }
  }

  // Helper: تحويل التاريخ لرقم
  private getDateValue(date: any): number {
    if (!date) return 0;
    if (date.seconds) return date.seconds * 1000;
    if (typeof date === 'string') return new Date(date).getTime();
    if (date instanceof Date) return date.getTime();
    return 0;
  }

  // Get single event by ID
  async getEventById(id: string): Promise<Event | null> {
    try {
      const docRef = doc(db, 'events', id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data()
        } as Event;
      }
      return null;
    } catch (error) {
      console.error('Error getting event:', error);
      throw error;
    }
  }

  // Upload image with progress
  async uploadImage(
    file: File, 
    eventId: string,
    onProgress?: (progress: number) => void
  ): Promise<string> {
    try {
      const timestamp = Date.now();
      const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
      const fileName = `events/${eventId}/images/${timestamp}_${sanitizedFileName}`;
      const storageRef = ref(storage, fileName);
      
      const metadata = {
        contentType: file.type,
        customMetadata: {
          'uploadedBy': 'admin',
          'uploadedAt': new Date().toISOString()
        }
      };

      const uploadTask = uploadBytesResumable(storageRef, file, metadata);
      
      await new Promise((resolve, reject) => {
        uploadTask.on('state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            if (onProgress) {
              onProgress(Math.round(progress));
            }
          },
          (error) => {
            console.error('Upload error:', error);
            reject(error);
          },
          () => {
            resolve(uploadTask.snapshot);
          }
        );
      });

      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error;
    }
  }

  // Upload video with progress
  async uploadVideo(
    file: File, 
    eventId: string,
    onProgress?: (progress: number) => void
  ): Promise<string> {
    try {
      const timestamp = Date.now();
      const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
      const fileName = `events/${eventId}/videos/${timestamp}_${sanitizedFileName}`;
      const storageRef = ref(storage, fileName);
      
      const metadata = {
        contentType: file.type,
        customMetadata: {
          'uploadedBy': 'admin',
          'uploadedAt': new Date().toISOString()
        }
      };

      const uploadTask = uploadBytesResumable(storageRef, file, metadata);
      
      await new Promise((resolve, reject) => {
        uploadTask.on('state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            if (onProgress) {
              onProgress(Math.round(progress));
            }
          },
          (error) => {
            console.error('Video upload error:', error);
            reject(error);
          },
          () => {
            resolve(uploadTask.snapshot);
          }
        );
      });

      const downloadURL = await getDownloadURL(storageRef);
      return downloadURL;
    } catch (error) {
      console.error('Error uploading video:', error);
      throw error;
    }
  }

  // Create new event
  async createEvent(eventData: Omit<Event, 'id'>): Promise<string> {
    try {
      const docRef = await addDoc(this.eventsCollection, {
        ...eventData,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now()
      });
      return docRef.id;
    } catch (error) {
      console.error('Error creating event:', error);
      throw error;
    }
  }

  // Update event
  async updateEvent(id: string, eventData: Partial<Event>): Promise<void> {
    try {
      const docRef = doc(db, 'events', id);
      await updateDoc(docRef, {
        ...eventData,
        updatedAt: Timestamp.now()
      });
    } catch (error) {
      console.error('Error updating event:', error);
      throw error;
    }
  }

  // Delete event
  async deleteEvent(id: string): Promise<void> {
    try {
      const docRef = doc(db, 'events', id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error('Error deleting event:', error);
      throw error;
    }
  }

  // Delete file from storage
  async deleteFile(fileUrl: string): Promise<void> {
    try {
      const fileRef = ref(storage, fileUrl);
      await deleteObject(fileRef);
    } catch (error) {
      console.error('Error deleting file:', error);
      // Don't throw error if file doesn't exist
      if (error && (error as any).code !== 'storage/object-not-found') {
        throw error;
      }
    }
  }
}