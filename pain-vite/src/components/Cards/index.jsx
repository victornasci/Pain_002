import React from "react";

// Estilização
import "./styles.css";
import "./overlay.js";
import { ShirtSales } from "../ShirtSales/index.jsx";

export const Cards = () => {
  return (
    <div className="Are_Car ">
      <div className="Are_Car_Int Cen_002">
        <div className="Are_Car_Int_Tit">
          <h2>
            Uniformes
          </h2>
        </div>
        <main className="main flow">
          <div className="main__cards cards">
            <div className="cards__inner">
              {/* <div className="cards__card card" id="ROSA">
            <h2 className="card__heading">Basic</h2>
            <p className="card__price">$9.99</p>
            <ul role="list" className="card__bullets flow">
              <li>Access to standard workouts and nutrition plans</li>
              <li>Email support</li>
            </ul>
            <a href="#basic" className="card__cta cta">
              Get Started
            </a>
          </div> */}
              <ShirtSales></ShirtSales>
              <ShirtSales></ShirtSales>
              <ShirtSales></ShirtSales>
              <ShirtSales></ShirtSales>
            </div>

            <div className="overlay cards__inner"></div>
          </div>
        </main>
      </div>
    </div>
  );
};
