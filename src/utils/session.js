export const setSession = (user, token) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
}

export const getSession = () => {
    const user = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    if (user && token) {
        return {
            token,
            user: JSON.parse(user)
        }
    }

    return null;
}

export const removeSession = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
}

