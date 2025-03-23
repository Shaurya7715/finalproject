import React from "react";
import { useNavigate } from "react-router-dom";

const Navigation = () => {
const navigate = useNavigate();

const handleHome = (e) => { e.preventDefault(); navigate("/");
};

const handleOrder = (e) => { e.preventDefault(); navigate("/menu");
};

const handleSignUp = (e) => { e.preventDefault(); navigate("/signup");
};

return (
<>
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<div class="container-fluid">
<a class="navbar-brand" href="#">
<img src="../src/Images/Cheese.jpg"
alt="Avatar Logo" class="rounded-pill mx-2" width={40}
/>
<strong>Pizza</strong> - Fresh & Tasty
</a>
 
<ul class="navbar-nav">
<li class="nav-item p-1">
<button
class="btn btn-basic nav-link active" onClick={handleHome}
>
Home
</button>
</li>
<li class="nav-item p-1">
<button
class="btn btn-basic nav-link active" onClick={handleOrder}
>
Menu
</button>
</li>

<li class="nav-item p-1">
<button
class="btn btn-basic nav-link active" onClick={handleSignUp}
>
Sign Up
</button>
</li>
</ul>
</div>
</nav>
</>
);
};

export default Navigation;
