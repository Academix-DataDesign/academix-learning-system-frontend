import axios from "axios";
const url = import.meta.env.VITE_REACT_API_URL

export const register = async (formData: any) => {
    const requestBody = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
    };

    const response = await axios.post(
        url + '/api/v1/register',
        requestBody
    );

    return response.data;
};

export const login = async (formData: any) => {
    const requestBody = {
        email: formData.email,
        password: formData.password,
    };

    const response = await axios.post(
        url + '/api/v1/login',
        requestBody
    );

    return response.data;
}