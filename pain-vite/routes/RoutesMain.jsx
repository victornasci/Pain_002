
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../src/pages/HomePage";
import { AboutPage } from "../src/pages/AboutPage";
import { CardsPage } from "../src/pages/CardsPage";
import { ContatoPage } from "../src/pages/ContatoPage";


export const RoutesMain = () => {


  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/sobre-nos" element={<AboutPage />}></Route>
      <Route path="/cards" element={<CardsPage />}></Route>
      <Route path="/contato" element={<ContatoPage />}></Route>
    </Routes>
  );
};
