import React from "react";
import menu from "./menu.js";
import "./Styles/home.css";

function MenuSection({ title, category }) {
  return (
    <div>
      <h2 className="home-offer">{title}</h2>
      <div className="menu-items">
        {menu
          .filter((item) => item.status.includes(category))
          .map((item) => (
            <div key={item.name} className="menu-item" title={item.details}>
              <img src={item.photo} alt={item.name} className="offer-photo" />
              <h6 className="item-name" title={item.name}>
                {item.name}
              </h6>
              {/* <p>{item.details}</p> */}
              <del className="discounted"> Rs. {item.price.toFixed(2)}</del>
              {item.discountedPrice && (
                <span>Rs. {item.discountedPrice.toFixed(2)}</span>
              )}
              <br />
              <button className="add-to-cart">Add</button>
            </div>
          ))}
      </div>
      
    </div>
  );
}

function Home() {
  return (
    <div className="home-section">
        <MenuSection title="Today's Special" category="hot-section" />
        <MenuSection title="Winter Special" category="winter" />
        <MenuSection title="Christmas Special" category="christmas" />
        <MenuSection title="Combo Offers" category="combo" />
        <br />
        <center>
          <p className="slogan">Keep Eating....</p>
        </center>
      
    </div>
  );
}

export default Home;
