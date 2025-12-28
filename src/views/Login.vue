<template>
    Login Page!

    <form @submit.prevent="handleLogin">
        <div>
            <label for="username">Username:</label>
            <input v-model="username" placeholder="Usuario">
        </div>

        <div>
            <label for="password">Password:</label>
            <input v-model="password" type="password" placeholder="Contraseña">
        </div>

        <button type="submit" :disabled="loading">
            {{ loading ? "Entrando..." : "Login" }}
        </button>

        <p v-if="error" style="color: red;">{{ error }}</p>
    </form>
    
</template>

<script setup lang="ts">
    import { ref } from "vue";
    import { login } from "./../services/auth.service";
    import router from "../router/routes";

    const username = ref("");
    const password = ref("");
    const error = ref("");
    const loading = ref(false);

    const handleLogin = async () => {
        error.value = "";
        loading.value = true;

        try {
            await login(username.value, password.value);
            console.log("Success!!");

            router.push({path: '/expenses'})
        }
        catch (err: any) {
            error.value = err.response?.data?.detail ?? "Error al iniciar sesión";
        }
        finally {
            loading.value = false;
        }
    };
</script>