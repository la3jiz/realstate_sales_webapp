import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore';





const firebaseConfig = {
  apiKey: "AIzaSyCu4UUgXoyquIa4Bk7hIzDr4eAOppAN3OQ",
  authDomain: "real-estate-project-data.firebaseapp.com",
  projectId: "real-estate-project-data",
  storageBucket: "real-estate-project-data.appspot.com",
  messagingSenderId: "792199798655",
  appId: "1:792199798655:web:b21a55a4cdfa430317044a"
};

initializeApp(firebaseConfig)
const db=getFirestore()

export default db
