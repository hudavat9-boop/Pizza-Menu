import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import OrderButton from "./order.js";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 14,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
];


function App(){
    return (
    <div>
        <Header/>
        <Pizza/>
        <Footer/>
    </div>
)}

function Header(){
  return(
    <>
    <center><h1> ⚜️ HP PIZZA CO. ⚜️ </h1></center><hr/>
    </>
  )
}

function Pizza(){
    return(
        <>
        <div className="pizza-item">
            <h2>Pizza Focaccia</h2>
            <div className="pizza-content">
            <div className="pizza-image">
            <img src="pizzas/focaccia.jpg" alt="Pizza Focaccia"/>
            </div>
            <div className="pizza-details">
            <p> ingredients: Bread with italian olive oil and rosemary</p>
            <p>price: 6$</p>
            <OrderButton />
            </div>
            </div>
            </div>

            <div className="pizza-item">
            <h2>Pizza Margherita</h2> 
            <div className="pizza-content">   
            <div className="pizza-image">
            <img src="pizzas/margherita.jpg" alt="Pizza Margherita"/>
            </div>
            <div className="pizza-details">
            <p> ingredients: Tomato and mozarella</p>
            <p>price: 10$</p>
            <OrderButton />
            </div>
            </div>
            </div>

            <div className="pizza-item">
            <h2>Pizza Funghi</h2>    
            <div className="pizza-content">
            <div className="pizza-image">
            <img src="pizzas/funghi.jpg" alt="Pizza Funghi"/>
            </div>
            <div className="pizza-details">
            <p> ingredients: Tomato, mozarella, mushrooms, and onion</p>
            <p>price: 12$</p>
            <OrderButton />
            </div>
            </div>
            </div>
            
            <div className="pizza-item">
            <h2>Pizza Spinaci</h2>    
            <div className="pizza-content">
            <div className="pizza-image">
            <img src="pizzas/spinaci.jpg" alt="Pizza Spinaci"/>
            </div>
            <div className="pizza-details">
            <p> ingredients: Tomato, mozarella, spinach, and ricotta cheese</p>
            <p>price: 14$</p>
            <OrderButton />
            </div>
            </div>
            </div><hr/>
        </>
    )
}

function Footer(){
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if(hour >= openHour && hour <= closeHour) alert ("We're currently open"); else alert("Sorry we're closed");
  return (
    <center><footer>{new Date().toLocaleTimeString()}<br/> We're currently open</footer></center>
  // React.createElement('footer', null, "we're currently open");
);}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);
