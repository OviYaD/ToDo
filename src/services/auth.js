import axios from "axios";

export const loginAPI = async(data) => {
    console.log(data);
    const response = await axios.post("http://localhost:5000/auth/login", data);
    localStorage.setItem("token", response.data.token);
    // return response.data;
};

export const registerAPI = async(data) => {
    console.log(data);
    const response = await axios.post(
        "http://localhost:5000/auth/register",
        data
    );
    localStorage.setItem("token", response.data.token);
    // return response.data;
};

export const sampleApi = async() => {
    const response = await axios.get("http://localhost:5000", {
        headers: { Authorization: localStorage.getItem("token") },
    });
    return response.data;
};