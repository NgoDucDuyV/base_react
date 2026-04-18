import axios from "axios"

const baseURL = "http://localhost:3000"

const http = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 15000,
});

export default http