import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
    price: 12,
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
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = { color: "red", fontSize: "32px", textTransform: "uppercase" };
  const style = {};
  return (
    // <h1 style={{ color: "red", fontSize: "32px", textTransform: "uppercase" }}>
    //   Fast React Pizza Co.
    // </h1>
    // <h1 className="header" style={style}>
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu . Please come back later :)</p>
      )}
      {/* {numPizzas > 0 && (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )} */}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredient="tomato pizza khoshmaze ommm"
        photoName="pizzas/spinaci.jpg"
        price={69.69}
      />
      <Pizza
        name="Pizza Funghi"
        ingredient="Tomato pizza khoshmaze2"
        photoName="pizzas/funghi.jpg"
        price={85.85}
      /> */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  if (pizzaObj.soldOut) {
    return null;
  }
  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients} </p>
        <span>{pizzaObj.price + 1}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We are currently open");
  // } else {
  //   alert("sorry we are closed");
  // }
  console.log(hour);
  // if (isOpen)
  //   return (
  //     <p>
  //       We're happy to welcome you between {openHour}:00. {closeHour}:00.{" "}
  //     </p>
  //   );
  return (
    <footer className="footer">
      {/* react will not render true or false value(isOpen) but numbers yes  */}
      {/* {isOpen && (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or orded online</p>
          <button className="btn">Order</button>
        </div>
      )} */}
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00. {closeHour}:00.{" "}
        </p>
      )}
    </footer>
  );
  // if the isOpen is true then <p>Open</p> will shown
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 and close at {closeHour}:00. Come visit us
        or orded online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

// React V18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* strictMode is a mode for development */}
    <App />
  </React.StrictMode>
);

// React Before 18
// React.render(<App/>, document.getElementById("root"))
