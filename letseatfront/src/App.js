import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar"
import Home from "./pages/home.js"
import Detail from "./pages/detail.js";
import LogIn from "./pages/logIn.js"
import SignUp from "./pages/signUp.js"
import SignUpOwner from "./pages/signUpOwner.js"
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
          if(token!=null){
          HttpCliente.get("User/ByUser").then(response =>{
            console.log("respuesta app",response);
            setInputRol(response.data.data);
          })}
        }catch (error){
          console.log(error);
        }
      }
      

      cargarUser();
   
  },[]);
console.log("user-rol",rol)
console.log(singUp)
console.log(rol.user.roleId)
 
return (
  <Routes>
    <Route exact path="/" element={<NavBar singUp={singUp} rol={rol.user.roleId} />}>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:restaurant_id" element={<Detail singUp={singUp} rol={rol.user.roleId} />} />
    </Route>  
    {
      singUp === false ?
      <>
        <Route path="logIn" element={<LogIn />} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="signUpOwner" element={<SignUpOwner />} />
      </>
      :
      <>
        <Route path="/profile/" element={<NavBarUser rol={rol.user.roleId} />}>
        {
          rol.user.roleId === 2 &&
              <Route path="U/:user_id" element={<ProfileUser />} />
        }
        {
          rol.user.roleId === 3 &&
              <Route path="O/:user_id" element={<ProfileOwner />} />
        }
        </Route>  
      </>
    }
  </Routes>
)



// if(singUp === false){
//   return (
//     <div className="App">
//       <Routes>
//         <Route exact path="/" element={<NavBar singUp={singUp} rol={rol.user.roleId} />}>
//           <Route path="/" element={<Home />} />
//           <Route path="/detail/:restaurant_id" element={<Detail singUp={singUp} rol={rol.user.roleId} />} />
//         </Route>  
//         <Route path="logIn" element={<LogIn />} />
//         <Route path="signUp" element={<SignUp />} />
//       </Routes>
//     </div>
//   );
//  }
//  if(singUp === true){
//     if(rol.user.roleId === 3){
//       return (
//         <div className="App">
//           <Routes>
//             <Route path="/" element={<NavBar singUp={singUp} rol={rol.user.roleId} />}>
//               <Route path="/" element={<Home />} />
//               <Route path="/detail/:restaurant_id" element={<Detail singUp={singUp} rol={rol.user.roleId} />} />
//             </Route>  
    
//             <Route path="/profile/" element={<NavBarUser  rol={rol.user.roleId} />}>
//               <Route path="O/:user_id" element={<ProfileOwner />} />
//             </Route>  
            
//           </Routes>
//         </div>
//       );
//     }
//     if(rol.user.roleId === 2){
//       return (
//         <div className="App">
//           <Routes>
//             <Route exact path="/" element={<NavBar singUp={singUp} rol={rol.user.roleId} />}>
//               <Route path="/" element={<Home />} />
//               <Route path="/detail/:restaurant_id" element={<Detail singUp={singUp} rol={rol.user.roleId} />} />
//             </Route>  
    
//             <Route path="/profile/" element={<NavBarUser rol={rol.user.roleId} />}>
//               <Route path="U/:user_id" element={<ProfileUser />} />
//             </Route>  
    
    
           
//             <Route path="signUpOwner" element={<SignUpOwner />} />
//           </Routes>
//         </div>
//       );
//     }
//  }

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
