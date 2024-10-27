import styled from "styled-components";

/* eslint-disable react/prop-types */
const Figure = styled.figure`
  width: ${(props) => (props.$expandida ? "90vw" : "460px")};
  height: ${(props) => (props.$expandida ? "90vh" : "auto")};
  max-width: ${(props) => (props.$expandida ? "1152px" : "300px")};
  display: flex;
  flex-direction: column;
  margin: 0;
`;

const ImgEstilizada = styled.img`
  max-width: ${(props) => (props.$expandida ? "90vw" : "100%")};
  max-height: ${(props) => (props.$expandida ? "90vh" : "auto")};
  border-radius: 20px 20px 0 0;
  object-fit: contain;
`;

const FigCaptionEstilizada = styled.figcaption`
  color: #ffffff;
  background-color: #001634;
  max-width: 100%;
  border-radius: 0 0 20px 20px;
  padding: 12px;
  box-sizing: border-box;
  h3 {
    font-family: "GandhiSansBold";
  }
  h4 {
    flex-grow: 1;
  }
  h3,
  h4 {
    margin: 0;
    font-size: 16px;
  }
`;

const TituloEstilizado = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 0;
`;

const RodapeEstilizado = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const FonteEstilizada = styled.p`
  font-family: "GandhiSansRegular";
  margin-top: 5px;
  font-size: 16px;
  font-weight: 400;
`;
const BotaoEstilizado = styled.button`
  background: none;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

const Imagem = ({
  foto,
  expandida = false,
  aoZoomSolicitado,
  aoAlternarFavorito,
}) => {
  const iconeFavorito = foto.favorita
    ? "/icones/favorito-ativo.png"
    : "/icones/favorito.png";

  return (
    <Figure $expandida={expandida} id={`foto-${foto.id}`}>
      <ImgEstilizada src={foto.path} alt={foto.alt} />
      <FigCaptionEstilizada>
        <TituloEstilizado>{foto.titulo}</TituloEstilizado>
        <RodapeEstilizado>
          <FonteEstilizada>{foto.fonte}</FonteEstilizada>
          <div>
            <BotaoEstilizado onClick={() => aoAlternarFavorito(foto)}>
              <img src={iconeFavorito} style={{ color: "white" }} />
            </BotaoEstilizado>
            {!expandida && (
              <BotaoEstilizado
                aria-hidden={expandida}
                onClick={() => {
                  console.log("fotoSelecionada");
                  aoZoomSolicitado(foto);
                }}
              >
                <img src="/icones/expandir.png" alt="Expandir" />
              </BotaoEstilizado>
            )}
          </div>
        </RodapeEstilizado>
      </FigCaptionEstilizada>
    </Figure>
  );
};

export default Imagem;
