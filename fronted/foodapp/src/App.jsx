import React from "react";
import Menu from "./components/Menu"; 
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; 
import Checkout from "./components/checkout";
import SignUp from "./components/SignUp"; 
import './components/style.css';

function App() { 
  return (
<>
<Router>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/menu" element={<Menu />} />
<Route path="/checkout" element={<Checkout />} />
<Route path="/signup" element={<SignUp />} />
</Routes>
</Router>
</>
);
}

export default App;

