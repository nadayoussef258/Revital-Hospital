
export const cloudinaryConfig = {
  cloudName: 'dozzloztc',
  
  // الـ Upload Preset اللي عملتيه (unsigned)
  uploadPreset: 'revital_events',
};

// Helper function للرفع المباشر
export function getCloudinaryUploadUrl(resourceType: 'image' | 'video' = 'image'): string {
  return `https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/${resourceType}/upload`;
}