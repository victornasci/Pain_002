import React from "react";

// Estilização
import "./styles.css";

export const Contato = () => {
  return (
    <div className="Con_Are Cen_002">
      <div className="Con_Are_Int ">
        {/* Titulo */}
        <div className="Con_Are_Int_Tit">
          <h1>Contato</h1>
        </div>

        <div className="Con_Are_Int_For">
          <div className="Con_Are_Int_For_Int">
            <label htmlFor="">
              Nome
            </label>
            <div className="Con_Are_Int_For_Int_Inp Ico Ico_Per">
              <input type="text" placeholder="Nome"/>
            </div>
          </div>

          <div className="Con_Are_Int_For_Int">
            <label htmlFor="">
              E-mail
            </label>
            <div className="Con_Are_Int_For_Int_Inp Ico Ico_Ema">
              <input type="text" placeholder="E-mail"/>
            </div>
          </div>

          <div className="Con_Are_Int_For_Int">
            <label htmlFor="">
              Telefone
            </label>
            <div className="Con_Are_Int_For_Int_Inp Ico Ico_Pho">
              <input type="text" placeholder="(12) 9 1234-1234"/>
            </div>
          </div>

          <div className="Con_Are_Int_For_Int">
            <label htmlFor="">
              Assunto
            </label>
            <div className="Con_Are_Int_For_Int_Inp Ico Ico_Ass">
              <input type="text" placeholder="Assunto"/>
            </div>
          </div>

          <div className="Con_Are_Int_For_Int For_Tex">
            <label htmlFor="">
              Mensagem
            </label>
            <div className="Con_Are_Int_For_Int_Inp Ico Ico_Men">
              <textarea type="text"  placeholder="Mensagem..."/>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
