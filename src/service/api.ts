import axios, { AxiosResponse } from "axios";
import { EXPO_PUBLIC_API_BASE } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";

const baseUrl = EXPO_PUBLIC_API_BASE;

const api = axios.create({
    baseURL: baseUrl,
});

api.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem("@token");
        if (token && config.headers) config.headers["Authorization"] = `Bearer ${token}`;
        return config;
    }
);


export default api;