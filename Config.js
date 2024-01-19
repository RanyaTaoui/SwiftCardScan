import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';




const firebaseConfig = {
    apiKey: "AIzaSyCwmssKkUTlqqbuZs1sIoZ8eBCO98uqSd0",
    projectId: "swiftcs-44ed9",
    storageBucket: "swiftcs-44ed9.appspot.com",
    messagingSenderId: "194533806709",
    appId: "1:238259654844:android:a8b35faf91eec1a0af00b9",
  };


  const app = initializeApp(firebaseConfig);

if(!firebase.apps.length){
        firebase.initializeApp(firebaseConfig);
        console.log('Firebase Connected')

}
const authentication = geAuth(app);
const db = getFirestore(app);
export {firebase,authentication,db,};