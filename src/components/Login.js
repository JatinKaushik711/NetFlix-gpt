import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";  // Ensure this is the correct path
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = (e) => {
        e.preventDefault();  // Correctly prevent the default form submission

        // Validate the form data
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        if (!isSignInForm) {
            // Sign-Up Logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                      displayName: name.current.value, photoURL: "https://lh3.googleusercontent.com/a/ACg8ocIzrZJfMDZsLvw58A6q7mhBqsPvnLVHvHzscbJX99V8IqN__qt0=s360-c-no"
                    }).then(() => {
                      // Profile updated!
                      // ...
                      const {uid, email, displayName, photoURL} = auth.currentUser;
              dispatch(addUser({uid: uid, email: email, 
                displayName: displayName, 
                photoURL: photoURL}));
                    }).catch((error) => {
                      // An error occurred
                      // ...
                    });
                    console.log(user);
                    navigate("/browse");  // Navigate after successful signup
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(`${errorCode} - ${errorMessage}`);
                });
        } 
        else {
            // Sign-In Logic
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    navigate("/browse");  // Navigate after successful signin
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(`${errorCode} - ${errorMessage}`);
                });
        }
    };

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };

    return (
        <div>
            <Header />
            <div className="absolute">
                <img 
                    className="w-screen"
                    src="https://cdn.neowin.com/news/images/uploaded/2023/05/1683747988_background-size1920x1080-4e1694a6-75aa-4c36-9d4d-7fb6a3102005-bc5318781aad7f5c8520.jpg"
                    alt="bg-img"
                />
            </div>
        
            <form 
                onSubmit={handleButtonClick}  // Handle form submission
                className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-85"
            >
                <h1 className="text-2xl font-bold py-4">
                    {isSignInForm ? "Log In" : "Sign Up"}
                </h1>
                {!isSignInForm && (
                    <input 
                        type="text" 
                        placeholder="Full Name" 
                        className="p-4 my-4 w-full bg-gray-600 opacity-80"
                    />
                )}
                <input 
                    ref={email}
                    type="text" 
                    placeholder="Email Address" 
                    className="p-4 my-4 w-full bg-gray-600 opacity-80"
                />
                <input 
                    ref={password}
                    type="password" 
                    placeholder="Password" 
                    className="p-4 my-4 w-full bg-gray-600 opacity-80"
                />
                <p className="text-red-600">{errorMessage}</p>
                <button 
                    type="submit"  // Make the button submit the form
                    className="p-4 my-6 bg-red-600 w-full rounded-lg"
                >
                    {isSignInForm ? "Log In" : "Sign Up"}
                </button>
                <p className="p-2 my-2 cursor-pointer" onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign Up Now" : "Already a user"}
                </p>
            </form>
        </div>
    );
}

export default Login;
