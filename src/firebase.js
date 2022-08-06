import { initializeApp } from 'firebase/app';

import {
  collection,
  getDocs,
  doc,
  getDoc,
  getFirestore,
  query,
  where,
} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBr4bYATAMi5bophEuwcqK_M0Xo4zhwr1g",
  authDomain: "mondinoapp.firebaseapp.com",
  projectId: "mondinoapp",
  storageBucket: "mondinoapp.appspot.com",
  messagingSenderId: "266788910793",
  appId: "1:266788910793:web:5f5086628534272fc8bf18"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

/*Metodo para traer un solo documento de Firebase*/

export const getDetailItem = (id) => {
  const docRef = doc(db, 'Products', id); //referencia a el document
  return getDoc(docRef);
};

/*Metodo para traer todos los doc de una coleccion*/

export const getItems = () => {
    const colRef = collection(db, 'Products'); // referencia a la collection
    const q = query(colRef);
    return getDocs(q);
  };

  /*Metodo para traer datos filtrados de una coleccion*/

export const getItemsFiltered = (categ) => {
    const colRef = query(collection(db, 'Products')) // referencia a la collection
    const q = query(colRef, where("category", "==", categ));
    return getDocs(q);
  };

  /*Metodo para traer una orden de compra especifica*/

  
  export const getOrderById = (id) => {
    const docRef = doc(db, 'orders', id) // referencia a la collection
    return getDoc(docRef);
  };
 

