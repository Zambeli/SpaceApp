import styled from "styled-components";
import Titulo from "../Titulo";
import Tags from "./Tags";
import Populares from "./Populares";
import Imagem from "./Imagem";

const GaleriaContainer = styled.div`
  display: flex;
`;

const SecaoFluida = styled.section`
  flex-grow: 1;
  ul {
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    gap: 24px;
  }
`;

const Galeria = ({ fotos = [], aoFotoSelecionada, aoAlternarFavorito }) => {
  return (
    <>
      <Tags />

      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>

          <ul>
            {fotos.map((foto) => (
              <Imagem
                aoAlternarFavorito={aoAlternarFavorito}
                aoZoomSolicitado={aoFotoSelecionada}
                key={foto.id}
                foto={foto}
              />
            ))}
          </ul>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </>
  );
};

export default Galeria;
