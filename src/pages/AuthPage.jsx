import React, { useState } from "react";
import LoginPage from "../Features/Authentication/LoginPage";
import SignUp from "../Features/Authentication/SignUp";

function AuthPage() {
 const [isLogin, setIsLogin] = useState(true);
  return(
    <div className="flex bg-amber-200 ">
    
      <div  className="flex bg-white flex-col justify-center items-center w-full h-screen">
       
        <button onClick={()=>setIsLogin(false)} className="p-4">signup</button>
        <button onClick={()=>setIsLogin(true)} >sigin</button>
     
{isLogin?<LoginPage/>:<SignUp/>}
       </div>
      </div>
   
  )
}

export default AuthPage;
