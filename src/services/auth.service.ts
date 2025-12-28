import axios from 'axios';

const api = axios.create({
    baseURL: "http://localhost:8000",
    headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  }
});

export interface TokenResponse {
    access_token: string;
    refresh_token: string;
    token_type: string;
};

export async function login(username: string, password: string): Promise<TokenResponse> {
    const formData = new URLSearchParams();

    formData.append("username", username);
    formData.append("password", password);

    const { data } = await api.post<TokenResponse>("/token", formData);

    localStorage.setItem("access_token", data.access_token);
    localStorage.setItem("refresh_token", data.refresh_token);

    return data;
}