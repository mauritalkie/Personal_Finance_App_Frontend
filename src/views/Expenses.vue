<template>
    <Navbar></Navbar>
    Expenses Page!

     <div>filters

        <label for="paymentType">Expense Type:</label>
        <select id="paymentType" name="paymentType">
            <option value="all">All</option>
            <option value="creditCard">Credit Card</option>
            <option value="debitCard">Debit Card</option>
            <option value="cash">Cash</option>
            <option value="bankTransfer">Bank Transfer</option>
        </select>

        <label for="dateRange">Date Range:</label>
        <input type="date" id="startDate" name="startDate">
        <input type="date" id="endDate" name="endDate">

        <button>Apply Filters</button>
        <button>Clear Filters</button>
     </div>
    
    <div>Expenses Grid</div>
    <table>
        <thead>
            <tr>
                <th>Concept</th>
                <th>Amount</th>
                <th>Expense Type</th>
                <th>Expense Date</th>
                <th>Action</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="expense in expenses" :key="expense.expense_id">
                <td>{{ expense.concept }}</td>
                <td>{{ expense.amount }}</td>
                <td>{{ expense.expense_type }}</td>
                <td>{{ expense.expense_date }}</td>
                <!-- TODO: buttons for edit and delete -->
            </tr>

            <tr v-if="expenses.length === 0">
                <td colspan="5">Expenses not found</td>
            </tr>
        </tbody>
    </table>

    <button>new expense</button>

    <expenses-form></expenses-form>

    <modal-expense-delete></modal-expense-delete>
</template>

<script setup lang="ts">
    import ExpensesForm from '../components/expenses/ExpensesForm.vue';
    import ModalExpenseDelete from '../components/expenses/ModalExpenseDelete.vue';
    import { onMounted, ref } from 'vue';
    import { ExpenseDetailResponse, getExpenses } from '../services/expenses.service';
    import Navbar from '../components/Navbar.vue';

    const expenses = ref<ExpenseDetailResponse[]>([]);

    onMounted(async () => {
        expenses.value = await getExpenses(1); // yeah, hardcoded user ID
        console.log(expenses.value);
    });
</script>