import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { HomePage } from '../src/pages/HomePage';
import { AboutPage } from '../src/pages/AboutPage';

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
      <Route path="/" element={<HomePage />} />
      <Route path="/sobre-nos" element={<AboutPage />} />
    </Routes>
  );
};
