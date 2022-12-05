import React, { useEffect, useState } from "react";
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
import HttpCliente from "./services/HttpCliente"

function App() {

  const [singUp, setInput] = useState(false)
  const [rol, setInputRol] = useState({
    user:""
  })
  useEffect(()=>{
      async function cargarUser(){
        var token = window.localStorage.getItem('security_token')
        if(token!=null){
          setInput(true);
        }
        try{
          HttpCliente.get("User/ByUser").then(response =>{
            console.log("respuesta app",response);
            setInputRol(response.data.data);
          })
        }catch (error){
          console.log(error);
        }
      }
      

      cargarUser();
   
  },[]);
console.log("user-rol",rol)
console.log(singUp)
console.log(rol.user.roleId)
 
if(!singUp){
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/" element={<NavBarSimple />}>
        <Route path=":restaurant_id" element={<Detail />} />
        </Route>  
        <Route path="logIn" element={<LogIn />} />
        <Route path="signUp" element={<SignUp />} />
      </Routes>
    </div>
  );
 }
 if(singUp){
    if(rol.user.roleId === 3){
      return (
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
    
            <Route path="/detail/" element={<NavBarSimple />}>
            <Route path=":restaurant_id" element={<Detail />} />
            </Route>  
    
            <Route path="/profile/" element={<NavBarUser />}>
            <Route path="O/:user_id" element={<ProfileOwner />} />
            </Route>  
            
          </Routes>
        </div>
      );
    }
    if(rol.user.roleId === 2){
      return (
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
    
            <Route path="/detail/" element={<NavBarSimple />}>
            <Route path=":restaurant_id" element={<Detail />} />
            </Route>  
    
            <Route path="/profile/" element={<NavBarUser />}>
           
            <Route path="U/:user_id" element={<ProfileUser />} />
            </Route>  
    
    
           
            <Route path="signUpOwner" element={<SignUpOwner />} />
          </Routes>
        </div>
      );
    }
 }

  /* return (
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
  ); */
}

export default App;
