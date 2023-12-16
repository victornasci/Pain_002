import React from "react";

// Estilização
import "./styles.css";
import "./linha_temporal.css";
import "./jquery-1.12.4.min.js"
import "./jquery.cntl"
import "./script.js"

import Imagem001 from "../../assets/img/Area_Interna/Imagem001.jpg";
import Imagem002 from "../../assets/img/Area_Interna/Imagem002.jpg";
import Imagem003 from "../../assets/img/Area_Interna/Imagem003.jpg";
import ImagemTrofeu from "../../assets/img/Sobre_Nos/trofeu.png";
import LogoOffice from "../../assets/img/logo_the_office.png";

export const AboutUs = () => {
  return (
    <div className="Sob_Nos Cen_002">
      <div className="Sob_Nos_Int">
        <div className="Sob_Nos_Int_001">
          {/* Titulo */}
          <div className="Sob_Nos_Int_001_Tit">
            <h1>Sobre Nós</h1>
          </div>

          {/* Texto */}
          <div className="Sob_Nos_Int_001_Tex">
            <p>
              Oi, nós somos a paiN Gaming!
            </p>
            <p>
              Uma equipe brasileira de esportes eletrônicos, fundada em 2010 como time de Dota (DotA) por Arthur "PAADA" Zarzur, ex-jogador profissional do game. Atualmente, temos equipes que disputam League of Legends, Counter-Strike: Global Offensive e Free Fire. Somos tri-campeões do Campeonato Brasileiro de League of Legends (CBLOL), 2013, 2015 e 2021, além da única equipe da América Latina a participar de campeonatos mundiais em quatro modalidades diferentes, League of Legends World Championship, The International, com Dota 2, CS:GO Major Championships e Clash Royale League.
            </p>

            <p>
              Fomos a primeira organização de esports da América Latina a investir em estrutura profissional e pioneiros na maneira de interagir com seus torcedores. Daqui saíram grandes nomes como Gabriel "FalleN" Toledo (CS:GO), Gabriel “Kami” Bohm (League of Legends) e Felipe "brTT" Gonçalves (League of Legends). Nos quase doze anos de história, a gente investiu em diversas modalidades, virou uma fábrica de ídolos, inovou na maneira de pensar o conteúdo de esportes eletrônicos e, com isso, construiu uma legião de fãs apaixonados pela tradição que só a gente carrega. Hoje, somos a maior organização de esportes eletrônicos da América Latina e temos uma das maiores e mais engajadas torcidas do mundo.
            </p>
          </div>
        </div>

        <div className="Sob_Nos_Int_002">

          <div className="Sob_Nos_Int_002_Img">
            <img src={LogoOffice} />
          </div>

          {/* <div className="Sob_Nos_Int_002_Tit">
            <span style={{ "--i": "1" }}>P</span>
            <span style={{ "--i": "2" }}>A</span>
            <span style={{ "--i": "3" }}>I</span>
            <span style={{ "--i": "4" }}>N</span>
            <span style={{ "--i": "5" }}>-</span>
            <span style={{ "--i": "6" }}>G</span>
            <span style={{ "--i": "7" }}>A</span>
            <span style={{ "--i": "8" }}>M</span>
            <span style={{ "--i": "9" }}>I</span>
            <span style={{ "--i": "10" }}>N</span>
            <span style={{ "--i": "11" }}>G</span>
          </div> */}

          <div className="Sob_Nos_Int_002_Gal">
            <div className="Sob_Nos_Int_002_Gal_Ite Img_001">
              {/* Area de Texto */}
              <div className="Sob_Nos_Int_002_Gal_Ite_Tex">
                <h2>Complexo</h2>
                <p>Descriação de uma imagem</p>
              </div>

              <img src={Imagem001} />
            </div>
            <div className="Sob_Nos_Int_002_Gal_Ite Img_002">
              {/* Area de Texto */}
              <div className="Sob_Nos_Int_002_Gal_Ite_Tex">
                <h2>Work Space</h2>
                <p>Descriação de uma imagem</p>
              </div>

              <img src={Imagem002} />
            </div>
            <div className="Sob_Nos_Int_002_Gal_Ite Img_003">
              {/* Area de Texto */}
              <div className="Sob_Nos_Int_002_Gal_Ite_Tex">
                <h2>Arquibancada</h2>
                <p>Descriação de uma imagem</p>
              </div>

              <img src={Imagem003} />
            </div>
          </div>
        </div>

        <div className="Sob_Nos_Int_003">
          <div className="Lin_Tem_Are_Ger">
            <span className="Lin_Tem_Ite_Bar Lin_Tem_Ite_Cen">
              <span className="Lin_Tem_Ite_Bar_Fil"></span>
            </span>

            <div className="Lin_Tem_Ite_Sta">

              <div className="Lin_Tem_Ite_Sta_Sta">
                <div className="Lin_Tem_Ite_Sta_Sta_Con">
                  <div className="Lin_Tem_Ite_Sta_Sta_Con_Tex">
                    <h4>League of Legends</h4>
                    <p>CBLOL 1º split 2022</p>
                    <p>Campeão</p>
                  </div>

                  <div className="Lin_Tem_Ite_Sta_Sta_Con_Img">
                    <img src={ImagemTrofeu} />
                  </div>
                </div>

                <div className="Lin_Tem_Ite_Sta_Sta_Ico Lin_Tem_Ite_Cen"></div>
              </div>
              <div className="Lin_Tem_Ite_Sta_Sta">
                <div className="Lin_Tem_Ite_Sta_Sta_Con">
                  <h4>2001</h4>
                  <p>Teste La lal al al</p>
                </div>
                <div className="Lin_Tem_Ite_Sta_Sta_Ico Lin_Tem_Ite_Cen"></div>
              </div>
              <div className="Lin_Tem_Ite_Sta_Sta">
                <div className="Lin_Tem_Ite_Sta_Sta_Con">
                  <h4>2001</h4>
                  <p>Teste La lal al al</p>
                </div>
                <div className="Lin_Tem_Ite_Sta_Sta_Ico Lin_Tem_Ite_Cen"></div>
              </div>
              <div className="Lin_Tem_Ite_Sta_Sta">
                <div className="Lin_Tem_Ite_Sta_Sta_Con">
                  <h4>2001</h4>
                  <p>Teste La lal al al</p>
                </div>
                <div className="Lin_Tem_Ite_Sta_Sta_Ico Lin_Tem_Ite_Cen"></div>
              </div>
              <div className="Lin_Tem_Ite_Sta_Sta">
                <div className="Lin_Tem_Ite_Sta_Sta_Con">
                  <h4>2001</h4>
                  <p>Teste La lal al al</p>
                </div>
                <div className="Lin_Tem_Ite_Sta_Sta_Ico Lin_Tem_Ite_Cen"></div>
              </div>
              <div className="Lin_Tem_Ite_Sta_Sta">
                <div className="Lin_Tem_Ite_Sta_Sta_Con">
                  <h4>2001</h4>
                  <p>Teste La lal al al</p>
                </div>
                <div className="Lin_Tem_Ite_Sta_Sta_Ico Lin_Tem_Ite_Cen"></div>
              </div>
              <div className="Lin_Tem_Ite_Sta_Sta">
                <div className="Lin_Tem_Ite_Sta_Sta_Con">
                  <h4>2001</h4>
                  <p>Teste La lal al al</p>
                </div>
                <div className="Lin_Tem_Ite_Sta_Sta_Ico Lin_Tem_Ite_Cen"></div>
              </div>
              <div className="Lin_Tem_Ite_Sta_Sta">
                <div className="Lin_Tem_Ite_Sta_Sta_Con">
                  <h4>2001</h4>
                  <p>Teste La lal al al</p>
                </div>
                <div className="Lin_Tem_Ite_Sta_Sta_Ico Lin_Tem_Ite_Cen"></div>
              </div>
              <div className="Lin_Tem_Ite_Sta_Sta">
                <div className="Lin_Tem_Ite_Sta_Sta_Con">
                  <h4>2001</h4>
                  <p>Teste La lal al al</p>
                </div>
                <div className="Lin_Tem_Ite_Sta_Sta_Ico Lin_Tem_Ite_Cen"></div>
              </div>
              <div className="Lin_Tem_Ite_Sta_Sta">
                <div className="Lin_Tem_Ite_Sta_Sta_Con">
                  <h4>2001</h4>
                  <p>Teste La lal al al</p>
                </div>
                <div className="Lin_Tem_Ite_Sta_Sta_Ico Lin_Tem_Ite_Cen"></div>
              </div>
              <div className="Lin_Tem_Ite_Sta_Sta">
                <div className="Lin_Tem_Ite_Sta_Sta_Con">
                  <h4>2001</h4>
                  <p>Teste La lal al al</p>
                </div>
                <div className="Lin_Tem_Ite_Sta_Sta_Ico Lin_Tem_Ite_Cen"></div>
              </div>
              <div className="Lin_Tem_Ite_Sta_Sta">
                <div className="Lin_Tem_Ite_Sta_Sta_Con">
                  <h4>2001</h4>
                  <p>Teste La lal al al</p>
                </div>
                <div className="Lin_Tem_Ite_Sta_Sta_Ico Lin_Tem_Ite_Cen"></div>
              </div>
              <div className="Lin_Tem_Ite_Sta_Sta">
                <div className="Lin_Tem_Ite_Sta_Sta_Con">
                  <h4>2001</h4>
                  <p>Teste La lal al al</p>
                </div>
                <div className="Lin_Tem_Ite_Sta_Sta_Ico Lin_Tem_Ite_Cen"></div>
              </div>
              <div className="Lin_Tem_Ite_Sta_Sta">
                <div className="Lin_Tem_Ite_Sta_Sta_Con">
                  <h4>2001</h4>
                  <p>Teste La lal al al</p>
                </div>
                <div className="Lin_Tem_Ite_Sta_Sta_Ico Lin_Tem_Ite_Cen"></div>
              </div>
              <div className="Lin_Tem_Ite_Sta_Sta">
                <div className="Lin_Tem_Ite_Sta_Sta_Con">
                  <h4>2001</h4>
                  <p>Teste La lal al al</p>
                </div>
                <div className="Lin_Tem_Ite_Sta_Sta_Ico Lin_Tem_Ite_Cen"></div>
              </div>
              <div className="Lin_Tem_Ite_Sta_Sta">
                <div className="Lin_Tem_Ite_Sta_Sta_Con">
                  <h4>2001</h4>
                  <p>Teste La lal al al</p>
                </div>
                <div className="Lin_Tem_Ite_Sta_Sta_Ico Lin_Tem_Ite_Cen"></div>
              </div>
              <div className="Lin_Tem_Ite_Sta_Sta">
                <div className="Lin_Tem_Ite_Sta_Sta_Con">
                  <h4>2001</h4>
                  <p>Teste La lal al al</p>
                </div>
                <div className="Lin_Tem_Ite_Sta_Sta_Ico Lin_Tem_Ite_Cen"></div>
              </div>
              <div className="Lin_Tem_Ite_Sta_Sta">
                <div className="Lin_Tem_Ite_Sta_Sta_Con">
                  <h4>2001</h4>
                  <p>Teste La lal al al</p>
                </div>
                <div className="Lin_Tem_Ite_Sta_Sta_Ico Lin_Tem_Ite_Cen"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
