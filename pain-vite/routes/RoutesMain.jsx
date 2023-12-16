<<<<<<< HEAD
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../src/pages/HomePage";
import { AboutPage } from "../src/pages/AboutPage";

export const RoutesMain = () => {
=======

import { Route, Routes } from "react-router-dom";
import { HomePage } from "../src/pages/HomePage";
import { AboutPage } from "../src/pages/AboutPage";
import { CardsPage } from "../src/pages/CardsPage";


export const RoutesMain = () => {


>>>>>>> af99508f724b712d1c175452287766b647be22aa
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/sobre-nos" element={<AboutPage />}></Route>
<<<<<<< HEAD
=======
      <Route path="/cards" element={<CardsPage />}></Route>
>>>>>>> af99508f724b712d1c175452287766b647be22aa
    </Routes>
  );
};
