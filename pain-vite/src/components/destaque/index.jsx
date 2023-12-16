// /src/components/destaque/index.jsx
import React from "react";

// Estilização
import "./styles.css";

// Import do Componente das Imagens Secundárias
import ImgSecDes from "../ImgSecDes";
import ImgPriDes from "../ImgPriDes";

export const Destaque = () => {
  return (
    <section className="Sec_Des Cen_001">
      <div className="Sec_Des_Con">
        {/* <div className="ajuste"></div> */}
        <ImgPriDes></ImgPriDes>
        <ImgSecDes></ImgSecDes>
      </div>
    </section>
  );
};
