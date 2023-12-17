// Import Css
import "../patrocinadores/styles.css";
import LogoTim from "../../assets/img/patrocinadores/tim_live.png";
import LogoBmw from "../../assets/img/patrocinadores/bmw.png";
import LogoSubway from "../../assets/img/patrocinadores/subway.png";
import LogoMotorola from "../../assets/img/patrocinadores/motorola.png";
import LogoJbl from "../../assets/img/patrocinadores/jbl.png";

import "./script.js";

export const Patrocinadores = () => {
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
