import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; 
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react"; 
import Navigation from "./Navigation"; const Checkout = () => {


    
const location = useLocation(); let cart = location.state;
 
const [users, setUsers] = useState([]);
const [currentUser, setCurrentUser] = useState("");

async function sendData() { let bill = {
user: currentUser, time: Date(), cart: cart,
};

let response = await axios.post("http://localhost:8000/orders", bill); let serverMessage = response.data;
alert(serverMessage);
}

async function getData() {
let userData = (await axios.get("http://localhost:8000/users")).data; setUsers(userData);
}

function isEmpty() {
return currentUser.length === 0;
}

const handlePay = (e) => { e.preventDefault();

console.log(currentUser);
if (isEmpty()) alert("Order Failed: Please select a valid account."); else {
sendData();
alert("Order placed successfully. Thank you for your purchase.");
}
};

useEffect(() => { getData();
}, []);

let total = 0; return (
<>
<Navigation />
<div className="bg-dark p-4">
<div className="d-flex justify-content-center align-items-center">
<img

src="https://static.vecteezy.com/system/resources/previews/011/157/909/original/piz zeria-emblem-on-blackboard-pizza-logo-template-emblem-for-cafe-restaurant-or-food-d elivery-service-vector.jpg"
 
width={300}
></img>
<div className="p-4">
<h1 className="text-center text-light">
<strong>Thank you for choosing us.</strong>
</h1>

<h3 className="text-center text-light">Please review your cart.</h3>
</div>
</div>
<h4 className="my-4 text-light">
You have <strong> {cart.length} </strong>item(s) in your cart:
</h4>

<div>
<table className="table table-striped table-light">
<thead className="thead-dark">
<tr className="table-warning text-center">
<th>
<h4>Serial No.</h4>
</th>
<th>
<h4>Product</h4>
</th>
<th>
<h4>Category</h4>
</th>
<th>
<h4>Size</h4>
</th>
<th>
<h4>Quantity</h4>
</th>
<th>
<h4>Amount ($)</h4>
</th>
</tr>
</thead>
<tbody>
{cart.map((item, index) => { total += item.price; return (
<tr className="text-center">
<td>
<h5>{index + 1}</h5>
</td>
{Object.keys(item).map((key) => (
<td>
<h5>{item[key]}</h5>
</td>
))}
 
</tr>
);
})}
<tr className="text-center">
<td>
<strong>Total</strong>
</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>{total}</td>
</tr>
<tr className="text-center">
<td>
<strong>CGST (5%)</strong>
</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>{0.05 * total}</td>
</tr>
<tr className="text-center">
<td>
<strong>SGST (5%)</strong>
</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>{0.05 * total}</td>
</tr>
<tr className="text-center">
<td>
<h4> G. Total:</h4>
</td>
<td></td>
<td></td>
<td></td>
<td></td>
<td>
<h4>
<strong>${total + 0.1 * total}</strong>
</h4>
</td>
</tr>
<br />
</tbody>
</table>
 
<h4 className="my-4 text-light">Select Delivery Account:</h4>
<select value={currentUser} className="form-select" onChange={(e) => {
console.log(e.target.value); setCurrentUser(e.target.value);
}}
>
<option value="" disabled selected> Select Account
</option>
{users.map((user) => { return (
<option value={user.email}>
{user.name + " - " + user.email}
</option>
);
})}
</select>
<br />
<button className="btn btn-warning" onClick={handlePay}> Pay via COD
</button>
</div>
</div>

{/* <select
value={size}
className="form-select form-select-sm" onChange={(e) => {
setSize(e.target.value);
}}
>
{pizza.size.map((size) => {
return <option value={size}>{size}</option>;
})}
</select> */}
</>
);
};

export default Checkout;
