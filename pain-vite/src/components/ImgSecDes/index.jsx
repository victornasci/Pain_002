// Estilização
import "./styles.css";
// Imagens Importação
import ImgTim from "../../assets/img/Time_Img.png";
import ImgTimHov from "../../assets/img/nos_tim_peq.png";
import ImgYou from "../../assets/img/thumb-1.png";
import ImgYouHov from "../../assets/img/thumb-1.png";
import ImgMan from "../../assets/img/manto-1.jpg";
import ImgManHov from "../../assets/img/manto-1.jpg";
import ImgSub from "../../assets/img/subway-1.jpg";
import ImgSubHov from "../../assets/img/subway-2.jpg";

// Lógica da troca de imagem por Hover
import ImagemHover from "../ImageHover";

const ImgSecDes = () => {
  return (
    <div className="Sec_Des_Con_Img_Sec">
      <figcaption className="Sec_Des_Con_Img_Sec_Fig">
        <div className="Img_Sec" id="Img_Sec1">
          <a href="">
            <ImagemHover imagemPadrao={ImgTim} imagemHover={ImgTimHov} />
          </a>
        </div>
        <div className="Img_Sec" id="Img_Sec2">
          <a href="">
            <ImagemHover imagemPadrao={ImgYou} imagemHover={ImgYouHov} />
          </a>
        </div>
        <div className="Img_Sec" id="Img_Sec3">
          <a href="">
            <ImagemHover imagemPadrao={ImgMan} imagemHover={ImgManHov} />
          </a>
        </div>
        <div className="Img_Sec" id="Img_Sec4">
          <a href="">
            <ImagemHover imagemPadrao={ImgSub} imagemHover={ImgSubHov} />
          </a>
        </div>
      </figcaption>
    </div>
  );
};
export default ImgSecDes;
