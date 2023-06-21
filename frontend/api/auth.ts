import axios from 'axios';

const authapi = axios.create({
    baseURL: `${process.env.BACKEND_BASE}/auth`
});

authapi.interceptors.response.use(
    (res) => res.data,
    (err) => {
        const errMessage = err?.response?.data?.message
        if ((typeof window) !== "undefined") {
            alert(errMessage);
        }
        throw err;
    }
)

export const signin = async (credentials: any) => {
    return authapi.post('/signin', credentials);
}

export const signup = async (credentials: any) => {
    return authapi.post('/signup', credentials);
}
