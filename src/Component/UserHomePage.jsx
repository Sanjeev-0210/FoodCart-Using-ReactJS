import { Route, Routes } from "react-router-dom";
import UserNavbar from "./UserNavbar";
import UserView from "./UserView";
import Usercart from "./UserCart";

const UserHomePage = () => {
    return ( 
        <div className="userhomepage">
            <UserNavbar/>
            {/* <UserView/> */}
            <Routes>
            <Route path="/" element={<UserView/>}/>
            <Route path="/userview" element={<UserView/>}/>
            <Route path="/usercart/:id" element={<Usercart/>}/>
            </Routes>
            
        </div>
     );
}
 
export default UserHomePage;