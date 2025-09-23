<template>
    <div>Add or update Payments</div>

    <label>Payment Concept</label>
    <input type="text">

    <label>Amount</label>
    <input type="number" step="0.01">

    <label>Payment Type</label>
    <select>
        <option value="creditCard">Credit Card</option>
        <option value="debitCard">Debit Card</option>
        <option value="cash">Cash</option>
        <option value="bankTransfer">Bank Transfer</option>
    </select>

    <label>Payment Date</label>
    <input type="date">

    <button>Save Payment</button>
    <button>Cancel</button>
</template>

<script>export default{};</script>