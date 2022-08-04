import axios from "axios";

export const getTask = async() => {
    const response = await axios.get("http://localhost:4000/tasks");
    return response.data;
};

export const postTask = async(data) => {
    const response = await axios.post("http://localhost:4000/tasks", data);
    console.log(response);
    return response.data;
};

export const removeTask = async(id) => {
    await axios.delete("http://localhost:4000/tasks/" + id);
};

export const updateTask = async(id, data) => {
    const response = await axios.put("http://localhost:4000/tasks/" + id, data);
    return response.data;
};