<template>
    <Navbar></Navbar>
    <div>Savings</div>
    <table>
        <thead>
            <tr>
                <th>Personal</th>
                <th>Housing</th>
                <th>Saving</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>{{ savings?.personal }}</td>
                <td>{{ savings?.housing }}</td>
                <td>{{ savings?.saving }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
    import { onMounted, ref } from 'vue';
    import { getSavings, SavingsResponse } from '../services/savings.service';
    import Navbar from '../components/Navbar.vue';

    const savings = ref<SavingsResponse>();

    onMounted(async () => {
        savings.value = await getSavings(1); // hardcoded by now
        console.log(savings.value);
    });
</script>