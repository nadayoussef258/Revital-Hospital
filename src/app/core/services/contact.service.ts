// src/app/core/services/contact.service.ts
import { Injectable } from '@angular/core';
import { 
  collection, 
  addDoc, 
  getDocs, 
  getDoc,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  Timestamp 
} from 'firebase/firestore';
import { db } from '../../../../firebase.config';
import { ContactMessage } from '../models/contact-message.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private messagesCollection = collection(db, 'contact_messages');

  constructor() {}

  /**
   * إرسال رسالة جديدة (من الموقع العام)
   */
  async submitMessage(messageData: Omit<ContactMessage, 'id' | 'status' | 'createdAt'>): Promise<string> {
    try {
      const docRef = await addDoc(this.messagesCollection, {
        ...messageData,
        status: 'new',
        createdAt: Timestamp.now()
      });
      
      console.log('Message submitted successfully with ID:', docRef.id);
      return docRef.id;
    } catch (error) {
      console.error('Error submitting message:', error);
      throw error;
    }
  }

  /**
   * الحصول على جميع الرسائل (للأدمن)
   */
  async getAllMessages(): Promise<ContactMessage[]> {
    try {
      const querySnapshot = await getDocs(this.messagesCollection);
      const messages = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      } as ContactMessage));

      // ترتيب على الكلاينت
      return messages.sort((a, b) => {
        const dateA = this.getDateValue(a.createdAt);
        const dateB = this.getDateValue(b.createdAt);
        return dateB - dateA; // الأحدث أولاً
      });
    } catch (error) {
      console.error('Error getting all messages:', error);
      throw error;
    }
  }

  /**
   * الحصول على الرسائل الجديدة فقط
   */
  async getNewMessages(): Promise<ContactMessage[]> {
    try {
      const allMessages = await this.getAllMessages();
      return allMessages.filter(msg => msg.status === 'new');
    } catch (error) {
      console.error('Error getting new messages:', error);
      throw error;
    }
  }

  /**
   * الحصول على رسالة واحدة
   */
  async getMessageById(id: string): Promise<ContactMessage | null> {
    try {
      const docRef = doc(db, 'contact_messages', id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return {
          id: docSnap.id,
          ...docSnap.data()
        } as ContactMessage;
      }
      return null;
    } catch (error) {
      console.error('Error getting message:', error);
      throw error;
    }
  }

  /**
   * تحديث حالة الرسالة
   */
  async updateMessageStatus(
    id: string, 
    status: 'new' | 'read' | 'replied',
    notes?: string
  ): Promise<void> {
    try {
      const docRef = doc(db, 'contact_messages', id);
      const updateData: any = { status };
      
      if (status === 'replied') {
        updateData.repliedAt = Timestamp.now();
      }
      
      if (notes !== undefined) {
        updateData.notes = notes;
      }

      await updateDoc(docRef, updateData);
    } catch (error) {
      console.error('Error updating message status:', error);
      throw error;
    }
  }

  /**
   * حذف رسالة
   */
  async deleteMessage(id: string): Promise<void> {
    try {
      const docRef = doc(db, 'contact_messages', id);
      await deleteDoc(docRef);
    } catch (error) {
      console.error('Error deleting message:', error);
      throw error;
    }
  }

  /**
   * تحويل التاريخ لرقم
   */
  private getDateValue(date: any): number {
    if (!date) return 0;
    if (date.seconds) return date.seconds * 1000;
    if (typeof date === 'string') return new Date(date).getTime();
    if (date instanceof Date) return date.getTime();
    return 0;
  }

  /**
   * إحصائيات الرسائل
   */
  async getMessagesStats(): Promise<{
    total: number;
    new: number;
    read: number;
    replied: number;
  }> {
    try {
      const messages = await this.getAllMessages();
      
      return {
        total: messages.length,
        new: messages.filter(m => m.status === 'new').length,
        read: messages.filter(m => m.status === 'read').length,
        replied: messages.filter(m => m.status === 'replied').length
      };
    } catch (error) {
      console.error('Error getting messages stats:', error);
      return { total: 0, new: 0, read: 0, replied: 0 };
    }
  }
}