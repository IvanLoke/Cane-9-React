import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyC_q9Q8usjHl56dIc4H9uuAC7bv9qRvzJY",
  authDomain: "cane-9.firebaseapp.com",
  projectId: "cane-9",
  storageBucket: "cane-9.appspot.com",
  messagingSenderId: "211763781904",
  appId: "1:211763781904:web:867c6312fadea18c0a8595"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
