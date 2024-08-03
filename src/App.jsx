import styled from "styled-components";
import EstilosGlobais from "./EstilosGlobais";
import Cabecalho from "./components/Cabecalho";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";

const FundoGradiente = styled.div`

  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;

`

const AppConteiner = styled.div`

  max-width: 1440px;
  margin: 0 auto;

`


const ConteudoPrincipal = styled.div`

  display: flex;
  gap: 24px;
  align-items: center;

`


function App() {

  return (
    <FundoGradiente>

      <EstilosGlobais />
      <AppConteiner>

        <Cabecalho />

        <ConteudoPrincipal>

          <BarraLateral />
          <Banner titulo='A galeria mais completa de fotos do espaço!' background='./imagens/banner.png' />

        </ConteudoPrincipal>

      </AppConteiner>

    </FundoGradiente>
  )
}

export default App
