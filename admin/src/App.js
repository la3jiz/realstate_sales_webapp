import List from './components/firebase/list';
import Add from './components/firebase/Add';
import { BrowserRouter as Router,Link,Route,Routes} from "react-router-dom";
import Addbutton from './components/firebase/Addbutton';
import Modal from './components/auth/Modal';
import { useState } from 'react';
import ListHousesButton from './components/firebase/ListHousesButton';
import Logout from './components/auth/Logout';
import ListConatct from './components/firebase/ListConatct';
import ListContactButton from './components/firebase/ListContactButton';
import AddWithMultipleImages from './components/firebase/AddWithMultipleImages'

function App() {
  const[authenticated, setAuthenticated]=useState(false)


  return (
   
    <div className="App">
   {authenticated?

<Router>
  <div className='flex mt-2 mb-24'>
    <Link to='/' className='mx-4 sm:ml-8 sm:mr-24 py-6 sm:py-2 text-4xl font-bold text-yellow-600'>GIRALDA</Link>
<Addbutton/>
<ListHousesButton/>
<ListContactButton/>
</div>
<div className='absolute top-20 sm:top-2 sm:right-1'>
<Logout setAuthenticated={setAuthenticated}/>

</div>
        <Routes>

          
      <Route path="/ajouter" element={<AddWithMultipleImages />} />
      <Route path="/maisonlist" element={<List />} />
      <Route path="/contactlist" element={<ListConatct />} />

      </Routes>
      </Router>:<Modal setAuthenticated={setAuthenticated}/>}
      
    </div>
  

  );
}

export default App;
