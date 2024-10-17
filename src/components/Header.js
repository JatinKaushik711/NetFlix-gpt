import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";


const Header = () =>{

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
           
          });
    };

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({uid: uid, email: email, 
                displayName: displayName, 
                photoURL: photoURL}));
                navigate("/browse");
              // ...
            } else {
              // User is signed out
              // ...
              dispatch(removeUser());
              navigate("/");
            
            }
          });
          
    },[]);

    return(
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex flex-wrap justify-between">
            <img 
            className="w-44 rounded-lg"
            src="https://images.ctfassets.net/y2ske730sjqp/1aONibCke6niZhgPxuiilC/2c401b05a07288746ddf3bd3943fbc76/BrandAssets_Logos_01-Wordmark.jpg?w=940"
            alt="logo"/>

            {user && (<div className="flex flex-wrap">
                <img 
                className = "w-14" src ="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Netflix-new-icon.png/240px-Netflix-new-icon.png" 
                alt="icon"/>
                <button onClick={handleSignOut} className="bg-red-500 rounded-lg p-2 m-2">Sign Out</button>
            </div>)}
        </div>

    )
}

export default Header;