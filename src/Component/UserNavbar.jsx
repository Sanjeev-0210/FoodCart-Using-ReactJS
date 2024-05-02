import { Link } from "react-router-dom";
import '../Styles/UserNavbar.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MenuIcon from '@mui/icons-material/Menu';

const UserNavbar = () => {
    return ( 
        <div className="userNavbar">
            <div className="logo">
                <h1>Food<span>Cart</span></h1>
                
            </div>

            <div className="options">
                <Link to="/userhomepage/userview"><FavoriteBorderIcon/></Link>
                
                <Link to="/userhomepage/usercart"><ShoppingCartIcon/></Link>
                <Link to="/landingpage"><MenuIcon id="menu"/></Link>

                
            </div>
        </div>
     );
}
 
export default UserNavbar;