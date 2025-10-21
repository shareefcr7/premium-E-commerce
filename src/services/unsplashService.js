// src/services/unsplashService.js
import axios from 'axios';

const UNSPLASH_API_URL = 'https://api.unsplash.com/photos';
const ACCESS_KEY = 'YOUR_ACCESS_KEY'; // Replace with your Unsplash API key

export const fetchFurnitureImages = async () => {
  try {
    const response = await axios.get(UNSPLASH_API_URL, {
      params: {
        query: 'home furniture',
        client_id: ACCESS_KEY,
        per_page: 10, // Adjust the number of images as needed
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching images from Unsplash:', error);
    return [];
  }
};
