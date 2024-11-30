import { useState } from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const adminToken = import.meta.env.VITE_ADMIN_TOKEN; // Get token from env
  const [userToken, setUserToken] = useState( localStorage.getItem("userToken"))




  if (!userToken || userToken !== adminToken) {
    return(<div> <input type="password" onChange={(e) =>{
      setTimeout(() => {
      localStorage.setItem("userToken", e.target.value);
       setUserToken(e.target.value)},100)
      }} /></div>);
  }



  return children;
};

export default ProtectedRoute;
