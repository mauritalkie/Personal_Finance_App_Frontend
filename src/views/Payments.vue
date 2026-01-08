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
        <thead>
            <tr>
                <th>Concept</th>
                <th>Amount</th>
                <th>Saving</th>
                <th>Housing</th>
                <th>Personal</th>
                <th>Payment Date</th>
                <th>Action</th>
            </tr>
        </thead>
        
        <tbody>
            <tr v-for="payment in payments" :key="payment.payment_id">
                <td>{{ payment.concept }}</td>
                <td>{{ payment.amount }}</td>
                <td>{{ payment.saving }}</td>
                <td>{{ payment.housing }}</td>
                <td>{{ payment.personal }}</td>
                <td>{{ payment.payment_date }}</td>
                <!-- TODO: buttons for edit and delete -->
            </tr>
        </tbody>
    </table>

    <button>new payment</button>

    <payments-form></payments-form>

    <modal-payment-delete></modal-payment-delete>
</template>

<script setup lang="ts">
    import PaymentsForm from '../components/payments/PaymentsForm.vue';
    import ModalPaymentDelete from '../components/payments/ModalPaymentDelete.vue';
    import { onMounted, ref } from 'vue';
    import { getPayments, PaymentResponse } from '../services/payments.service';

    onMounted(async () => {
        payments.value = await getPayments(1); // hardcoded user id by now
        console.log(payments.value);
    });

    // TODO: format data such as amount and date
    // TODO: filters and figure out how to pass nulleable query params through services
    const payments = ref<PaymentResponse[]>([]);
    
</script>