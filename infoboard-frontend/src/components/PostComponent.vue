<template>
  <div class="card">
    <div class="container-fluid px-0">
      <h5
        class="card-header bi-card-header d-flex align-items-center justify-content-space-between my-lg-0 me-lg-autotext-decoration-none"
      >
        {{ props.post.title }}
        <ul
          v-if="postControlls"
          class="nav col-lg-auto my-1 justify-content-center my-md-0 text-small ml-auto"
        >
          <li>
            <a
              href="#"
              class="nav-link text-secondary px-1 py-1"
              data-bs-toggle="modal"
              :data-bs-target="`#editPostModal${props.post.id}`"
            >
              <i class="bi bi-pencil-fill"></i>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="nav-link text-secondary px-1 py-1"
              @click="deleteLocalPost(props.post.id)"
            >
              <i class="bi bi-trash3-fill"></i>
            </a>
          </li>
        </ul>
      </h5>
    </div>

    <div class="card-body">
      <p class="card-text" style="white-space: pre-line">{{ props.post.content }}</p>
    </div>
    <div class="card-footer">
      <div class="container-fluid">
        <div class="row">
          <div class="col">{{ props.post.ownerFirstName }} {{ props.post.ownerLastName }}</div>
          <div class="col d-flex justify-content-end">
            Erstellt am {{ formatDate(props.post.created) }}
            {{
              props.post.edited != ''
                ? '| Zuletzt bearbeitet am ' + formatDate(props.post.edited)
                : ''
            }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <div
    class="modal fade"
    :id="`editPostModal${props.post.id}`"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Beitrag erstellen</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col">
              <div class="form mb-3">
                <label for="floatingTitleInput">Titel</label>
                <input
                  type="text"
                  class="form-control"
                  id="floatingTitleInput"
                  v-model="post.title"
                  placeholder="z.B Neuer Dienstplan online..."
                />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="form mb-3">
                <label for="contentInput" class="form-label">Inhalt</label>
                <textarea
                  class="form-control"
                  rows="10"
                  id="contentInput"
                  v-model="post.content"
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Abbrechen</button>
          <button
            type="button"
            class="btn btn-primary"
            @click="updateLocalPost"
            data-bs-dismiss="modal"
          >
            Bestätigen
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onUpdated, onBeforeUpdate, onMounted, onBeforeMount, ref } from 'vue'
import { useUser } from '@/composables/useUser'
import { useFirestore } from '@/composables/useFirestore'

const { fullUser } = useUser()
const { deletePost, updatePosts, updatePost } = useFirestore()
import { auth } from '@/firebase/firebase'

const props = defineProps(['post'])
const postControlls = ref(false)
const post = ref({})

onBeforeMount(() => {
  post.value = props.post
})

const formatDate = (date) => {
  return new Date(Number(date)).toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  })
}

const deleteLocalPost = (id) => {
  deletePost(id).then(() => {
    updatePosts()
  })
}

const updateLocalPost = () => {
  post.value.edited = Date.parse(new Date())
  updatePost(post.value).then(() => {
    updatePosts()
  })
}

onBeforeUpdate(() => {
  if (props.post.userID == fullUser.value.uid) postControlls.value = true
})

if (props.post.userID == fullUser.value.uid) postControlls.value = true
</script>

<style scoped>
.card {
  box-shadow:
    50px 50px 15px 50px rgba(0, 0, 0, 0),
    0px 4px 10px 0px rgba(0, 0, 0, 0.32);
}

.bi-card-header {
  justify-content: space-between;
  max-width: 100%;
}
</style>
