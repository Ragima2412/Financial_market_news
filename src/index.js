import React, { createContext, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as firebase from 'firebase/firebase-app';
import 'firebase/storage';
import 'firebase/firestore';
import "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCPSWEQFkJGs2kCT1I_iOCUSKFEu3pfssQ",
  authDomain: "financenews-76c19.firebaseapp.com",
  projectId: "financenews-76c19",
  storageBucket: "financenews-76c19.appspot.com",
  messagingSenderId: "107757721611",
  appId: "1:107757721611:web:b9ea3f9d18581053c3cf0e",
  measurementId: "G-BVTPTZ1G9N"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
let articles = [];

const db = getFirestore();
const getdata = async () => {
  const querySnapshot = await getDocs(collection(db, "news_articles"));
  querySnapshot.forEach((doc) => { articles.push(doc.data()) })

}

getdata();

export const Context = React.createContext({ articles: articles });

ReactDOM.render(
  <Context.Provider value={articles} >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Context.Provider>,
  document.getElementById('root')
);

reportWebVitals();
