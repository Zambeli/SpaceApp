import styled from "styled-components";
import EstilosGlobais from "./EstilosGlobais";
import Cabecalho from "./components/Cabecalho";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import Galeria from "./components/Galeria";
import fotos from "./fotos.json";
import { useEffect, useState } from "react";
import ModalZoom from "./components/ModalZoom";
import Footer from "./components/Footer";

const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const App = () => {
  const [fotosDaGaleria, setFotosDaGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const [tag, setTag] = useState()
  const [filtro, setFiltro] = useState('')

  useEffect(() => {
    const fotosFiltradas = fotos.filter(foto => {
      const validaTag = !tag || tag === foto.tagId
      const validaInput = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase())
      return validaTag && validaInput
    })

    setFotosDaGaleria(fotosFiltradas)
  },[filtro, tag])

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita,
      });
    }
    setFotosDaGaleria(
      fotosDaGaleria.map((fotoDaGaleria) => {
        return {
          ...fotoDaGaleria,
          favorita:
            fotoDaGaleria.id === foto.id
              ? !foto.favorita
              : fotoDaGaleria.favorita,
        };
      })
    );
  };

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho setFiltro={setFiltro}/>
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner
              titulo="A galeria mais completa de fotos do espaço!"
              background="./imagens/banner.png"
            />
            <Galeria
              setTag={setTag}
              aoAlternarFavorito={aoAlternarFavorito}
              aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
              fotos={fotosDaGaleria}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        foto={fotoSelecionada}
        aoFecharModal={() => setFotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito}
      />
      <Footer/>
    </FundoGradiente>
  );
};

export default App;
