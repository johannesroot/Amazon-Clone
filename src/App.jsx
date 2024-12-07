// import { useState } from 'react'
import { useContext, useEffect } from 'react'
import './App.css'
// import CarouselEffect from './Components/Carousel/Carousel'
// import Category from './Components/Category/Category'
// import Header from './Components/Header/Header'
// import Product from './Components/Product/Product'
// import Landing from './Pages/Landing/Landing'
import Router from './Pages/Router/Router'
import { DataContext } from './Components/DataProvider/DataProvider'
import { Type } from './Utility/action.type'
import { auth } from './Utility/firebase'
function App() {
  const [{ user }, dispatch] = useContext(DataContext);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
       
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
          dispatch({
          type: Type.SET_USER,
          user: null,
        });
      }
    });
  }, []);
  return (
    <>
    <Router />
    </>
  )
}

export default App
