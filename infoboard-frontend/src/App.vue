<template>
  <HeaderComponent />
  <div class="container ib-main-container">
    <RouterView />
    
  </div>
  <FooterComponent />
  
</template>

<script setup>
import { ref, onBeforeMount } from 'vue'
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';
</script>

<style>

html {
  min-height: 100%;

  display: flex;
  flex-direction: column;
}

body {
  display: flex;
  flex-grow: 1;
}


#app {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  background-color: rgb(252, 252, 252);
}

.ib-main-container {
  max-width: 1024px;
  padding: 10px;
  border-radius: 5px;
  

  display: flex;
  flex-flow: column;
  flex-grow: 1;
  margin-bottom: 10px;
}

.login-form {
  max-width: 320px;
  padding: 1rem;
  
}

.ib-form {
  
}


</style>
