<template>
  <main>
    <div class="row">
      <div class="col">
        <NewPostComponent />
      </div>
    </div>
    <div class="row mb-3 ib-post-container" v-for="post in posts" :key="post.id">
      <div class="col">
        <PostComponent :post="post" />
      </div>
    </div>
  </main>
</template>

<script setup>
// imports
import { onMounted, onBeforeMount } from 'vue';
import { useUser } from '@/composables/useUser';
import { useFirestore } from '@/composables/useFirestore'
import { useRouter } from 'vue-router';
import NewPostComponent from '@/components/NewPostComponent.vue';
import PostComponent from '@/components/PostComponent.vue';
import { auth } from '@/firebase/firebase';

const router = useRouter();

const { isLoggedIn, fullUser } = useUser();
const { updatePosts, posts } = useFirestore();

onBeforeMount(async() => {
  if (Object.keys(fullUser.value).length == 0) {

  }
})

onMounted(() => {





  updatePosts();
})

if (!isLoggedIn.value) {
  router.push("/");
}




</script>

<style scoped>
.ib-post-container {}
</style>