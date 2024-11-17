// api.ts
import axios, { AxiosInstance } from "axios";

const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI3N2FhNWE1ZS03MzMxLTRhYTUtODJiMi03NmIwZTJhOWMxM2QiLCJlbWFpbCI6Im1haGFhc2luQGdtYWlsLmNvbSIsImlhdCI6MTczMTg1NDAzNCwiZXhwIjoxNzMxODU3NjM0fQ.tE5JgO25lw8fY6cLreWFVGpUp2tjVs1j9Bq3RwiYgZQ`,
  },
});

export default apiClient;
