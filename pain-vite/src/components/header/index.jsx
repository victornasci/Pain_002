// Import Css
import "../header/styles.css";

import "../imports/index.jsx";

// Import Logo
import LogoGif from "../../assets/img/Gif_Logo.mp4";

// Importaação Icones Fontwelson Solid
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

import { Menu } from "../fragments/menu/index.jsx";
import { Link } from "react-router-dom";
import { RedSoc } from "../fragments/RedSoc/index.jsx";

export const Header = () => {
  return (
    <header>
      <div className="Container">
        {/* Retornando Logo */}
        <div className="Hea_Con_Log">
          <Link to={"/"}>
            <figcaption>
              <video autoPlay loop muted className="Hea_Gif_Log">
                <source src={LogoGif} type="video/mp4" />
                {/* Adicione outros formatos de vídeo se necessário */}
              </video>
            </figcaption>
          </Link>
        </div>

        {/* Menu */}
        <Menu></Menu>
        <RedSoc></RedSoc>

        <div className="Hea_Sea">
          <nav>
            <a href="">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </a>
            <a href="">
              <FontAwesomeIcon icon={faCartShopping} />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};
