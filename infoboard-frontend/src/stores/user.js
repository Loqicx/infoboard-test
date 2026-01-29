import { reactive, ref, computed } from "vue"; 
import { defineStore } from "pinia";
import { auth } from "@/firebase/firebase";

export const useUserStore = defineStore('user', () => {

    const currentUser = ref({});

    

})