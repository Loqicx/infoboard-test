<template>
  <main>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <div class="px-4 pt-5 my-2 text-center">
              <h1 class="display-4 fw-bold text-body-emphasis">Herzlich Willkommen</h1>
              <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">Bitte melden Sie sich an um unseren Service zu nutzen</p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                  <RouterLink to="login" class="btn btn-primary btn-lg px-4 me-sm-3">Anmelden</RouterLink>
                  <RouterLink to="register" class="btn btn-outline-secondary btn-lg px-4">Registrieren</RouterLink>
                </div>
              </div>
              <div class="overflow-hidden" style="max-height: 30vh;">
                <div class="container px-5">

                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </main>
</template>


<script setup>
import { ref, onBeforeMount } from 'vue'
import { useRouter } from 'vue-router';
import { useUser } from '@/composables/useUser';

const { isLoggedIn } = useUser();
const router = useRouter();

onBeforeMount(() => {
  if (!isLoggedIn.value) return;
  router.push("infoboard")
})

</script>