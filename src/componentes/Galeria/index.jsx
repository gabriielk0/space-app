import styled from "styled-components"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Tags from "./Tags"
import Imagem from "../Imagem"

const GaleriaContainer = styled.div`
    display: flex;
`
const SecaoFluida = styled.section`
    flex-grow: 1;
`

const ImagemContainer = styled.section`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 24px;
`

// eslint-disable-next-line react/prop-types
const Galeria = ({fotos = [] }) => {
    return (
        <>
            <Tags />
            <GaleriaContainer>
                <SecaoFluida>

                <Titulo>Navegue pela galeria</Titulo>
                <ImagemContainer>
                    {fotos.map(foto => <Imagem key={foto.id} foto={foto}/>)}
                </ImagemContainer>
                </SecaoFluida>
                <Populares/>
            </GaleriaContainer>
        </>
    )
}

export default Galeria