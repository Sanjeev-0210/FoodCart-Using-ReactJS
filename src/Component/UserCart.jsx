import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../Styles/UserCart.css'
import { Link, useParams } from 'react-router-dom';
const Usercart = () => {
    // let [data, setdata] = useState([]);
    let [count, setcount] = useState(0);


    let[restaurant,setrestaurant]=useState("")
    let[name,setname]=useState("")
    let[price,setprice]=useState("")
    let[url,seturl]=useState("")
    function add() {
        setcount(count+1);
        // console.log(count);
    }
    function minus() {
        if (count > 0)
            setcount(count-1);
        // console.log(count);
    }
    let param=useParams();

    useEffect(() => {
        if(param.id){
            axios.get(`https://my-json-server.typicode.com/Sanjeev-0210/DB-FoodCart/Products/${param.id}`)
            .then((res) => {
                console.log(res.data);
                // setdata(res.data);
                setrestaurant(res.data.restaurant)
                setname(res.data.name)
                setprice(res.data.price)
                seturl(res.data.url)
                setcount(1); //Automatically add item to cart whem loaded
            }) 
        } else{
            //if no param.id,setcount to 0 show empty cart
            setcount(0);
        }
        
    },[param.id]); //Added [aram.id as dependency to useEffect]
    return (

       <div>
        {count > 0 ?(
            <div className="usercart">
            
            <div className="items">
                    <div className="dish">
                        <img src={url} alt="" />
                        <div className="dishname">
                            <span><p><b>{name}</b> <br /> {restaurant} <RemoveIcon className="icon" onClick={minus} /> {count} <AddIcon className="icon" onClick={add} /></p>
                            </span>
                        </div>
                    </div>
                    <h6>Bill details:-</h6>
                    <span id="price"><p>Price: <strike>₹{count * price}</strike>    Discount: 5% </p></span><p> To Pay: ₹{count * price - count * price * 5 / 100}</p>

                    <span id="btn">
                        <button >Order Now <DeliveryDiningIcon /></button></span>
                </div>
            
    </div>
        ):(
            <div className="empty">
            <p style={{"margin":"0"}}>OOPS!</p>
            <h1>Your Cart is Empty!!!</h1>
            <p style={{"margin":"0"}}><Link to="/userhomepage/userview">Please add an Item to proceed</Link>  <br /> CHECK OUT</p>
            </div>
            
        )}
         
        
       </div>
    );
}

export default Usercart;