// Importaação Icones Fontwelson Solid
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Importaação Icones Fontwelson Brands Redes Sóciais
import {
  faSquareXTwitter,
  faInstagram,
  faYoutube,
  faTiktok,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

export const RedSoc = () => {
  return (
    <div className="Hea_Red_Soc">
      {/* <figcaption>
        <FontAwesomeIcon icon={faSquareXTwitter} className="icone" />
        <FontAwesomeIcon icon={faInstagram} className="icone" />
        <FontAwesomeIcon icon={faYoutube} className="icone" />
        <FontAwesomeIcon icon={faTiktok} className="icone" />
        <FontAwesomeIcon icon={faFacebook} className="icone" />
      </figcaption> */}
      <ul className="Hea_Red_Soc_Int">
        <li>
          <a href="">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </li>

        <li>
          <a href="">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
        </li>

        <li>
          <a href="">
            <i class="fab fa-whatsapp"></i>
          </a>
        </li>

        <li>
          <a href="">
            <i class="fa-brands fa-facebook-f"></i>
          </a>
        </li>

        <li>
          <a href="">
            <i class="fa-brands fa-tiktok"></i>
          </a>
        </li>

        <li>
          <a href="">
            <i class="fa-brands fa-youtube"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};
