import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import {Route , Routes , Navigate} from "react-router-dom"
import { useState , useCallback,  useEffect } from 'react';
//redux
import store from './redux/store'
//components
import ProductList from './components/ProductList';
import Productdetail from "./components/Productdetail"
import Navbar from './components/Navbar';
import CartShop from './components/CartShop';
import Styles from "./App.css"
import Login from './components/Login';
//context
import AuthContext from "./context/authContext";
import axios from 'axios';



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  

  const logedin = (username) => {
    setIsLoggedIn(true);
    setUserName(username)
    localStorage.setItem("username" , userName)

  };


  const logout = useCallback(() => {
    setIsLoggedIn(false)
    setUserName("")
    localStorage.clear()
    
  });

  useEffect(() => {
    const localStorageData = localStorage.getItem("userName")
    if (localStorageData) {
      axios.get("https://fakestoreapi.com/products")
        .then(() => {
          setIsLoggedIn(true);
          setUserName(localStorageData)
          
        });
    } else {
      setIsLoggedIn(false)
    }
  
  }, [logedin]);; 

  return (
    <div className={Styles.container}>
      <AuthContext.Provider
         value={{
          isLoggedIn,
          userName,
          logedin,
          logout,
        }}
        >
         <Provider store={store}>
          <Navbar/>
        <Routes>
            <Route path='/products' element={<ProductList />}/>
            <Route path='/products/:id' element={<Productdetail/>}/>
            <Route path='/cart' element={<CartShop/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/*' element={<Navigate to='/products'/>}/>
        </Routes>
        </Provider>
        </AuthContext.Provider>
      </div>
  );
}

export default App;
