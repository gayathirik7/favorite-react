import React from "react"
import ReactDom from "react-dom/client";
import App from "./App";
import "./index.css"
const root = ReactDom.createRoot(document.getElementById("root"))

root.render(
    <App></App>
   

)






























// import { BrowserRouter, Route, Routes ,} from "react-router-dom";
// import { useState } from "react";
// import Login from "./login";
// import Singup from "./signin";
// import "./index.css"
// import Landing from "./landing";
// const root = ReactDom.createRoot(document.getElementById("root"))
// const App=()=>{
//     const[data,setdata]=useState([{
//         username:"strily",
//         password:"strilyk7"

//     }])

//     return(
//         <div>
//     <BrowserRouter>
    

//     <Routes>
//     <Route path='/' element={<Login data={data}setdata={setdata}/>}></Route>
//     <Route path='/signup' element={<Singup data={data}setdata={setdata}/>}></Route>
//     <Route path='/landing' element={<Landing/>}></Route>


//     </Routes>
    
//     </BrowserRouter>


//     </div>              
    
        
//     )
// }





























// function Chatname()

// {
//     var [myname,setname]=useState("john")
//     function change(){
//         setname("mike")
//     }

//     return(
//         <div>
//             <h1>{myname}</h1>
//             <button onClick={change}>Change</button>
//         </div>
//     )
// }









