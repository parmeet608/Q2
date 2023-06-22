import React, { useContext, useState } from "react";
import { EventContext } from "../contexts/EventContext";
import "../styles/products.css";

const EventComponent = () => {
  const { products, addEvent } = useContext(EventContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    await addEvent({ name, price, category });
    setName("");
    setPrice("");
    setCategory("");
  };

  return (
    <div className="container">
      <div className="formContainer">
        <form onSubmit={submitForm} className="form">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input"
          />
          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="input"
          />
          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="input"
          />
          <button type="submit" className="button">
            Enter
          </button>
        </form>
      </div>
      <div className="productsContainer">
        <table className="table">
          <tbody>
            {products.map((products, index) => (
              <div key={index} className="productItem">
                <p>{products._id}</p>
                <p>{products.name}</p>
                <p>{products.price}</p>
                <p>{products.category}</p>
              </div>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventComponent;
