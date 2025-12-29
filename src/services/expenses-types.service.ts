import api from "./api.service";

export interface ExpenseTypeResponse {
    expense_type: string;
    expense_percentage: number;
    expense_type_id: number;
    user_id: number;
    created_at: Date;
    updated_at: Date;
};

export async function getExpensesTypes(userId: number): Promise<ExpenseTypeResponse[]> {
    const { data } = await api.get<ExpenseTypeResponse[]>(`expenses_types/?user_id=${userId}`);
    return data;
}