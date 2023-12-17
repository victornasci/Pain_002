// Import Css
import "../footer/styles.css";

import LogoRodape from "../../assets/img/logo_pain_gaming.png";

// Import Logo
import LogoGif from "../../assets/img/Gif_Logo.mp4";

import { RedSoc } from "../fragments/RedSoc";

export const Footer = () => {
  return (
    <footer>
      <div className="Est_Foo Cen_001">
        <div className="Est_Foo_Int">
          {/* Area 001 */}
          <div className="Est_Foo_Int_Are_001">
            {/* lOGO Rodapé */}
            <div className="Est_Foo_Int_Are_001_Log">
              <img src={LogoRodape} />
            </div>

            {/* Redes Sociais */}
            <div className="Est_Foo_Int_Are_001_Red">
              <RedSoc></RedSoc>
            </div>
          </div>

          {/* Area 002 a */}
          <div className="Est_Foo_Int_Are_002">
            {/* Area Menu */}
            <nav className="Est_Foo_Int_Are_002_Men Cen_001">
              <div className="Est_Foo_Int_Are_002_Men_Lis">
                <h4>INSTITUCIONAL</h4>
                <div className="Est_Foo_Int_Are_002_Men_Lis_Ite">
                  <a href="">Política de privacidade</a>
                </div>
                <div className="Est_Foo_Int_Are_002_Men_Lis_Ite">
                  <a href="">Política de Envios, Prazos e Entregas</a>
                </div>
                <div className="Est_Foo_Int_Are_002_Men_Lis_Ite">
                  <a href="">Termos e Condições de Uso</a>
                </div>
                {/* <div className="Est_Foo_Int_Are_002_Men_Lis_Ite"><a href="">Menu 001</a></div> */}
              </div>
              <div className="Est_Foo_Int_Are_002_Men_Lis">
                <h4>DÚVIDAS</h4>
                <div className="Est_Foo_Int_Are_002_Men_Lis_Ite">
                  <a href="">Central de Atendimento</a>
                </div>
                <div className="Est_Foo_Int_Are_002_Men_Lis_Ite">
                  <a href="">Trocas e Devoluções</a>
                </div>
                <div className="Est_Foo_Int_Are_002_Men_Lis_Ite">
                  <a href="">Dúvidas Frequentes</a>
                </div>
                {/* <div className="Est_Foo_Int_Are_002_Men_Lis_Ite"><a href="">Menu 001</a></div> */}
              </div>
              <div className="Est_Foo_Int_Are_002_Men_Lis">
                <h4>ATENDIMENTO</h4>
                <div className="Est_Foo_Int_Are_002_Men_Lis_Ite">
                  <a href="">atendimento@pain.gg</a>
                </div>
                <div className="Est_Foo_Int_Are_002_Men_Lis_Ite">
                  <a href="">atendimento@pain.gg</a>
                </div>
                <div className="Est_Foo_Int_Are_002_Men_Lis_Ite">
                  <a href="">(11) 9 1234-5678</a>
                </div>
                <div className="Est_Foo_Int_Are_002_Men_Lis_Ite">
                  <a href="">(11) 9 1234-5678</a>
                </div>
              </div>
              <div className="Est_Foo_Int_Are_002_Men_Lis">
                <h4>SOBRE</h4>
                <div className="Est_Foo_Int_Are_002_Men_Lis_Ite">
                  <a href="">Quem Somos</a>
                </div>
                <div className="Est_Foo_Int_Are_002_Men_Lis_Ite">
                  <a href="">Nossas Conquistas</a>
                </div>
                <div className="Est_Foo_Int_Are_002_Men_Lis_Ite">
                  <a href="">A loja paiN</a>
                </div>
                <div className="Est_Foo_Int_Are_002_Men_Lis_Ite">
                  <a href="">paiN News</a>
                </div>
              </div>
              <div className="Est_Foo_Int_Are_002_Men_Lis">
                <h4>MENU 005</h4>
                <div className="Est_Foo_Int_Are_002_Men_Lis_Ite">
                  <a href="">Menu 001</a>
                </div>
                <div className="Est_Foo_Int_Are_002_Men_Lis_Ite">
                  <a href="">Menu 001</a>
                </div>
                <div className="Est_Foo_Int_Are_002_Men_Lis_Ite">
                  <a href="">Menu 001</a>
                </div>
                <div className="Est_Foo_Int_Are_002_Men_Lis_Ite">
                  <a href="">Menu 001</a>
                </div>
              </div>
            </nav>

            {/* Redes Sociais */}
          </div>

          {/* Area 003 */}
          <div className="Est_Foo_Int_Are_003 ">
            <div className="Est_Foo_Int_Are_003_Dir">
              <p>
                CNPJ: 13.529.723/0001-24 - Razão Social: PAIN GAMING ESPORTES
                ELETRONICOS EIRELI
              </p>

              <p>
                CNPJ: 21.941.641/0001-10 - Razão Social: SOU PAIN E-COMMERCE
                LTDA
              </p>
            </div>

            <div className="Est_Foo_Int_Are_003_Log">
              <video autoPlay loop muted className="Hea_Gif_Log">
                <source src={LogoGif} type="video/mp4" />
                {/* Adicione outros formatos de vídeo se necessário */}
              </video>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
