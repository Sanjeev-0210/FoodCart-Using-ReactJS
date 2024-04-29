import '../Styles/AdminAddProduct.css'
import { useState } from 'react';
import axios from 'axios';
const AdminAddProduct = () => {
    let [category, setcategory] = useState("");
    let [restaurant, setrestaurant] = useState("");
    let [name, setname] = useState("");
    let [price, setprice] = useState("");
    let [quantity, setquantity] = useState("");
    let [description, setdescription] = useState("");
    let [url, seturl] = useState("");
    let [ratings, setratings] = useState("");

    let data={category,restaurant,name,price,quantity,description,url,ratings}

    let addDish=(e)=>{
        e.preventDefault()
        axios.post('http://localhost:1000/Products',data)
        .then((res)=>{
            console.log(res);
            alert("Dish Added Successfully!!!")
        })
        .catch((err)=>{
            alert("Invalid Data!!!")
        })

        // fetch("http://localhost:1000/Products",{
        //      method: "POST",
        //      headers:{"Content-Type": "application/json"},
        //      body: JSON.stringify(data)
        //  })
        //  .then((res)=>{
        //      console.log(res);
        //      alert("Dish added successfully!!!")
        //  })
        //  .catch((err)=>{
        //      alert("Invalid Data!!!")
        //  })
    }



    return (
        <div className="additem">

            <form onSubmit={addDish}>
                <h2>Add Products</h2>
                <label>
                    Category: <select value={category} onChange={(e) => { setcategory(e.target.value) }}>
                        <option>Starters</option>
                        <option>Veg</option>
                        <option>Non - Veg</option>
                        <option>Sea Foods</option>
                        <option>Desserts</option>
                        <option>Breads</option>
                        <option>Chinese</option>
                        <option>Beverages</option>
                    </select>
                </label>
                <br />
                <label value={restaurant} onChange={(e) => { setrestaurant(e.target.value) }}>
                    Restaurant Name: <input required type="text" placeholder="Enter the restaurant name" />
                </label>
                <br />
                <label value={name} onChange={(e) => { setname(e.target.value) }}>
                    Dish Name: <input required type="text" placeholder="Enter the dish name" />
                </label>
                <br />
                <label value={price} onChange={(e) => { setprice(e.target.value) }}>
                    Price: <input required type="text" placeholder="Enter the price" />
                </label>
                <br />
                <label value={quantity} onChange={(e) => { setquantity(e.target.value) }}>
                    Quantity: <input required type="number" />
                </label>
                <br />
                <label value={description} onChange={(e) => { setdescription(e.target.value) }}>
                    Description: <textarea required name="" id="" cols="30" rows="2" placeholder="Enter the product details"></textarea>
                </label>
                <br />
                <label value={url} onChange={(e) => { seturl(e.target.value) }}>
                    Thumbnail URL: <input required type="text" placeholder="Enter the image url" />
                </label>
                <br />
                <label value={ratings} onChange={(e) => { setratings(e.target.value) }}>
                    Ratings: <input required type="number" />
                </label>
                <br />
                <button>Add Dish</button>
            </form>
        </div>
    );
}

export default AdminAddProduct;