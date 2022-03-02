import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyC4tiwYUGt0iFFHGWlUUWjGbQzFWJZX2zs',
  authDomain: 'ig-clone-60973.firebaseapp.com',
  projectId: 'ig-clone-60973',
  storageBucket: 'ig-clone-60973.appspot.com',
  messagingSenderId: '623175335938',
  appId: '1:623175335938:web:c3654cb050c7e08843a71b',
  //   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  //   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  //   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  //   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  //   appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
