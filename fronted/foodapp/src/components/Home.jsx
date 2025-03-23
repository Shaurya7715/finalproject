import React from "react";
import Navigation from "./Navigation";
import { useNavigate } from "react-router-dom";

const Home = () => {
const navigate = useNavigate();

const handleOrder = (e) => { e.preventDefault(); navigate("/menu");
};

return (
<>
<Navigation />

<div>
<div className="d-flex justify-content-center align-items-center m-3
bg-dark rounded p-5">
<div className="m-4">
<h1 className="text-light">
<strong>Fresh PIZZA </strong> at your Doorstep!
</h1>
<h3 className="text-light">
{" "}
Delicious Pizzas starting @ $200 Only!
</h3>
<h5 className="text-light">
Enjoy a fresh slice of pizza. Share with your friends, family or just eat alone.
</h5>
<br />
<button className="btn btn-warning fw-bold" onClick={handleOrder}> Order Now
</button>
</div>
<img src="./src/Images/Bacon.jpg"
width={900} height={500} className="img-rounded"
></img>
</div>
</div>

<div>
 
<div className="d-flex justify-content-center align-items-center m-3 bg-dark rounded p-5">
<img

src="https://cdn.jobtoday.com/img/e8c45297-24c2-4547-99ca-7bc530c9053d/1140x640.jpg "
width={500} height={250} className="img-rounded"
></img>
<div className="m-4">
<h1 className="text-light">About us</h1>
<h5 className="text-light">
This project 'Food Delivery Application' is a web-application made as an requirement of Major Project. Technologies used are React.js for Front-end, Node.js and Express.js for Middle-ware (Back-end), and MongoDB as Database Engine.
</h5>
<br />
<h5 className="text-light">
Made by: <strong>Manan Mehta</strong>, Group-115
</h5>
</div>
</div>
</div>

<div>
<div className="d-flex justify-content-center align-items-center m-3
bg-dark rounded p-5">
<div className="m-4">
<h1 className="text-light">
Introducing NEW <strong>Veg Supreme</strong> Pizza!
</h1>
<h5 className="text-light">
Hand tossed pizza topped with Onions, Tomatoes, Mushrooms, Jalepenoes, Olives, and Corn.
</h5>
<br />
<h5 className="text-light">Try TODAY!</h5>
</div>
<img

src="https://www.franchisegator.com/articles/wp-content/uploads/2022/02/vegetables- italian-pizza-restaurant-large.jpg"
width={400} height={250} className="img-rounded"
></img>
</div>
</div>
</>
 
);
};

export default Home;
