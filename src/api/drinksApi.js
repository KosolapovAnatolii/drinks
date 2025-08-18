import axiosInstance from './axiosInstance'

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
  try {
    const response = await axiosInstance.post(`/drinks`, drinkData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    console.log('create drink success response', response)
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

