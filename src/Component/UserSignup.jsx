import { useState } from 'react';
import '../Styles/UserSignup.css'
import axios from 'axios';
const UserSignup = () => {
   let [name,setname]=useState("");
   let [email,setemail]=useState("");
   let [phone,setphone]=useState("");
   let [password,setpassword]=useState("");

    let data={name,email,phone,password}

    let fetchdata=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:1000/User",data)
        .then((res)=>{
            alert("User has been Added Successfully!!!")
        })
        .catch((err)=>{
            alert("Couldn't Add User!!!")
        })
    }
    return ( 
        <div id="usersignup">
            <form onSubmit={fetchdata}>
                <h2>Register Here</h2>
                <label>Name: <input value={name} onChange={(e)=>{setname(e.target.value)}} type="text" required placeholder='Enter your Name'/></label> <br />
                <label>Email: <input value={email} onChange={(e)=>{setemail(e.target.value)}} type="email" required placeholder='Enter your Email'/></label> <br />
                <label>Phone Number: <input value={phone} onChange={(e)=>{setphone(e.target.value)}} type="tel" required placeholder='Enter your Phonenumber'/></label> <br />
                <label>Password: <input value={password} onChange={(e)=>{setpassword(e.target.value)}} type="password" required placeholder='Enter your Password'/></label> <br />
                <button>Register</button>
            </form>
        </div>
     );
}
 
export default UserSignup;