import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: 'AIzaSyAgBEVnIQiVyYHYGyfmHUA2w0YQApOMZ38',
  authDomain: 'trackr-login-996d3.firebaseapp.com',
  projectId: 'trackr-login-996d3',
  storageBucket: 'trackr-login-996d3.appspot.com',
  messagingSenderId: '440110933926',
  appId: '1:440110933926:web:a492dfe372818a289e1167',
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)

