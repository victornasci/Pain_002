import React from "react";

// Estilização
import "./styles.css";
import "./overlay.js";


export const Cards = () => {
  return (
    <main className="main flow">
      <h1 className="main__heading">Pricing</h1>
      <div className="main__cards cards">
        <div className="cards__inner">
          <div className="cards__card card" id="ROSA">
            <h2 className="card__heading">Basic</h2>
            <p className="card__price">$9.99</p>
            <ul role="list" className="card__bullets flow">
              <li>Access to standard workouts and nutrition plans</li>
              <li>Email support</li>
            </ul>
            <a href="#basic" className="card__cta cta">Get Started</a>
          </div>

          <div className="cards__card card">
            <h2 className="card__heading">Pro</h2>
            <p className="card__price">$19.99</p>
            <ul role="list" className="card__bullets flow">
              <li>Access to advanced workouts and nutrition plans</li>
              <li>Priority Email support</li>
              <li>Exclusive access to live Q&A sessions</li>
            </ul>
            <a href="#pro" className="card__cta cta">Upgrade to Pro</a>
          </div>

          <div className="cards__card card">
            <h2 className="card__heading">Ultimate</h2>
            <p className="card__price">$29.99</p>
            <ul role="list" className="card__bullets flow">
              <li>Access to all premium workouts and nutrition plans</li>
              <li>24/7 Priority support</li>
              <li>1-on-1 virtual coaching session every month</li>
              <li>Exclusive content and early access to new features</li>
            </ul>
            <a href="#ultimate" className="card__cta cta">Go Ultimate</a>
          </div>
        </div>

        <div className="overlay cards__inner"></div>
      </div>
    </main>
  );
};