// import "./style.css";

// import React, { useEffect, useState } from "react";

// const LuminosCard = () => {
//   const [overlayStyle, setOverlayStyle] = useState({ opacity: 0, x: 0, y: 0 });

//   const applyOverlayMask = (e) => {
//     const x = e.pageX - e.currentTarget.offsetLeft;
//     const y = e.pageY - e.currentTarget.offsetTop;

//     setOverlayStyle({ opacity: 1, x, y });
//   };

//   useEffect(() => {
//     document.body.addEventListener("pointermove", applyOverlayMask);

//     return () => {
//       document.body.removeEventListener("pointermove", applyOverlayMask);
//     };
//   }, []);

//   return (
//     <main className="main flow">
//       <h1 className="main__heading">Pricing</h1>
//       <div className="main__cards cards">
//         <div className="cards__inner">
//           <div className="cards__card card">
//             <h2 className="card__heading">Basic</h2>
//             <p className="card__price">$9.99</p>
//             <ul role="list" className="card__bullets flow">
//               <li>Access to standard workouts and nutrition plans</li>
//               <li>Email support</li>
//             </ul>
//             <a href="#basic" className="card__cta cta">
//               Get Started
//             </a>
//           </div>

//           <div className="cards__card card">
//             <h2 className="card__heading">Pro</h2>
//             <p className="card__price">$19.99</p>
//             <ul role="list" className="card__bullets flow">
//               <li>Access to advanced workouts and nutrition plans</li>
//               <li>Priority Email support</li>
//               <li>Exclusive access to live Q&A sessions</li>
//             </ul>
//             <a href="#pro" className="card__cta cta">
//               Upgrade to Pro
//             </a>
//           </div>

//           <div className="cards__card card">
//             <h2 className="card__heading">Ultimate</h2>
//             <p className="card__price">$29.99</p>
//             <ul role="list" className="card__bullets flow">
//               <li>Access to all premium workouts and nutrition plans</li>
//               <li>24/7 Priority support</li>
//               <li>1-on-1 virtual coaching session every month</li>
//               <li>Exclusive content and early access to new features</li>
//             </ul>
//             <a href="#ultimate" className="card__cta cta">
//               Go Ultimate
//             </a>
//           </div>
//         </div>

//         <div className="overlay cards__inner"></div>
//       </div>

//       <div className="overlay cards__inner" style={overlayStyle}></div>
//     </main>
//   );
// };

// export default LuminosCard;
