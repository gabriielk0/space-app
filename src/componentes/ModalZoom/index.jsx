import styled from "styled-components";
import Imagem from "../Imagem";
import { IoCloseSharp } from "react-icons/io5";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const DialogEstilizado = styled.dialog`
    background: transparent;
    display: flex;
    justify-content: center;
    position: absolute;
    top: 294px;
    max-width: 100vw;
    max-height: 100vh;
    border: none;
    padding: none;
    margin: none;
`

const BotaoIcone = styled.button`
  background-color: transparent;
  border: none;
  color: #FFFFFF;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`

/* eslint-disable react/prop-types */
const ModalZoom = ({ foto, aoFechar }) => {
  return (
    <>
      {foto && (
        <>
          <Overlay />
          <DialogEstilizado open={!!foto} onClose={aoFechar}>
            <Imagem foto={foto} expandida={true} />
            <form method="dialog">
              <BotaoIcone formMethod="dialog">
                <IoCloseSharp size={30}/>
              </BotaoIcone>
            </form>
          </DialogEstilizado>
        </>
      )}
    </>
  );
};

export default ModalZoom;
