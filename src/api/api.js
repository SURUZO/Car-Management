// src/api/api.js
import axios from 'axios';

// Create an Axios instance with the backend API base URL
const API = axios.create({
  baseURL: 'https://car-management-backend-n946.onrender.com/api',
});

// Set token in header if present (for authentication)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  // Add the token only for authenticated routes
  if (token && config.url !== '/users/signup') {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
