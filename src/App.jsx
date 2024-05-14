import React from "react";
import Hello from "./components/Hello";
import Profile from "./components/Profile";
import Product from "./components/Product";
import Counter from "./components/Counter";

import makersLogo from "./assets/Makers-Logo.png";
import "./App.css";

function App() {
  return (
    <>
      <Hello name="World" />
      <Counter />
      <img className="logo" src={makersLogo}></img>
      <Profile name="Quackie Makers" job="Maker's favourite rubber duck" birthdate={2013}/>
      <Product 
      name="Air Fryer K2000" 
      desc="The best air fryer to fry all things, even Mars Bars" 
      price={2000}
      />
      <Product name="Cotton Candy Maker 3000" desc="The best Cotton candy maker, even bubble gum flavour" price={5000}/>
    </>
  );
};

export default App;
