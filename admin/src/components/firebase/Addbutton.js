import React from 'react';
import { Link } from 'react-router-dom';
function Addbutton() {
  return (
    
<Link to="/ajouter" className="border border-green-500 text-green-500 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-green-600 focus:outline-none focus:shadow-outline" >
    Ajouter une Annonce
</Link>
    

  );
}

export default Addbutton;