import api from "./api.service";

export interface SavingsResponse {
    personal: number
    housing: number
    saving: number
};

export async function getSavings(userId: number): Promise<SavingsResponse> {
    const { data } = await api.get(`savings/?user_id=${userId}`);
    return data
}