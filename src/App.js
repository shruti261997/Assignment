import "./App.css";
import SignIn from "./component/Login";

import {
  BrowserRouter,
  Route,
  Routes,
  
} from "react-router-dom";
import AddProducts from "./component/AddProducts";
import React, { useContext, useEffect } from "react";
import { Login } from "./component/context/context";
import Products from "./component/Products";
import Menubar from "./component/Menubar";



function App() {
  let context = useContext(Login);
  const userId = localStorage.getItem("login");

  useEffect(()=>{
    if(userId)
    {
      context.dispatch({type:'login'});
    }
  },[])
  let routes = userId?.length ? (
    <>
      <Route path="/products" element={<Products />} />
      <Route path="/" element={<SignIn />} />
     {<Route path="/addproducts" element={<AddProducts />} />}
    </>
  ) : (<>
     <Route path="/products" element={<SignIn />} />
      <Route path="/addproducts" element={<SignIn />} />
      <Route path="/" element={<SignIn />} />
     </>);
  
  return (
    <>
     <BrowserRouter>
      <Menubar />
      <Routes>{routes}</Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
