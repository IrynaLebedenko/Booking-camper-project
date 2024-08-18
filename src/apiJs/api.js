import axios from 'axios';

const api = axios.create({
  baseURL: 'https://66bdcc5a74dfc195586da3bd.mockapi.io/booking-camper',
});

export default api;