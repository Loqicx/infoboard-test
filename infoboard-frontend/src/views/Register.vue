<template>
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
        Nur zu Testzwecken!
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
    <main class="login-form w-100 m-auto mt-0 pt-5 my-2 ib-form ib-form-login">
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-body">
                        <form>
                            <h1 class="h3 mb-3 fw-normal">Neuen Benutzer anlegen</h1>
                            <div class="form-floating">
                                <input type="text" class="form-control" required id="floatingInput" v-model="firstName"
                                    placeholder="Esteban">
                                <label for="floatingInput">Vorname</label>
                            </div>
                            <div class="form-floating">
                                <input type="text" class="form-control" required id="floatingInput" v-model="lastName"
                                    placeholder="Diaz">
                                <label for="floatingInput">Nachname</label>
                            </div>
                            <div class="form-floating">
                                <input type="email" class="form-control" required id="floatingInput" v-model="email"
                                    placeholder="name@example.com">
                                <label for="floatingInput">Email Adresse</label>
                            </div>
                            <div class="form-floating mb-2">
                                <input type="password" class="form-control" required id="floatingPassword" v-model="password"
                                    placeholder="Passwort">
                                <label for="floatingPassword">Passwort</label>
                            </div>
                            <button class="btn btn-primary w-100 py-2" type="button" @click="registerUser">Registrieren</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
 // TODO: Validierung hinzufügen
 //             Alle angaben vollständig?
 //             XSS Safe?
 //             Email Format korrekt?


import { ref } from 'vue'
import { useRouter } from 'vue-router';
import { useUser } from '../composables/useUser'

const { email, password, register } = useUser();
const firstName = ref('');
const lastName = ref('');

const router = useRouter();

const registerUser = () => {
    register({firstName: firstName.value, lastName: lastName.value});
}
</script>