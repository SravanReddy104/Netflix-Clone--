import ReactDom from "react-dom";
import HomeScreen from "./Screens/HomeScreen";
import LoginScreen from "./Screens/LoginScreen";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { login, logout } from "./userSlice";


import { Provider} from "react-redux";
import store from "./Store";
import "./App.css";

import SignupScreen from "./Screens/SignupScreen";
import ProfileScreen from "./Screens/ProfileScreen";

const App = () => {
  const {user} = useSelector(state=>state.user)
  const dispatch = useDispatch();

 


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(login({
          uid:userAuth.uid,
          email:userAuth.email,
        }))
      
        
      } else {
        //logout
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <BrowserRouter>
        {!user? (
          <LoginScreen />
        ) :
         (
        
          <Routes>
              
            <Route exact path="/" element={<HomeScreen />} />
            <Route path="/SignupScreen" element={<SignupScreen/>} exact/>
            <Route path="/LoginScreen" element={<LoginScreen/>} exact/>
            <Route path="/ProfileScreen" element={<ProfileScreen/>} exact/>
            <Route path="*" element={<ProfileScreen/>}/>

         
   
          </Routes>
        )
       
       }
       
      </BrowserRouter>
    </div>
  );
};
export default App;
ReactDom.render(
<Provider store={store}> <App /></Provider> , document.getElementById("root"));
