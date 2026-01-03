import api from "./api.service";

export interface PaymentTypeResponse {
    amount: number
    saving: number
    housing: number
    personal: number
    concept: string
    payment_date: Date
    payment_id: number
    user_id: number
    created_at: Date
    updated_at: Date
};

export interface PaymentCreate {
    amount: number
    saving: number
    housing: number
    personal: number
    concept: string
    payment_date: Date
    user_id: number
};

export interface PaymentForm {
    amount: number
    concept: string
    payment_date: Date
};

export async function getPayments(userId: number): Promise<PaymentTypeResponse[]> {
    const { data } = await api.get<PaymentTypeResponse[]>(`payments/?user_id=${userId}`);
    return data;
}

export async function createPayment(payload: PaymentCreate): Promise<PaymentTypeResponse> {
    const { data } = await api.post<PaymentTypeResponse>('payments', payload);
    return data;
}