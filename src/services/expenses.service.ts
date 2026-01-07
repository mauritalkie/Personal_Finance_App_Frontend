import api from "./api.service";

export interface ExpenseDetailResponse {
    expense_type_id: number,
    concept: string,
    amount: number,
    expense_date: string,
    expense_id: number,
    user_id: number,
    created_at: string,
    updated_at: string,
    expense_type: string
};

export interface ExpenseCreate {
  expense_type_id: number
  concept: string
  amount: number
  expense_date: string
  user_id: number
};

export async function getExpenses(userId: number): Promise<ExpenseDetailResponse[]> {
    const { data } = await api.get<ExpenseDetailResponse[]>(`expenses/?user_id=${userId}`);
    return data;
}

export async function createExpense(payload: ExpenseCreate): Promise<ExpenseDetailResponse> {
    const { data } = await api.post<ExpenseDetailResponse>('expenses', payload);
    return data;
}