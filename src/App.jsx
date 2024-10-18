import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import Galeria from "./componentes/Galeria";
import Fotos from "./fotos.json"
import { useState } from "react";



const FundoGradiente = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  max-width: 100%;
  min-height: 100vh;
`;

const Container = styled.div`
  margin-inline: auto;
  display: flex;
  gap: 24px;
`;

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`;

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

function App() {
  // eslint-disable-next-line no-unused-vars
  const [fotosDaGaleria, setFotosDaGaleria] = useState(Fotos)

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <Container>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner />
            <Galeria fotos={fotosDaGaleria}/>
          </ConteudoGaleria>
        </Container>
      </AppContainer>
    </FundoGradiente>
  );
}

export default App;
