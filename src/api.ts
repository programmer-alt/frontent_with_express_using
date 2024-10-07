import axios from 'axios';
const apiUrl = 'http://localhost:3000';
export const getCities = async () => {
try {
    const response = await axios.get(`${apiUrl}/city/list`);
    return response.data
} catch (error) {
    console.error(error);
    throw error
}
}