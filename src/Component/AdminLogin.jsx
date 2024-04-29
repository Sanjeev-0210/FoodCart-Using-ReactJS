import { useEffect, useState } from "react";
import '../Styles/AdminLogin.css'
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AdminLogin = () => {
    let [uname, setuname] = useState("");
    let [password, setpassword] = useState("");

    let [admin, setadmin] = useState("");

    let navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:1000/Manager')
            .then((res) => {
                console.log(res.data);
                setadmin(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])  //  []---->Empty dependencies -->To overcome the infinite usestate

    function login(e) {
        let flag = false;
        e.preventDefault();
        admin.map((x) => {
            if (uname == x.name && password == x.password) {
                alert("Admin logged in successfully!!!");
                navigate("/adminhomepage");
                flag = true;
            }
        })
        if (flag == false) {
            alert("Admin logging Failed!!!")
        }
    }

    // let login=async()=>{
    //     let res=await fetch('http://localhost:1000/Manager');
    //     let data= await res.json()
    //     let flag=false;
    //     data.map((x)=>{
    //         if(uname == x.name && password == x.password){
    //             alert("Admin logged in successfully!!!");
    //             flag=true;
    //         }
    //     })
    //     if(flag==false){
    //         alert("Admin logging Failed!!!")
    //     }
    // }
    return (
        <div className="adminlogin">
            <img src="https://png.pngtree.com/thumb_back/fh260/background/20220923/pngtree-template-promotion-food-cute-color-image_1465445.jpg" alt="" />
            <div id="adminlogin">
                <form action="">
                    <label>
                        Username: <input type="text" value={uname} onChange={(e) => { setuname(e.target.value) }} placeholder="Enter the Username" />
                    </label>
                    <br />
                    <label>
                        Password: <input type="password" value={password} onChange={(e) => { setpassword(e.target.value) }} placeholder="Enter the Password" />
                    </label>
                    <br />
                    <button onClick={login}>Login</button>
                    <p>Are you new to the page? <Link to="/adminsignup">SignUp Now</Link></p>
                    {/* <p>Are you new to the page? <br /> <a href="./AdminSignUp">SignUp Now</a></p> */}
                </form>
            </div>
        </div>

    )
}
export default AdminLogin