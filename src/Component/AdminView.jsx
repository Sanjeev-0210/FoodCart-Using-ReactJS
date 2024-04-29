import '../Styles/AdminView.css'
import StarOutlinedIcon from '@mui/icons-material/StarOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const AdminView = () => {
    let [data, setdata] = useState([]);
    let [force,setforce]=useState(true);

    useEffect(() => {
        axios.get('https://my-json-server.typicode.com/Sanjeev-0210/DB-FoodCart/Products')
            .then((res) => {
                console.log(res.data);
                setdata(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [force])   //-------------->Data Dependencies / Force Rendering

    let removeDish=(id,name)=>{
            axios.delete(`https://my-json-server.typicode.com/Sanjeev-0210/DB-FoodCart/${id}`)
            .then((res)=>{
                alert(name+" has been Removed Successfully!!!")
                setforce(false)
            })
            .catch((err)=>{
                alert("Data Not Found!!!")
            })
    }

    let navigate=useNavigate()
    function editdish(id){
        navigate(`/adminhomepage/editproduct/${id}`)
    }
    
    return (
        <div className='adminviewpage'>
            {data.map((x) => {
                return (
                    <div className="displayproducts">
                        <img src={x.url} alt="" />
                        <h2>{x.name}</h2>
                        <h5>{x.restaurant}</h5>
                        <span><p>Price: <strike>₹{x.price}</strike> ₹{x.price-x.price*20/100}</p></span>
                        <span> <p>Quantity: {x.quantity} </p> <p> {x.ratings} <StarOutlinedIcon id="star" /></p>
                        <span id='icon'><EditIcon onClick={()=>editdish(x.id)}/>
                        <DeleteIcon onClick={()=>removeDish(x.id,x.name)}/></span>
                        </span>
                        {/* <button>Edit</button> */}
                        
                        {/* <button >Delete</button> */}
                    </div>
                )
            })}

        </div>
    );
}

export default AdminView;