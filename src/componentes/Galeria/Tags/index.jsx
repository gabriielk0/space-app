import styled from 'styled-components'
import tags from './tags.json'

const SecaoTags = styled.section`
    display: flex;
    gap: 24px;
    margin-top: 20px;
    align-items: center;
`

const TextoEstilizado = styled.p`
    color: #FFFFFF;
`

const Botao = styled.button`
    color: #FFFFFF;
    background-color: #D9D9D950;
    width: auto;
    height: 39px;
    border: solid 2px #7B78E5;
    border-radius: 10px;
    &:hover {
        border-color: #C98CF1;
    }
`


const Tags = () => {
    return (
        <SecaoTags>
            <TextoEstilizado>Busque por tags:</TextoEstilizado>
            {tags.map(tag => <Botao key={tag.id}>{tag.titulo}</Botao>)}
        
        </SecaoTags>
    )

}

export default Tags