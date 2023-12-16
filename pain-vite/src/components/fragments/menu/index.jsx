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
          </li>
          <li>
            <Link to="/sobre-nos">Sobre nós</Link>
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
