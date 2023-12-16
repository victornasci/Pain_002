import { Route, Routes } from "react-router-dom";
import { HomePage } from "../src/pages/HomePage";
import { AboutPage } from "../src/pages/AboutPage";
import { CardsPage } from "../src/pages/CardsPage";

export const RoutesMain = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Recarregar a página ao mudar de rota
    const handleNavigation = () => {
      window.location.reload();
    };

    // Adicionar um ouvinte para a mudança de rota
    navigate(handleNavigation);

    // Remover o ouvinte quando o componente for desmontado
    return () => {
      navigate(handleNavigation);
    };
  }, [navigate]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/sobre-nos" element={<AboutPage />}></Route>
      <Route path="/cards" element={<CardsPage />}></Route>
    </Routes>
  );
};
