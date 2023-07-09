import axios from "axios";

export const register = async (formData: any) => {
    const requestBody = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
    };
    const response = await axios.post(
        "https://api.academix.me/api/v1/register",
        requestBody
    );

    return response.data;
} 
