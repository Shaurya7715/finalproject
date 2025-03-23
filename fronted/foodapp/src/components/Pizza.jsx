import React, { useState } from "react";

const Pizza = ({ pizza, cart, setCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("Small");

  // Handle adding pizza to the cart
  const handleAddToCart = (e) => {
    e.preventDefault();
    console.log(pizza.name);
    console.log(size);
    console.log(quantity);
    console.log(pizza.price[pizza.size.indexOf(size)] * quantity);

    let tempCart = [...cart];
    let item = tempCart.find((item) => item.name === pizza.name);

    if (item) {
      const index = tempCart.indexOf(item);
      if (index > -1) {
        tempCart.splice(index, 1); // Remove existing item
      }
    }

    let fPrice = pizza.price[pizza.size.indexOf(size)] * quantity;
    let newItem = {
      name: pizza.name,
      category: pizza.category,
      size: size,
      quantity: quantity,
      price: fPrice,
    };

    tempCart = [...tempCart, newItem];
    setCart(tempCart);

    alert(`${pizza.name} Pizza added to your cart. Continue shopping or proceed to checkout. Thank you.`);
  };

  // Handle removing pizza from the cart
  const handleRemoveFromCart = (e) => {
    e.preventDefault();
    let tempCart = cart.filter((item) => item.name !== pizza.name); // Use filter instead of splice
    setCart(tempCart);
  };

  // JSX for the component
  return (
    <>
      <div className="shadow py-4 bg-dark rounded m-4 border border-warning">
        <div className="d-flex justify-content-center">
          <h3 className="text-warning">
            <strong>{pizza.name}</strong>
          </h3>
        </div>
        <div className="d-flex justify-content-center m-2">
          <img
            src={pizza.image}
            className="img-thumbnail"
            style={{ height: "200px", width: "200px" }}
            alt={pizza.name}
          />
        </div>
        <div className="d-flex justify-content-center">
          <div className="w-20 m-1">
            <select
              value={size}
              className="form-select form-select-sm"
              onChange={(e) => setSize(e.target.value)}
            >
              {pizza.size.map((sizeOption, index) => (
                <option key={index} value={sizeOption}>
                  {sizeOption}
                </option>
              ))}
            </select>
          </div>
          <div className="w-10 m-1 mx-1 d-flex">
            <select
              value={quantity}
              className="form-select form-select-sm mx-1 w-100"
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {[...Array(10).keys()].map((x, index) => (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>

            <div>
              {pizza.category === "Veg" ? (
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtSunGZrQkQMZlsJUeWHb5oqi2rqXb-rukGg&usqp=CAU"
                  width={20}
                  alt="Veg"
                />
              ) : (
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYMLfraBCscqg65z1lbsJ7QrdtJCGzNlv7_Q&usqp=CAU"
                  width={20}
                  alt="Non-Veg"
                />
              )}
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <div className="m-1 w-10">
            <h3 className="text-center text-info">
              ${pizza.price[pizza.size.indexOf(size)] * quantity}
            </h3>
          </div>
          <div className="m-1 w-10">
            <button
              className="btn btn-success"
              onClick={handleAddToCart}
            >
              Add
            </button>
            <button
              className="btn btn-danger mx-2"
              onClick={handleRemoveFromCart}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pizza;
