import React, { useState, useEffect } from 'react'
import db from '../../firebase'
import { collection, getDocs } from "firebase/firestore";
import ReactDOM from 'react-dom'
import Swal from 'sweetalert2';

function Modal({setAuthenticated}) {
const[ login,setLogin]=useState();
const[ pwd,setPwd]=useState()
  const [auth, setAuth] = useState([]);

 useEffect(()=>{
   const getData=async ()=>{
     const authInfo=await getDocs(collection(db,"admin"))
     setAuth(authInfo.docs.map((doc)=>({...doc.data(), id:doc.id})))
     
   }
   getData();
 },[]);


 const handleAuth=()=>{
   if((auth[0].login===login)&&(auth[0].pwd===pwd)){
     setAuthenticated(true)
   }else{
    Swal.fire({
      position: 'center',
      icon: 'error',
      title: 'error username or password',
      showConfirmButton: false,
      timer: 1500
    })
   }
 }
  
    return ReactDOM.createPortal(
    <>
    

      <div class="bg-gradient-to-tr from-sky-200 to-sky-500">
  <section id="login" class="p-4 flex flex-col justify-center min-h-screen max-w-md mx-auto">
    <div class="p-6 bg-sky-100 rounded">
      <div class="flex items-center justify-center text-4xl font-black text-sky-900 m-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="mr-3 w-10 h-10" viewBox="0 0 20 20" fill="currentColor">
        <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
        </svg>
      <h1 class="tracking-wide">ADMIN<span class="font-mono">™</span></h1>
      </div>
        <form class="flex flex-col justify-center">
          <label class="text-sm font-medium">Username</label>
          <input class="mb-3 px-2 py-1.5
          mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
           type="text" name="username" placeholder="Username" onChange={(e)=>{setLogin(e.target.value)}} required/>
          <label class="text-sm font-medium">Password</label>
          <input class="
          mb-3 mt-1 block w-full px-2 py-1.5 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
          focus:outline-none
          focus:border-sky-500
          focus:ring-1
          focus:ring-sky-500
          focus:invalid:border-red-500 focus:invalid:ring-red-500"
           type="password" name="password" placeholder="********" onChange={(e)=>{setPwd(e.target.value)}} required/>
          <button onClick={handleAuth} class="px-4 py-1.5 rounded-md shadow-lg bg-sky-600 font-medium text-gray-100 block hover:bg-sky-700 transition duration-300" >
            <span id="login_process_state" class="hidden">Checking ...</span>
            <span id="login_default_state">Login</span></button>
        </form>
    </div>
  </section>

  
</div></>,
    document.querySelector('#root')
  ) }


export default Modal
