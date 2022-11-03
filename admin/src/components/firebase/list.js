
import React, { useState, useEffect } from 'react'
import db from '../../firebase'
import { collection, getDocs } from "firebase/firestore";
import Delete from './Delete';
import { Link } from 'react-router-dom'

  

const List =()=>{
  const [documents, setDocuments] = useState([]);
 useEffect(()=>{
   const getData=async ()=>{
     const houseData=await getDocs(collection(db,"houses"))
     setDocuments(houseData.docs.map((doc)=>({...doc.data(), id:doc.id})))
     console.log(houseData)
   }
   getData();
 },[]);


return<React.Fragment>
<table class="border-collapse mb-8 w-full">
    <thead>
        <tr>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Image</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Prix</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Type</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Adresse</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Descripton</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Status</th>
            <th class="p-3 font-bold uppercase bg-gray-200 text-gray-600 border border-gray-300 hidden lg:table-cell">Supprimer</th>
        </tr>
    </thead>
    <tbody>
        {documents.map((document)=>
        {return(<tr class="bg-white lg:hover:bg-gray-100 flex lg:table-row flex-row lg:flex-row flex-wrap lg:flex-no-wrap mb-10 lg:mb-0">
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b block lg:table-cell relative lg:static">
            <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Image</span>
                <div className='flex justify-center items-center'>
                <img className=' w-12 h-12 rounded-full  ' src={document.image}/></div>
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Prix</span>
                TND {document.price}
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Type</span>
                {document.type}
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Adresse</span>
                {document.adress}
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 border border-b text-left lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Description</span>
               <p className='text-sm my-4 sm:mr-32'>{document.description}</p>
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Status</span>
                <span class="rounded bg-green-400 py-1 px-3 text-xs font-bold">{document.plus}</span>
            </td>
            <td class="w-full lg:w-auto p-3 text-gray-800 text-center border border-b text-center block lg:table-cell relative lg:static">
                <span class="lg:hidden absolute top-0 left-0 bg-blue-200 px-2 py-1 text-xs font-bold uppercase">Supprimer</span>
               <Delete id={document.id}/>
               </td>
        </tr>
        )})}
    </tbody>
</table>
</React.Fragment>
}
export default List








/*
import React, { useState } from 'react'
import db from '../../firebase'
import { doc, getDoc } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

  

const List =async ()=>{

  const [houses,setHouse]=useState([])
  const querySnapshot = await getDocs(collection(db, "houses"));
  setHouse(querySnapshot.docs.map((doc) =>({...doc.data(), id:doc.id})));  console.log(querySnapshot)
 return <>
 {houses.map(doc=>(<h1>{doc.id}</h1>))}
 </>
}
export default List
*/