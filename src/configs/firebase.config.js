import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBO5SrBkjgbIWlyP4b4PY10XrRIjPE-z24",
  authDomain: "mini-ecoomerce.firebaseapp.com",
  projectId: "mini-ecoomerce",
  storageBucket: "mini-ecoomerce.appspot.com",
  messagingSenderId: "346664202462",
  appId: "1:346664202462:web:bd65e92401ec199c8e924f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();
export const auth = getAuth(app)
