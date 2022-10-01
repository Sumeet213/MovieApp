import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDtIcXTTVZ0cbP0cSqRj_IYcNdmAzyHbqA',
  authDomain: 'netflix-clone-e4036.firebaseapp.com',
  projectId: 'netflix-clone-e4036',
  storageBucket: 'netflix-clone-e4036.appspot.com',
  messagingSenderId: '905404164735',
  appId: '1:905404164735:web:a9d8e3291e96d92bedad4a',
  measurementId: 'G-KNBJDXB0YX',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
