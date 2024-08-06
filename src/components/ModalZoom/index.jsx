import React from "react";
import Imagem from "../Galeria/Imagem";
import styled from "styled-components";

const Overlay = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 0;
  margin: 0;
`;

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 70px;
    padding: 0;
    width: 800px;
    border: 0;
    background-color: transparent;
    display: flex;
    justify-content: center;
    form {
        button {
            position: relative;
            top: 20px;
            right: 60px;
            background-color: transparent;
            border: none;
        }
    }
`

const ModalZoom = ({ foto, aoFecharModal,  aoAlternarFavorito }) => {
  return (
    <>
      {foto && (
        <Overlay>
          <DialogEstilizado open={!!foto}>
            <Imagem foto={foto} expandida={true} aoAlternarFavorito={aoAlternarFavorito}/>
            <form method="dialog">
              <button onClick={aoFecharModal} type="submit"><img src="./icones/fechar.png" alt="" /></button>
            </form>
          </DialogEstilizado>
        </Overlay>
      )}
    </>
  );
};

export default ModalZoom;
