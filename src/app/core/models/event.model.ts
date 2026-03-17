// src/app/models/event.model.ts

export interface Event {
  id?: string;
  title: string;
  description: string;
  date: Date | string;
  location: string;
  images: string[]; // URLs of images
  videoUrl?: string; // Optional video URL
  createdAt: Date | string;
  updatedAt: Date | string;
  published: boolean;
}

export interface EventFormData {
  title: string;
  description: string;
  date: string;
  location: string;
  images: File[];
  video?: File;
  published: boolean;
}