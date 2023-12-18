import { Cards } from "../../components/Cards/index.jsx";
import { ShirtSales } from "../../components/ShirtSales/index.jsx";
import { Destaque } from "../../components/destaque/index.jsx";
import { Patrocinadores } from "../../components/patrocinadores/index.jsx";
export const HomePage = () => {
  return (
    <>
      <Destaque></Destaque>
      <Cards></Cards>
      <Patrocinadores></Patrocinadores>
    </>
  );
};
