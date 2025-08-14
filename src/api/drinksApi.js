import axiosInstance from './axiosInstance'
import { uploadImage } from './cloudinaryApi';

export const getAllDrinks = async (category) => {
  try {
    const response = await axiosInstance.get(`/drinks?category=${category}`);
    return response.data;
  } catch (error) {
    console.error('Fetching drinks was failed:', error);
    throw error;
  }
};

export const getDrinkBySlug = async (slug) => {
  try {
    const response = await axiosInstance.get(`/drinks/${slug}`);
    return response.data;
  } catch (error) {
    console.error(`Failed fetching drink with slug=${slug}:`, error);
    throw error;
  }
};

export const createDrink = async (drinkData) => {
  if (drinkData.photo) {
    try {
      const imageData = await uploadImage(drinkData.photo)
      drinkData.photo = imageData.url;
      drinkData.public_id = imageData.public_id;
    } catch (error) {
      console.error('Error uplodaing photo', error);
    }
  }

  try {
    const response = await axiosInstance.post(`/drinks`, drinkData);
    return response.data;
  } catch (error) {
    console.error('Creating drink was failed:', error);
    throw error;
  }
};

export const deleteDrink = async (slug) => {
  try {
    const response = await axiosInstance.delete(`/drinks/${slug}`);
    return response.data;
  } catch (error) {
    console.error(`Failed deleting drink with slug=${slug}:`, error);
    throw error;
  }
};

