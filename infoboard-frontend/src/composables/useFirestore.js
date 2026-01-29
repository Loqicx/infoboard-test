import { ref } from 'vue'
import { getFirestore, doc, collection, getDocs, getDoc, addDoc, setDoc, query, where, deleteDoc } from 'firebase/firestore'
import {db} from '@/firebase/firebase'


const posts = ref([])

export function useFirestore() {


// ------------------ Post related --------------------
  const updatePosts = async () => {
    const tmpPosts = []
    const postQuery = await getDocs(collection(db, 'posts'))
    postQuery.forEach((post) => {
      const tmpPost = {
        id: post.id,
        title: post.data().title,
        content: post.data().content,
        created: post.data().created,
        edited: post.data().edited,
        userID: post.data().userID,
        ownerFirstName: post.data().ownerFirstName,
        ownerLastName: post.data().ownerLastName,
        ownerEmail: post.data().ownerEmail
      }
      tmpPosts.push(tmpPost)
    })
    tmpPosts.sort((a, b) => {
      return b.created - a.created;      
    })
    posts.value = tmpPosts
    posts.value.forEach((post) => {
    })
  }

  const createPost = async (postData) => {
    await addDoc(collection(db, 'posts'), {
        title: postData.title,
        content: postData.content,
        created: postData.created,
        edited: postData.edited,
        userID: postData.userID,
        ownerFirstName: postData.ownerFirstName,
        ownerLastName: postData.ownerLastName,
        ownerEmail: postData.ownerEmail
    })
  }

  const updatePost = async (postData) => {
    await setDoc(doc(db, 'posts', postData.id), {
      title: postData.title,
      content: postData.content,
      created: postData.created,
      edited: postData.edited,
      userID: postData.userID,
      ownerFirstName: postData.ownerFirstName,
      ownerLastName: postData.ownerLastName,
      ownerEmail: postData.ownerEmail
    })
  }

  

  const deletePost = async (postId) => {
    await deleteDoc(doc(db, 'posts', postId));
  }


// ------------------ User related --------------------
  const getFullUser = async(id) => {
    const docRef = doc(db, 'users', id);

    try {
      const querySnapshot = await getDoc(docRef);
      return querySnapshot.data();
    } catch (e) {
      console.log(e);
    }

    
    
  }

  const createUser = async(userData) => {
    await setDoc(doc(db, 'users', userData.id), {
        firstName: userData.firstName,
        lastName: userData.lastName,
        isAdmin: false,
        userEmail: userData.email,
    })
  }



  return {
    createUser,
    getFullUser,
    createPost,
    updatePosts,
    deletePost,
    updatePost,
    posts
  }
}
