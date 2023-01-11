import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB1Q8ifmXaVnmcBUNGpnzVPvX8PAW2yXjI",
    authDomain: "hello-5be46.firebaseapp.com",
    projectId: "hello-5be46",
    storageBucket: "hello-5be46.appspot.com",
    messagingSenderId: "377069361667",
    appId: "1:377069361667:web:2a846432810926cd3d4c36",
    measurementId: "G-CRPHVQ55PH"
  };

  export const Firebase=firebase.initializeApp(firebaseConfig)