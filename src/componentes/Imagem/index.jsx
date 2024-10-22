import styled from "styled-components";
import { CiHeart } from "react-icons/ci";
import { FaExpandAlt } from "react-icons/fa";

/* eslint-disable react/prop-types */
const Figure = styled.figure`
  width: ${(props) => (props.$expandida ? '90%' : '460px')};
  max-width: 300px;
  display: flex;
  flex-direction: column;
  margin: 0;
`

const ImgEstilizada = styled.img`
  max-width: 100%;
  border-radius: 20px 20px 0 0;
`

const FigCaptionEstilizada = styled.figcaption`
  color:#FFFFFF;
  background-color: #001634;
  max-width: 100%;
  border-radius:  0 0 20px 20px;
  padding: 12px;
  box-sizing: border-box;
  h3{
    font-family: 'GandhiSansBold'
  }
  h4 {
    flex-grow: 1
    }
  h3,
  h4{
    margin: 0;
    font-size: 16px;
  }
`

const TituloEstilizado = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0;
`

const RodapeEstilizado = styled.footer`
  display: flex;
  justify-content:space-between;
`


const FonteEstilizada = styled.p`
  font-family: 'GandhiSansRegular';
  margin-top: 5px;
  font-size: 16px;
  font-weight: 400;
`
const BotaoEstilizado = styled.button`
  background: none;
  border: none;
  padding: 10px;
`

const Imagem = ({ foto }) => {
  return (
    <Figure>
      <ImgEstilizada src={foto.path} alt={foto.alt} />
      <FigCaptionEstilizada>
        <TituloEstilizado>{foto.titulo}</TituloEstilizado>
        <RodapeEstilizado>
          <FonteEstilizada>{foto.fonte}</FonteEstilizada>
          <div>
            <BotaoEstilizado><CiHeart style={{ color: 'white'}} /></BotaoEstilizado>
            <BotaoEstilizado><FaExpandAlt style={{ color: 'white'}}/></BotaoEstilizado>
          </div>
        </RodapeEstilizado>
      </FigCaptionEstilizada>
    </Figure>
  );
};

export default Imagem;
