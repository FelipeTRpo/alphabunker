import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:8080",
    withCredentials: false,
    headers: { 'Access-Control-Allow-Origin': '*' },
  });
  
