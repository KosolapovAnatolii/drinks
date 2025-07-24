// TODO: check all this file, it isn't finished
import axios from 'axios';

const BASE_URL = 'https://drinks-backend-x4zi.onrender.com';

export const fetchAllDrinks = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/drinks`);
    return response.data;
  } catch (error) {
    console.error('Ошибка при получении напитков:', error);
    throw error;
  }
};

export const fetchDrinkById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/drinks/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Ошибка при получении напитка с id=${id}:`, error);
    throw error;
  }
};

export const createDrink = async (drinkData) => {
  try {
    const response = await axios.post(`${BASE_URL}/drinks`, drinkData);
    return response.data;
  } catch (error) {
    console.error('Ошибка при создании напитка:', error);
    throw error;
  }
};

export const deleteDrink = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/drinks/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Ошибка при удалении напитка с id=${id}:`, error);
    throw error;
  }
};
