import { Route, Routes } from "react-router-dom";
import { HomePage } from "../src/pages/HomePage";
import { AboutPage } from "../src/pages/AboutPage";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/sobre-nos" element={<AboutPage />}></Route>
    </Routes>
  );
};
