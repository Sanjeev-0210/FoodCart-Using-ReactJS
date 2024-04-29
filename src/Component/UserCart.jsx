import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import axios from 'axios';
import { useEffect, useState } from 'react';
import '../Styles/UserCart.css'
import { useParams } from 'react-router-dom';
const Usercart = () => {
    // let [data, setdata] = useState([]);
    let [count, setcount] = useState(1);


    let[restaurant,setrestaurant]=useState("")
    let[name,setname]=useState("")
    let[price,setprice]=useState("")
    let[url,seturl]=useState("")
    function add() {
        setcount(count++);
        // console.log(count);
    }
    function minus() {
        if (count > 0)
            setcount(count--);
        // console.log(count);
    }
    let param=useParams();

    useEffect(() => {
        axios.get(`http://localhost:1000/Products/${param.id}`)
            .then((res) => {
                console.log(res.data);
                // setdata(res.data);
                setrestaurant(res.data.restaurant)
                setname(res.data.name)
                setprice(res.data.price)
                seturl(res.data.url)
            })
    })
    return (
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
    );
}

export default Usercart;