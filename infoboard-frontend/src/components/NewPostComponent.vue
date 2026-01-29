<template>
    <div class="card">
        <div class="card-body">
            <input type="text" readonly class="form-control form-control-lg ib-new-post-input"
            placeholder="Neuen Beitrag erstellen..." data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        </div>
    </div>
    
    <hr class="ib-horizontal-divider mx-2" />


    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Beitrag erstellen</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col">
                            <div class="form mb-3">
                                <label for="floatingTitleInput">Titel</label>
                                <input type="text" class="form-control" id="floatingTitleInput" v-model="title"
                                    placeholder="z.B Neuer Dienstplan online...">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col">
                            <div class="form mb-3">
                                <label for="contentInput" class="form-label">Inhalt</label>
                                <textarea class="form-control" rows="10" id="contentInput" v-model="content"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Abbrechen</button>
                    <button type="button" class="btn btn-primary" @click="createNewPost" data-bs-dismiss="modal">Beitrag erstellen</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useFirestore } from '@/composables/useFirestore';
import { useUser } from '@/composables/useUser';
import { auth } from '@/firebase/firebase';

const { createPost, updatePosts } = useFirestore();
const { fullUser } = useUser();

const title = ref();
const content = ref();

const newPostModal = document.getElementById('staticBackdrop')


const createNewPost = () => {
    const date = Date.parse(new Date());
    const post = {
        title: title.value,
        content: content.value,
        created: date,
        edited: '',
        userID: fullUser.value.uid,
        ownerFirstName: fullUser.value.firstName,
        ownerLastName: fullUser.value.lastName,
        ownerEmail: fullUser.value.userEmail
    }
    
    createPost(post);
    title.value = ('');
    content.value = ('');
    updatePosts();
}

</script>

<style scoped>
::placeholder {
    color: darkgray;
}

.ib-horizontal-divider {
    color: darkgray;
}
</style>