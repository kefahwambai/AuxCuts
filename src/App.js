import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Topbar from './Components/Topbar/topbar';
import Midbar from './Components/Midbar/midbar';
import Logo from './Components/Logobar/logo';
import { BrowserRouter as Router } from 'react-router-dom';
import HomePage from './Components/Homepage/Homepage';


function App() {  
  
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);

  const addToCart = product => {
    setCart([...cart, product]);
  };

  // useEffect(() => {
  //   const storedToken = sessionStorage.getItem('jwt');
   
  //   if (storedToken) {
  //     const [, payloadBase64] = storedToken.split('.'); 
  //     try {
  //       const decodedPayload = atob(payloadBase64); 
  //       const parsedPayload = JSON.parse(decodedPayload);
        
  //       setUser(parsedPayload); 
  //     } catch (error) {
  //       console.error('Error parsing token payload:', error);
  //     } finally {
  //       setLoading(false)
  //     }
  //   } else {
  //     setLoading(false)
  //     console.log("User not found");
  //   }
  // }, []);
  return (
    <Router>
      <div>
        <Topbar />
        <Midbar/>
        <Navbar/>

        <Routes>
        <Route path="/" element={<HomePage />} />
         
        </Routes>
      </div>
    </Router>
  );
}


export default App;
