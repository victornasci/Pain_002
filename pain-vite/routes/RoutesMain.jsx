
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../src/pages/HomePage";
import { AboutPage } from "../src/pages/AboutPage";
import { CardsPage } from "../src/pages/CardsPage";


export const RoutesMain = () => {


  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/sobre-nos" element={<AboutPage />}></Route>
      <Route path="/cards" element={<CardsPage />}></Route>
    </Routes>
  );
};
