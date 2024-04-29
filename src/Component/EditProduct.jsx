import '../Styles/EditProduct.css'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const EditProduct = () => {

    let [category, setcategory] = useState("")
    let [restaurant, setrestaurant] = useState("")
    let [name, setname] = useState("")
    let [price, setprice] = useState("")
    let [quantity, setquantity] = useState("")
    let [description, setdescription] = useState("")
    let [url, seturl] = useState("")
    let [ratings, setratings] = useState("")

    let param = useParams()
    // console.log(param);
    useEffect(() => {
        axios.get(`http://localhost:1000/Products/${param.id}`)
            .then((res) => {
                console.log(res.data);
                setcategory(res.data.category)
                setrestaurant(res.data.restaurant)
                setname(res.data.name)
                setprice(res.data.price)
                setquantity(res.data.quantity)
                setdescription(res.data.description)
                seturl(res.data.url)
                setratings(res.data.ratings)

            })
            .catch((err) => {
                console.log(err);
            })
    },[])

    let data={category,restaurant,name,price,quantity,description,url,ratings}

    let editdish=(e)=>{
        e.preventDefault()
        axios.put(`http://localhost:1000/Products/${param.id}`,data)
        .then((res)=>{
            alert("Dish Updated Successfully!!!")
        })
        .catch((err)=>{
            alert("Couldn't Updated the Item!!!!")
        })
    }



    return (
        <div className='edititem'>

            <form onSubmit={editdish}>
                <h2>Edit Products</h2>
                <label>Category: <select value={category} onChange={(e) => { setcategory(e.target.value) }}>
                    <option>Starters</option>
                    <option>Non-Veg</option>
                    <option>Veg</option>
                    <option>Sea Foods</option>
                    <option>Desserts</option>
                    <option>Breads</option>
                    <option>Chinese</option>
                    <option>Beverages</option>
                </select></label> <br />
                <label >Restaurant Name: <input type="text" value={restaurant} onChange={(e) => { setrestaurant(e.target.value) }} /></label> <br />
                <label >Dish Name: <input type="text" value={name} onChange={(e) => setname(e.target.value)} /></label> <br />
                <label >Price: <input type="text" value={price} onChange={(e) => { setprice(e.target.value) }} /></label> <br />
                <label >Quantity: <input type="number" value={quantity} onChange={(e) => { setquantity(e.target.value) }} /></label> <br />
                <label >Description: <textarea name="" id="" cols="30" rows="2" value={description} onChange={(e) => { setdescription(e.target.value) }}></textarea></label> <br />
                <label >Thumbnail URL: <input type="text" value={url} onChange={(e) => { seturl(e.target.value) }} /></label> <br />
                <label >Ratings: <input type="number" value={ratings} onChange={(e) => { setratings(e.target.value) }} /></label> <br />
                <button>Edit & Save</button>
            </form>
        </div>
    );
}

export default EditProduct;