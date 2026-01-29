<template>
    <main class="login-form w-100 m-auto mt-0 pt-5 my-2 ib-form ib-form-login">
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <form>
                            <h1 class="h3 mb-3 fw-normal">Melden Sie sich an</h1>
                            <div class="form-floating">
                                <input type="email" class="form-control" id="floatingInput" v-model="email"
                                    placeholder="name@example.com">
                                <label for="floatingInput">Email Adresse</label>
                            </div>
                            <div class="form-floating mb-2">
                                <input type="password" class="form-control" id="floatingPassword" v-model="password"
                                    placeholder="Passwort">
                                <label for="floatingPassword">Passwort</label>
                            </div>
                            <button type="button" class="btn btn-primary w-100 py-2" @click="login">Anmelden</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { useUser } from '../composables/useUser'

const { email, password, login } = useUser();
</script>

