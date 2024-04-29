import React, { useEffect, useState } from "react";
import '../Styles/UserLogin.css'
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const  UserLogin = () => {

    let[email,setemail]=useState("");
    let[password,setpassword]=useState("");

    let[user,setuser]=useState("")

    let navigate=useNavigate();

   useEffect(()=>{
    axios.get("https://my-json-server.typicode.com/Sanjeev-0210/DB-FoodCart/User")
    .then((res)=>{
        console.log(res.data);
        setuser(res.data)
    })
    
    .catch((err)=>{
        console.log(err);
    })
   },[])


    let login=()=>{
        let flag=false;
        user.map((x)=>{
            if(x.email==email && x.password==password){
                alert("Logging Successfully")
                navigate("/userhomepage")
                flag=true;
            }
            
        })
        if(flag==false){
            alert("Logging Failed!!!")
        }
    }

    return ( 
        <div className="userlogin">
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20220923/pngtree-template-promotion-food-cute-color-image_1465445.jpg" alt="" />   
        <div id="Userlogin">
            <h1>UserLogin</h1>
            <form>
                <label >
                    Email: <input value={email} onChange={(e)=>{setemail(e.target.value)}} type="text" placeholder="Enter your email" />
                </label>
                <br />
                <label >
                    Password: <input value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password" placeholder="Enter your password" />
                </label>
                <br />
                <button onClick={login}>Login</button>
                <p>Are you new to our page? <Link to="/usersignup"> Register here </Link></p>
            </form>
        </div>
        </div>
     );
}
 
export default UserLogin;