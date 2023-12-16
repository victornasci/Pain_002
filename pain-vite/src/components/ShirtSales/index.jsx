import "./styles.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CamisaManto from "../../assets/img/manto-2.jpg";
import { RadioSize } from "../fragments/Radiosize/index.jsx";

export const ShirtSales = () => {
  return (
    <section className="ContainerCards">
      <div className="Container_Ul main__cards cards">
        <ul className="cards__inner">
          <li className="cards__card card" id="ROSA">
            <div className="Container_Card">
              <figcaption>
                <img src={CamisaManto} alt="" />
              </figcaption>
              <div className="Con_Des_Item">
                <h4>UNIFORME OFICIAL PAIN GAMING 2023 MANGA LONGA</h4>
                <div className="Con_Tam">
                  <div className="radio-input">
                    <RadioSize
                      className="input"
                      type="radio"
                      name="name"
                    ></RadioSize>
                    <RadioSize
                      className="input"
                      type="radio"
                      name="name"
                    ></RadioSize>
                    <RadioSize
                      className="input"
                      type="radio"
                      name="name"
                    ></RadioSize>
                    <RadioSize
                      className="input"
                      type="radio"
                      name="name"
                    ></RadioSize>
                    <RadioSize
                      className="input"
                      type="radio"
                      name="name"
                    ></RadioSize>
                    <RadioSize
                      className="input"
                      type="radio"
                      name="name"
                    ></RadioSize>
                  </div>
                </div>
                <span>
                  <b>
                    <p>R$ 199,00</p>
                  </b>
                  <p> ou </p>
                  <p> 3x de R$ 66,33 sem juros</p>
                </span>
              </div>
            </div>

            <div className="Con_Buttons">
              <button>Compre Agora</button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
