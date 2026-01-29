import { ref, onBeforeUnmount, onBeforeUpdate, onMounted, reactive } from 'vue'
import {
    getAuth,
    signOut,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth'
import { useRouter } from 'vue-router'
import { auth } from '@/firebase/firebase'
import { useFirestore } from '@/composables/useFirestore'

const email = ref('')
const password = ref('')
const isLoggedIn = ref(false)
const fullUser = ref({})
const fullUserAlt = reactive({})

export function useUser() {
    const router = useRouter()
    const { createUser, getFullUser } = useFirestore()

    const login = () => {
        signInWithEmailAndPassword(getAuth(), email.value, password.value)
            .then(async (data) => {
                fullUser.value = await getFullUser(data.user.uid)
                fullUser.value.uid = data.user.uid
                router.push('/infoboard')
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    const register = (additionalData) => {
        createUserWithEmailAndPassword(getAuth(), email.value, password.value)
            .then((data) => {
                const tmpUser = {
                    firstName: additionalData.firstName,
                    lastName: additionalData.lastName,
                    email: email.value,
                    id: data.user.uid
                }
                router.push('/infoboard')
                createUser(tmpUser)
            })
            .catch((error) => {
                alert(error.message)
            })
    }

    onAuthStateChanged(getAuth(), async function (user) {        
        if (Object.keys(fullUser.value).length == 0) {
            fullUser.value = await getFullUser(user.uid)
            fullUser.value.uid = user.uid
        }
        user ? (isLoggedIn.value = true) : (isLoggedIn.value = false)
    })

    const signOutUser = () => {
        signOut(getAuth());
        isLoggedIn.value = false;
        router.push('/')
    }

    onBeforeUpdate(() => {
        if (isLoggedIn.value) {
            email.value = getAuth().currentUser.email
        }
    })

    return { login, register, signOutUser, email, password, isLoggedIn, fullUser }
}
