<template>
    <div>Add or update Expense</div>

    <label>Expense Concept</label>
    <input type="text" v-model="form.concept">

    <label>Amount</label>
    <input type="number" step="0.01" v-model="form.amount">

    <label>Expense Type</label>
    <select v-model="form.expense_type_id">
        <option disabled value="">Select an expense type</option>

        <option 
            v-for="expenseType in expensesTypes" 
            :key="expenseType.expense_type_id"
            :value="expenseType.expense_type_id"
        >
            {{ expenseType.expense_type }}
        </option>
    </select>

    <label>Expense Date</label>
    <input type="date" v-model="form.expense_date">

    <button @click="saveExpense">Save Expense</button>
    <button>Cancel</button>

    <p v-if="error" style="color: red;">{{ error }}</p>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { ExpenseTypeResponse, getExpensesTypes } from '../../services/expenses-types.service';
    import { createExpense, ExpenseCreate } from '../../services/expenses.service';

    const expensesTypes = ref<ExpenseTypeResponse[]>([]);
    const error = ref('');

    const form = ref<ExpenseCreate>({
        expense_type_id: 0,
        concept: '',
        amount: 0,
        expense_date: '',
        user_id: 1 // hardcoded by now
    });

    const saveExpense = async () => {
        if (
            !form.value.expense_type_id ||
            !form.value.concept ||
            !form.value.amount ||
            !form.value.expense_date
        ) {
            alert("Please fill all fields");
        }

        try {
            await createExpense(form.value);

            alert('Expense created successfully!');

            form.value.expense_type_id = 0;
            form.value.concept = '';
            form.value.amount = 0;
            form.value.expense_date = '';
        }
        catch (err: any) {
            error.value = err.response?.data?.detail ?? "Error al iniciar sesión";
        }
    }

    onMounted(async () => {
        expensesTypes.value = await getExpensesTypes(1); // hardcoded id
    });
</script>