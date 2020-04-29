import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 9538d627508f1ee17f6312e0df93d17bc2823a6ee76b240bf6c9c11af48ea4eb'
    }
})