import React from "react"; 
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import { useState } from "react";

const SignUp = () => {
 
const navigate = useNavigate();
const [user, setUser] = useState({}); const handleChange = (e) => {
setUser({ ...user, [e.target.name]: e.target.value });
};

async function sendData() {
let response = await axios.post("http://localhost:8000/signup", user); let serverMessage = response.data;
alert(serverMessage);
}

const handleSubmit = async (e) => { e.preventDefault(); console.log(user);
await sendData();
};

const handleBack = (e) => { e.preventDefault(); navigate("/");
};

return (
<>
<div className="d-flex justify-content-center p-4 bg-dark m-4 rounded">
<div className="d-flex	align-items-center w-100">
<img

src="https://static.vecteezy.com/system/resources/previews/011/157/909/original/piz zeria-emblem-on-blackboard-pizza-logo-template-emblem-for-cafe-restaurant-or-food-d elivery-service-vector.jpg"
width={600} height={600}
></img>

<form className="w-100 p-4 mt-3">
<h1 className="text-light">
<strong>Create New Account</strong>
</h1>

<div class="form-group my-1">
<h5 className="label text-light mt-2">
<strong>Personal Info</strong>
</h5>

<label className="label text-light">Name</label>
<input
name="name"
 
onChange={(e) => handleChange(e)} class="form-control"
type="text" placeholder="Ex. John Doe"
/>
</div>

<div class="form-group my-1">
<label className="label text-light">Email</label>
<input
name="email"
onChange={(e) => handleChange(e)} class="form-control"
type="email"
placeholder="Ex. somemail@gmail.com"
/>
</div>

<div class="form-group my-1">
<label className="label text-light">Contact</label>
<input
name="contact"
onChange={(e) => handleChange(e)} class="form-control" type="number"
placeholder="Ex. 9999900000"
/>
</div>

<h5 className="label text-light mt-4">
<strong>Delivery Address</strong>
</h5>

<div class="form-group my-1">
<label className="label text-light">House No.</label>
<input
name="houseNo"
onChange={(e) => handleChange(e)} class="form-control" type="number"
placeholder="Ex. 123"
/>
</div>

<div class="form-group my-1">
<label className="label text-light">Street and Locality</label>
<input
name="locality"
onChange={(e) => handleChange(e)} class="form-control"
type="text"
 
placeholder="Ex. Avenue Street, Rajender Nagar"
/>
</div>

<div class="form-group my-1">
<label className="label text-light">City/Town</label>
<input
name="city"
onChange={(e) => handleChange(e)} class="form-control"
type="text" placeholder="Ex. New Delhi"
/>
</div>

<div class="form-group my-1">
<label className="label text-light">State</label>
<input
name="state"
onChange={(e) => handleChange(e)} class="form-control"
type="text" placeholder="Ex. Delhi"
/>
</div>

<div class="form-group my-1">
<label className="label text-light">Pin-code</label>
<input
name="pinCode"
onChange={(e) => handleChange(e)} class="form-control" type="number"
placeholder="Ex. 001122"
/>
</div>

<button type="button"
class="btn btn-outline-warning mr-2" onClick={handleBack}
>
Home
</button>
<button
className="btn btn-warning my-4 fw-bold m-2" onClick={handleSubmit}
type="submit"
>
Sign Up
</button>
 
</form>
</div>
</div>
</>
);
};

export default SignUp;
