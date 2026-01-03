<template>
    <div>Add or update Payments</div>

    <label>Payment Concept</label>
    <input type="text" v-model="form.concept">

    <label>Amount</label>
    <input type="number" step="0.01" v-model="form.amount">

    <label>Payment Date</label>
    <input type="date" v-model="form.payment_date">

    <button @click="savePayment">Save Payment</button>
    <button>Cancel</button>

    <p v-if="error" style="color: red;">{{ error }}</p>
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import { PaymentForm, createPayment } from '../../services/payments.service';
    import { PaymentCreate } from '../../services/payments.service';

    const error = ref(false);

    const form = ref<PaymentForm>({
        amount: 0,
        concept: '',
        payment_date: new Date()
    });
    

    const savePayment = async () => {
        if (
            !form.value.amount ||
            !form.value.concept ||
            !form.value.payment_date
        ) {
            alert("Please fill all fields");
            return;
        }

        // TODO: make request to get saving, housing and personal percentages

        const paymentToCreate: PaymentCreate = {
            amount: form.value.amount,
            saving: form.value.amount * 0.5,
            housing: form.value.amount * 0.3,
            personal: form.value.amount * 0.2,
            concept: form.value.concept,
            payment_date: form.value.payment_date,
            user_id: 1 // hardcoded by now
        };

        try {
            await createPayment(paymentToCreate);

            alert('Payment created successfully!');

            form.value.amount = 0;
            form.value.concept = '';
            form.value.payment_date = new Date();
        }
        catch (err: any) {
            error.value = err.response?.data?.detail ?? "Something went wrong with Payment creation";
        }
    }
</script>