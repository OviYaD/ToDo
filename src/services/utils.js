export const getHeader = () => {
    return {
        headers: { Authorization: localStorage.getItem("token") },
    };
};