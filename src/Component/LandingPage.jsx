import React from 'react'
import '../Styles/LandingPage.css'
import { Link } from 'react-router-dom' 
const LandingPage=()=>{
    return(
        <div >
            <img id="landingpage" src="https://as1.ftcdn.net/v2/jpg/02/97/67/70/1000_F_297677001_zX7ZzRq8DObUV5IWTHAIhAae6DuiEQh4.jpg" alt="" />
            <div className="landingpage lp">
            <div className="sub_lp">
                <Link to='/admin'>  
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ21cd980vRRom8-XON3Cez8fGy5F51LOuCCg&usqp=CAU" alt="" />
                <h3>Admin</h3>
                </Link>
                </div>
                <div className="sub_lp">
                <Link to='/user'>
                    <img src="https://cdn-icons-png.flaticon.com/512/9187/9187604.png" alt="" />
                    <h3>User</h3>
                </Link>
            </div>
        </div>
        </div>
    )

}
export default LandingPage