// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from '@firebase/firestore'
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
const bd_produtos = collection(firestore, "Products");
const bd_users = collection(firestore, "Users");

export async function getDocsFB() {
    const pets = await getDocs(bd_pets);
    return pets
}

export async function getDocsProdsFB() {
  const products = await getDocs(bd_produtos);
  return products
}

export async function getUsersFB() {
    const users = await getDocs(bd_users);
    return users
}

export async function setUsersFB(data) {
    return await addDoc(bd_users, data).then((result) => result);
}
// const bd_pets = collection(firestore, "bd-petly");
