<template>
    <div>Add or update Expense</div>

    <label>Expense Concept</label>
    <input type="text">

    <label>Amount</label>
    <input type="number" step="0.01">

    <label>Expense Type</label>
    <select>
        <option value="creditCard">Credit Card</option>
        <option value="debitCard">Debit Card</option>
        <option value="cash">Cash</option>
        <option value="bankTransfer">Bank Transfer</option>
    </select>

    <label>Expense Date</label>
    <input type="date">

    <button>Save Expense</button>
    <button>Cancel</button>
</template>

<script>export default{};</script>