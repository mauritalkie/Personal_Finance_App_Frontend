<template>
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
        <tr>
            <th>Concept</th>
            <th>Amount</th>
            <th>Payment Type</th>
            <th>Payment Date</th>
            <th>Action</th>
        </tr>
        <tr>
            <td>Groceries</td>
            <td>$150.00</td>
            <td>Credit Card</td>
            <td>2024-06-01</td>
            <td><button>Edit</button> <button>Delete</button></td>
        </tr>
        <tr>
            <td>Utilities</td>
            <td>$75.00</td>
            <td>Debit Card</td>
            <td>2024-06-03</td>
            <td><button>Edit</button> <button>Delete</button></td>
        </tr>
        <tr>
            <td>Rent</td>
            <td>$1200.00</td>
            <td>Bank Transfer</td>
            <td>2024-06-05</td>
            <td><button>Edit</button> <button>Delete</button></td>
        </tr> 
    </table>

    <button>new expense</button>

    <expenses-form></expenses-form>

    <modal-expense-delete></modal-expense-delete>
</template>

<script setup lang="ts">
    import ExpensesForm from '../components/expenses/ExpensesForm.vue';
    import ModalExpenseDelete from '../components/expenses/ModalExpenseDelete.vue';
    import { onMounted } from 'vue';
    import { getExpenses } from '../services/expenses.service';
    import { getExpensesTypes } from '../services/expenses-types.service';

    onMounted(async () => {
        const expenses = await getExpenses(1); // yeah, hardcoded user ID
        console.log(expenses);
    });
</script>