import axios from 'axios';

const API_BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export const fetchCharacters = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/characters`);
        return response.data;
    } catch (error) {
        console.error('Error fetching characters:', error);
        throw error;
    }
};

export const fetchGameRules = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/rules`);
        return response.data;
    } catch (error) {
        console.error('Error fetching game rules:', error);
        throw error;
    }
};

// Add more API functions as needed