import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router'
import { addDoc, collection } from 'firebase/firestore';
import Swal from 'sweetalert2';
import db from '../firebase';

function Modal({setClick,houseStatus,housePrice,houseAdress}) {
  const navigate= useNavigate()
const[name,setName]=useState()
const[email,setEmail]=useState()
const[tel,setTel]=useState()
const[message,setMessage]=useState()

const addHandler=()=>{

  const colRef=collection(db,"contact");
    addDoc(colRef,{
      name:name,
      email:email,
      tel:tel,
      message:message,
      houseStatus:houseStatus,
      housePrice:housePrice,
      houseAdress:houseAdress
    })

   
   
  }

  
  
    return ReactDOM.createPortal(
    <>
    <div className='ui dimmer show modals visible active'>
      <div className='w-full '>
    <div className='max-w-6xl mx-auto'>
        <div className='text-center'>
          <h1 className="text-6xl font-bold text-white">Contact</h1>
          <p className='pt-2 text-xl text-white'>Contactez-Nous</p>
        </div>
      </div>
      <div className='mt-16 relative max-w-4xl mx-auto'>
        <div id="bgprofile" className='bg-gradient-to-r from-cyan-600 to-teal-600 absolute z-10 inset-0 shadow-lg transform -skew-6 sm:skew-0 sm:-rotate-6 rounded-lg'></div>
        <div className='relative z-20 bg-white rounded-md shadow-md p-12'>
        <FontAwesomeIcon onClick={() => setClick(false)} className='absolute right-3 cursor-pointer text-2xl top-3' icon={faTimes} />

          <form action='' onSubmit={(e)=>{e.preventDefault()
            addHandler()
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Envoyer avec succes',
              showConfirmButton: false,
              timer: 1500
            })
            navigate("/")}} >
            <div className='grid grid-cols-1 gap-x-8 gap-y-6'>
              <input type="text" onChange={(e)=>setName(e.target.value)} placeholder='Nom' className="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-300 focus:border-gray-600" />
              <input type="email" onChange={(e)=>setEmail(e.target.value)} placeholder='E-mail' className="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-300 focus:border-gray-600" />
              <input type="tel" onChange={(e)=>setTel(e.target.value)} placeholder='Tel' className="border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-300 focus:border-gray-600" />
              <textarea cols="30" onChange={(e)=>setMessage(e.target.value)} rows="5" placeholder='Message' className='border border-gray-200 outline-none px-4 py-2 rounded-md hover:border-gray-300 focus:border-gray-600'></textarea>
            </div>
          <button id='send_mes'  className='bg-gradient-to-r from-cyan-600 to-teal-600 inline-block w-auto mt-6 px-6 py-2 rounded-md shadow-md text-white font-bold' type='submit' >Envoyer</button>
          </form>
        </div>
      </div></div></div></>,
    document.querySelector('#root')
  ) }


export default Modal
