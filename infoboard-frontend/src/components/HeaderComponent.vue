<template>
  <div class="sticky-top">
    <header class="p-3 mb-2 border-bottom ib-header" data-bs-theme="dark">
      <div class="container ib-header-container">
        <div
          class="d-flex flex-wrap align-items-center justify-content-between justify-content-lg-start"
        >
          <RouterLink
            to="/"
            class="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none me-lg-auto ib-heading-icon"
          >
            <i class="bi bi-info-square-fill"></i>
          </RouterLink>

          <div class="ib-user-top-section" v-if="isLoggedIn">
            <p class="text-body-secondary my-auto mx-3">
              {{ fullUser.firstName }} {{ fullUser.lastName }}
            </p>
            <div class="dropdown text-end">
              <a
                href="#"
                class="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i class="bi bi-person-fill-check ib-heading-icon"></i>
              </a>
              <ul class="dropdown-menu text-small">
                <li><a class="dropdown-item" @click="signOutUser">Abmelden</a></li>
              </ul>
            </div>
          </div>

          <div v-else class="dropdown text-end">
            <a
              href="#"
              class="d-block link-body-emphasis text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-person-fill ib-heading-icon"></i>
            </a>
            <ul class="dropdown-menu text-small">
              <li>
                <RouterLink to="login" class="dropdown-item" href="#">Anmelden</RouterLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script setup>
import { useUser } from '@/composables/useUser'

const { isLoggedIn, signOutUser, fullUser } = useUser()
</script>

<style scoped>
.ib-heading-icon {
  font-size: 2em;
}

.ib-header {
  background-color: rgb(30, 32, 36);
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.ib-header-container {
  max-width: 1024px;
}

.ib-user-top-section {
  display: flex;
  flex-direction: row;
}
</style>
