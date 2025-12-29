import api from "./api.service";

export interface ExpenseDetailResponse {
    expense_type_id: number,
    concept: string,
    amount: number,
    expense_date: Date,
    expense_id: number,
    user_id: number,
    created_at: Date,
    updated_at: Date,
    expense_type: string
};

export async function getExpenses(userId: number): Promise<ExpenseDetailResponse[]> {
    const { data } = await api.get<ExpenseDetailResponse[]>(`expenses/?user_id=${userId}`);
    return data;
}