
import Bacon from "../Images/Bacon.jpg";
import Cheese from "../Images/Cheese.jpg";
import Hawaiin from "../Images/Hawaiin.jpg";
import Margerita from "../Images/Margerita.jpeg";
import Mushrooms from "../Images/Mushrooms.jpeg"; 
import Pepperoni from "../Images/Pepperoni.jpeg"; 
import Seafood from "../Images/Seafood.jpeg"; 
import Supreme from "../Images/Supreme.jpeg"; 
import Vegetarian from "../Images/Vegetarian.jpeg";

const pizzas = [
{
name: "Hawaiin",
size: ["Small", "Medium", "Large"], 
price: [200, 300, 400],
category: "Non-Veg", image: Hawaiin, description: "",
},
{
name: "Mushroom",
size: ["Small", "Medium", "Large"],
 price: [300, 370, 410],
category: "Veg", image: Mushrooms, description: "",
 
},
{
name: "Non-Veg Supreme",
size: ["Small", "Medium", "Large"], 
price: [350, 400, 480],
category: "Non-Veg", image: Supreme, description: "",
},
{
name: "Pepperoni",
size: ["Small", "Medium", "Large"],
 price: [200, 300, 400],
category: "Non-Veg", image: Pepperoni, description: "",
},
{
name: "Margerita",
size: ["Small", "Medium", "Large"],
 price: [210, 320, 430],
category: "Veg", image: Margerita, description: "",
},
{
name: "Sea Food",
size: ["Small", "Medium", "Large"], 
price: [250, 360, 470],
category: "Non-Veg", image: Seafood, description: "",
},
{
name: "Veg Supreme",
size: ["Small", "Medium", "Large"],
 price: [220, 330, 450],
category: "Veg", image: Vegetarian, description: "",
},
{
name: "Bacon",
size: ["Small", "Medium", "Large"],
 price: [240, 360, 480],
category: "Non-Veg", image: Bacon, description: "",
},
{
name: "Cheese Special",
 
size: ["Small", "Medium", "Large"],
 price: [180, 280, 380],
category: "Veg", image: Cheese, description: "",
},
];

export default pizzas;

