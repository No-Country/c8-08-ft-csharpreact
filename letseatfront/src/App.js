import React from "react";
import { Route, Routes } from "react-router-dom";
//import NavBar from "./components/NavBar/NavBar"
import Home from "./pages/home.js"
import Detail from "./pages/detail.js";
import LogIn from "./pages/logIn.js"
import SignUp from "./pages/signUp.js"
import SignUpOwner from "./pages/signUpOwner.js"
import NavBarSimple from "./components/NavBar/NavBarSimple";
import ProfileOwner from "./pages/profileOwner";
import NavBarUser from "./components/NavBar/NavBarUser";
import ProfileUser from "./pages/profileUser";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/detail/" element={<NavBarSimple />}>
        <Route path=":restaurant_id" element={<Detail />} />
        </Route>  

        <Route path="/profile/" element={<NavBarUser />}>
        <Route path="O/:user_id" element={<ProfileOwner />} />
        <Route path="U/:user_id" element={<ProfileUser />} />
        </Route>  


        <Route path="logIn" element={<LogIn />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="signUpOwner" element={<SignUpOwner />} />
      </Routes>
    </div>
  );
}

export default App;
