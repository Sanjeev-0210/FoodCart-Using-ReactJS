import axios from "axios";
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../Styles/UserView.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserView = () => {
    let[data,setdata]=useState([]);
    let navigate=useNavigate();
    useEffect(()=>{
        axios.get("https://my-json-server.typicode.com/Sanjeev-0210/DB-FoodCart/Products")
    .then((res)=>{
        console.log(res.data);
        setdata(res.data);
    })
    },[])

    let addcart=(id)=>{
        axios.get(`https://my-json-server.typicode.com/Sanjeev-0210/DB-FoodCart/Products/${id}`)
        .then((res)=>{
            alert("Dish Added to Cart!!!")
            navigate(`/userhomepage/usercart/${id}`)
        })
        .catch((err)=>{
            alert("Can't Added!!!")
        })
    }
    return ( 
        <div className="userview">
            {data.map((x)=>{
                return(
                    <div className="viewitem">
                    <img src={x.url} alt="" />
                        <h2>{x.name}</h2>
                        <h5>{x.restaurant}</h5>
                        <span><p>Price: <strike>₹{x.price}</strike> ₹{x.price-x.price*20/100}</p> <p>Quantity:{x.quantity} </p> <p id="rating">  {x.ratings}<StarOutlinedIcon id="star" /></p>
                        </span>
                        <span id="btn">
                        <button disabled={x.quantity==0?true:false} onClick={()=>(addcart(x.id))}>Add to Cart <ShoppingCartIcon/></button></span>
                    </div>
                )
            })}
        </div>
     );
}
 
export default UserView;