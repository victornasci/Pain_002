import "./styles.css";
import { Link } from "react-router-dom";

export const Menu = () => {
  return (
    <div className="Hea_Con_Men">
      {/* Barra de navegação */}
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
            {/* <a href="/">Home</a> */}
          </li>
          <li>
            <a href="/sobre-nos">Sobre nós</a>
          </li>
          <li>
            <a href="">Time</a>
          </li>
          <li>
            <a href="">Contato</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
