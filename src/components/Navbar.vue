<template>
    <nav>
        <router-link 
            v-for="link in links" 
            :key="link.route" 
            :to="{ name: link.route }"
        >
            {{ link.name }}
        </router-link>
    </nav>
</template>

<script setup lang="ts">
    const links = [
        { name: "Gastos", route: "expenses" },
        { name: "Pagos", route: "payments" },
        { name: "Ahorros", route: "savings" }
    ]
</script>