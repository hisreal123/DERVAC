import axios from "axios";

 const API = import.meta.env.VITE_API;

export const getAllData = () => {
    const response = axios.get(`${API}/api`);

    if (!response) return {
        message: ' response is empty !!',
        status :  400
    }

    return response
}