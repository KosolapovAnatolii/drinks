import axios from 'axios';

export const uploadImage = async (image) => {
  const imageData = new FormData()
  imageData.append('file', image)
  imageData.append('upload_preset', process.env.CLOUDINARY_UPLOAD_PRESET)
  imageData.append('drinks', 'your_folder')

  try {
    const response = await axios.post(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`, imageData);

    return response.data.secure_url;

  } catch (er) {
    console.error('Uploading image was failed:', er);
    throw er;
  }
}

