import { Route, Routes } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminView from "./AdminView";
import AdminAddProduct from "./AdminAddProduct";
import EditProduct from "./EditProduct";

const AdminHomePage = () => {
    return ( 
        <div>
            <AdminNavbar/>
            <Routes>
                <Route path="/" element={<AdminView/>}></Route>
                <Route path="/adminview" element={<AdminView/>}></Route>
                <Route path="/adminaddproduct" element={<AdminAddProduct/>}></Route>
                <Route path="/editproduct/:id" element={<EditProduct/>}></Route>
            </Routes>
            
            
        </div>
     );
}
 
export default AdminHomePage;