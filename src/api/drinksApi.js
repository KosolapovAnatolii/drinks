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

export const getDrinkById = async (id) => {
  try {
    const response = await axiosInstance.get(`/drinks/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed fetching drink with id=${id}:`, error);
    throw error;
  }
};

export const createDrink = async (drinkData) => {
  if (drinkData.photo) {
    try {
      const imageUrl = await uploadImage(drinkData.photo)
      drinkData.photo = imageUrl;
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

export const deleteDrink = async (id) => {
  try {
    const response = await axiosInstance.delete(`/drinks/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed deleting drink with id=${id}:`, error);
    throw error;
  }
};
