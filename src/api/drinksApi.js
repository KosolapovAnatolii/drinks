// TODO: check all this file, it isn't finished
import axios from 'axios';

const BASE_URL = 'https://drinks-backend-x4zi.onrender.com/api/drinks';

export const fetchAllDrinks = async (category) => {
  try {
    const response = await axios.get(`${BASE_URL}?category=${category}`);
    return response.data;
  } catch (error) {
    console.error('Fetching drinks was failed:', error);
    throw error;
  }
};

export const fetchDrinkById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed fetching drink with id=${id}:`, error);
    throw error;
  }
};

export const createDrink = async (drinkData) => {
  try {
    const response = await axios.post(`${BASE_URL}`, drinkData);
    return response.data;
  } catch (error) {
    console.error('Creating drink was failed:', error);
    throw error;
  }
};

export const deleteDrink = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed deleting drink with id=${id}:`, error);
    throw error;
  }
};
