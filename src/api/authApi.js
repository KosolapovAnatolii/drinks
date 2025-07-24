import axios from 'axios';

const BASE_URL = 'https://drinks-backend-x4zi.onrender.com/api/auth';

export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, userData);
    return response.data;

  } catch (err) {
    console.error('⚠️ Network err', err);
    throw err;
  }
}

export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, userData);
    return response.data;
  } catch (err) {
    console.error('⚠️ Network err', err);
    throw err;
  }
}
