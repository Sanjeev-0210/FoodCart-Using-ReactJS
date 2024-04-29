import { Link } from "react-router-dom";
import '../Styles/AdminNavbar.css'

const AdminNavbar = () => {
    return ( 
        <div className="adminNavbar">
            <div className="logo">
                <h1>Food<span>Cart</span></h1>
            </div>
            <div className="options">
                <Link to="/adminhomepage/adminview">View</Link>
                <Link to="/adminhomepage/adminaddproduct">Add Products</Link>
                {/* <Link to="/adminhomepage/editproduct">Edit Product</Link> */}
            </div>
        </div>
     );
}
 
export default AdminNavbar;