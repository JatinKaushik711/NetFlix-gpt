import { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignInForm,setIsSignInForm] = useState(true);

    const toggleSignInForm = () =>{
        setIsSignInForm(!isSignInForm);
    };
    return (
        <div>
            <Header/>
            <div className="absolute">
            <img 
            className="w-screen"
            src="https://cdn.neowin.com/news/images/uploaded/2023/05/1683747988_background-size1920x1080-4e1694a6-75aa-4c36-9d4d-7fb6a3102005-bc5318781aad7f5c8520.jpg"
            alt = "bg-img"/>
            </div>
        
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85">
          <h1 className="text-2xl font-bold py-4">
            {isSignInForm ? "Log In" : "Sign Up"}
            </h1>
          {!isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-600 opacity-80"/>}
          <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-600 opacity-80"/>
          <input type="password" placeholder="Passwaord" className="p-4 my-4 w-full bg-gray-600 opacity-80"/>
          <button className="p-4 my-6 bg-red-600 w-full rounded-lg">{isSignInForm ? "Log In" : "Sign Up"}</button>
          <p className="p-2 my-2 cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "New to Netflix? Sign Up Now" : "Already a user"}</p>
        </form>

        </div>
    )
}

export default Login;