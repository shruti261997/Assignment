import "./App.css";
import SignIn from "./component/Login";

import {
  BrowserRouter,
  Route,
  Routes,
  
} from "react-router-dom";
import AddProducts from "./component/AddProducts";
import React, { useContext } from "react";
import { Login } from "./component/context/context";
import Products from "./component/Products";



function App() {
  let context = useContext(Login);
  const userId = localStorage.getItem("login");
  console.log(userId?.length);
  let routes = userId?.length ? (
    <>
      <Route path="/products" element={<Products />} />
      <Route path="/" element={<SignIn />} />
     {context.login && <Route exact path="/addproducts" element={<AddProducts />} />}
    </>
  ) : (<>
     <Route path="/products" element={<SignIn />} />
      <Route path="/addproducts" element={<SignIn />} />
      <Route path="/" element={<SignIn />} />
     </>);
  //console.log(routes)
  return (
    <>
      {console.log(context?.login, "login")}

      <BrowserRouter>
      <Routes>{routes}</Routes>
      </BrowserRouter>
     
    </>
  );
}

export default App;
