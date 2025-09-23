<template>
    Payments Page!

    <div>filters

        <label for="paymentType">Payment Type:</label>
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

     <div>Payments Grid</div>
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

    <button>new payment</button>

    <payments-form></payments-form>

    <modal-payment-delete></modal-payment-delete>
</template>

<script setup lang="ts">
    import PaymentsForm from '../components/payments/PaymentsForm.vue';
    import ModalPaymentDelete from '../components/payments/ModalPaymentDelete.vue';
</script>