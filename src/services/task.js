import axios from "axios";
import { getHeader } from "./utils";

export const getTasksAPI = async() => {
    const response = await axios.get("http://localhost:5000/tasks", getHeader());
    console.log(response.data);
    return response.data;
};

export const postTaskAPI = async(task) => {
    console.log(task);
    const response = await axios.post(
        "http://localhost:5000/tasks",
        task,
        getHeader()
    );
    console.log(response.data);
    return response.data;
};

export const deleteTaskAPI = async(id) => {
    const response = await axios.delete(
        "http://localhost:5000/tasks/" + id,
        getHeader()
    );
    console.log(response.data);
    return response.data;
};

export const updateTaskAPI = async(id, task) => {
    console.log(task);
    const response = await axios.put(
        "http://localhost:5000/tasks/" + id,
        task,
        getHeader()
    );
    console.log(response.data);
    return response.data;
};