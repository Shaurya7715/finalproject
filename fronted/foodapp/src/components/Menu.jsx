import React from "react";
import pizzas from "../JSON/pizzas"
import Pizza from "./Pizza";
import { useNavigate } from "react-router-dom"; 
import { useState } from "react";
import Navigation from "./Navigation";

const Menu = () => {
const navigate = useNavigate();
const [cart, setCart] = useState([]);

const handleCheckout = (e) => { e.preventDefault();

if (cart.length == 0)
alert("Your cart is empty. Please purchase at least 1 item."); else navigate("/checkout", { state: cart });
};

return (
<>
<Navigation />
<form className="w-100 bg-dark">
<div className="mx-3">
<button
className="btn btn-warning float-end" onClick={(e) => handleCheckout(e)}
>
Checkout
</button>
<br />
</div>
<br />
<div className="d-flex justify-content-center">
<h1 className="text-dark bg-light m-4 p-2 w-100 text-center rounded">
<strong>A La Carte</strong>
</h1>
</div>
<div className="row">
{pizzas.map((pizza, index) => { return (
<>
<div className="col-md-3 my-2 ">
<Pizza pizza={pizza} cart={cart} setCart={setCart} />
 
</div>
</>
);
})}
</div>
</form>
</>
);
};

export default Menu;

