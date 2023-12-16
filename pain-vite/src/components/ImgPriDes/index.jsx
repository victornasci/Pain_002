// Estilização
import "./styles.css";

// Importação Estado React
import React, { useState, useEffect } from "react";

// Importação de Imagens
// import ImgPri from "../../assets/img/img_pri.png";
import ImgSec1 from "../../assets/img/Img_Tim_Pri.jpg";
import ImgSec2 from "../../assets/img/Img_Tim_Pri-2.jpg";
import ImgSec3 from "../../assets/img/Img_Tim_Pri-3.jpg";
import ImgSec4 from "../../assets/img/Img_Tim_Pri-4.jpg";
import ImgSec5 from "../../assets/img/Img_Tim_Pri-5.jpg";
// Adicione outras importações para suas imagens secundárias, se necessário

const ImgPriDes = () => {
  const imagensSecundarias = [ImgSec1, ImgSec2, ImgSec3, ImgSec4, ImgSec5,ImgSec5];
  const [indiceImagem, setIndiceImagem] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndiceImagem(
        (indiceAtual) => (indiceAtual + 1) % imagensSecundarias.length
      );
    }, 4000);

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(intervalo);
  }, [imagensSecundarias.length]);

  return (
    <div className="Sec_Des_Con_Img_Pri">
      {/* <figcaption className="Sec_Des_Con_Img_Pri_Fig"> */}
      <img src={imagensSecundarias[indiceImagem]} alt="" className="Img_Pri" />
      {/* </figcaption> */}
    </div>
  );
};

export default ImgPriDes;
