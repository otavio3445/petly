// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from '@firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnajDwTVb3ywJOOWKKRqzvWGkfteXxLD0",
  authDomain: "bd-petly.firebaseapp.com",
  projectId: "bd-petly",
  storageBucket: "bd-petly.appspot.com",
  messagingSenderId: "918900320431",
  appId: "1:918900320431:web:3d8eb213128057f333cc5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const bd_pets = collection(firestore, "Pets");
export const all_pets = bd_pets;
export async function getDocsFB() {
    const pets = await getDocs(all_pets);
    return pets
}
// const bd_pets = collection(firestore, "bd-petly");
