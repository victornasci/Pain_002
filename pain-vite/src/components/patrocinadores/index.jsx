// Import Css
import "../patrocinadores/styles.css";
import LogoTim from "../../assets/img/patrocinadores/tim_live.png";
import LogoBmw from "../../assets/img/patrocinadores/bmw.png";
import LogoSubway from "../../assets/img/patrocinadores/subway.png";
import LogoMotorola from "../../assets/img/patrocinadores/motorola.png";
import LogoJbl from "../../assets/img/patrocinadores/jbl.png";

import "./script.js";

export const Patrocinadores = () => {
<<<<<<< HEAD
    return (
        <div className="Est_Pat Cen_001">
            <div className="Est_Pat_Int">
                {/* Lista */}
                <div className="Est_Pat_Int_Lis">
                    {/* Item */}
                    <div className="Est_Pat_Int_Lis_Ite">
                        <img src={LogoTim} />
                    </div>

                    {/* Item */}
                    <div className="Est_Pat_Int_Lis_Ite">
                        <img src={LogoBmw} />
                    </div>

                    {/* Item */}
                    <div className="Est_Pat_Int_Lis_Ite">
                        <img src={LogoSubway} />
                    </div>

                    {/* Item */}
                    <div className="Est_Pat_Int_Lis_Ite">
                        <img src={LogoMotorola} />
                    </div>

                    {/* Item */}
                    <div className="Est_Pat_Int_Lis_Ite">
                        <img src={LogoJbl} />
                    </div>
                </div>

                {/* <!--- Lista | Duplicado ---> */}
                {/* <div class="Est_Pat_Int_Lis" data-role="double-content" aria-hidden="true"></div> */}
=======
  return (
    <section className="container_troci">
      {/* <h1>
        {" "}
        <div className="Sob_Nos_Int_002_Tit">
          <span style={{ "--i": "1" }}>P</span>
          <span style={{ "--i": "2" }}>A</span>
          <span style={{ "--i": "3" }}>I</span>
          <span style={{ "--i": "4" }}>N</span>
          <span style={{ "--i": "5" }}>-</span>
          <span style={{ "--i": "6" }}>T</span>
          <span style={{ "--i": "7" }}>R</span>
          <span style={{ "--i": "8" }}>O</span>
          <span style={{ "--i": "9" }}>C</span>
          <span style={{ "--i": "10" }}>I</span>
          <span style={{ "--i": "11" }}>N</span>
          <span style={{ "--i": "12" }}>A</span>
          <span style={{ "--i": "13" }}>D</span>
          <span style={{ "--i": "14" }}>O</span>
          <span style={{ "--i": "15" }}>R</span>
          <span style={{ "--i": "16" }}>E</span>
          <span style={{ "--i": "17" }}>S</span>
        </div>{" "}
      </h1> */}
      <div className="Est_Pat Cen_001">
        <div className="Est_Pat_Int">
          {/* Lista */}
          <div className="Est_Pat_Int_Lis">
            {/* Item */}
            <div className="Est_Pat_Int_Lis_Ite">
              <img src={LogoTim} />
>>>>>>> c006bbc1d1583740f89c7fdde26e579781f122ea
            </div>

            {/* Item */}
            <div className="Est_Pat_Int_Lis_Ite">
              <img src={LogoBmw} />
            </div>

            {/* Item */}
            <div className="Est_Pat_Int_Lis_Ite">
              <img src={LogoSubway} />
            </div>

            {/* Item */}
            <div className="Est_Pat_Int_Lis_Ite">
              <img src={LogoMotorola} />
            </div>
            {/* Item */}
            <div className="Est_Pat_Int_Lis_Ite">
              <img src={LogoJbl} />

                {/* <!--- Lista | Duplicado ---> */}
                {/* <div class="Est_Pat_Int_Lis" data-role="double-content" aria-hidden="true"></div> */}

            </div>
          </div>

          {/* <!--- Lista | Duplicado ---> */}
          <div
            class="Est_Pat_Int_Lis"
            data-role="double-content"
            aria-hidden="true"
          ></div>
        </div>
      </div>
    </section>
  );
};
