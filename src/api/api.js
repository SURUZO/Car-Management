// src/api/api.js
import axios from 'axios';

// Create an Axios instance with the backend API base URL
const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL, // Update with your backend URL
});

// Set token in header if present (for authentication)
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
