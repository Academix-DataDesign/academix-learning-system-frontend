import axios from "axios";
const url = import.meta.env.VITE_REACT_API_URL

export const register = async (formData: any) => {
    const requestBody = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
    };

    const response = await axios.post(
        url,
        requestBody
    );

    return response.data;
};
