import styled from "styled-components";
import Titulo from "../../Titulo";
import fotos from "./fotos-populares.json"

const PopularesContainer = styled.div`
  margin-left: 30px;
`

const ColunaFotos = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Imagem = styled.img`
    max-width: 212px;
    border-radius: 20px;
`

const Botao = styled.button`
    background: transparent;
    color: #FFFFFF; 
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    width: 100%;
    margin-top: 10px;
    justify-content: center;
    font-size: 20px;
    padding: 12px 20px;
    cursor: pointer;
`


const Populares = () => {
  return (
    <PopularesContainer>
      <Titulo $alinhamento="center">Populares</Titulo>
      <ColunaFotos>
        {fotos.map(foto => <Imagem key={foto.id} src={foto.path} alt={foto.alt}/>)}
      </ColunaFotos>
      <Botao>Ver mais</Botao>
    </PopularesContainer>
  );
};

export default Populares;
