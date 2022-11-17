import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import ReactDom from "react-dom";

import { auth } from "./firebase";
import { login, logout } from "./Features/userSlice";
import { Provider } from "react-redux";
import store from "./Store";
import "./App.css";
const SignupScreen = lazy(() => import("./Screens/SignupScreen"));
const ProfileScreen = lazy(() => import("./Screens/ProfileScreen"));
const LoginScreen = lazy(() => import("./Screens/StartScreen"));
const HomeScreen = lazy(() => import("./Screens/HomeScreen"));

const App = () => {
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        console.log(userAuth);
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
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
        {!user ? (
          <Suspense fallback={"loading..."}>
            <LoginScreen />
          </Suspense>
        ) : (
          <Suspense fallback={"loading..."}>
            <Routes>
              <Route exact path="/" element={<HomeScreen />} />
              <Route path="/SignupScreen" element={<SignupScreen />} exact />
              <Route path="/LoginScreen" element={<LoginScreen />} exact />
              <Route path="/ProfileScreen" element={<ProfileScreen />} exact />
              <Route path="*" element={<ProfileScreen />} />
            </Routes>
          </Suspense>
        )}
      </BrowserRouter>
    </div>
  );
};
export default App;
ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
