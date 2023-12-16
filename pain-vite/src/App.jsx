import React from "react";
import { RoutesMain } from "../routes/RoutesMain";
import { Header } from "../src/components/header";
import { Footer } from "../src/components/footer";

function App() {
  return (
    <>
      <Header />
      <RoutesMain></RoutesMain>
      <Footer />
    </>
  );
}

export default App;
