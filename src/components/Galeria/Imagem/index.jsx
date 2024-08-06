import React from "react";
import styled from "styled-components";

const FigureEstilizada = styled.figure`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.$expandida ? "90%" : "460px")};
  margin: 0;
  padding: 0;
  max-width: 100%;
  border-radius: 20px;
  & > img {
    max-width: 100%;
    border-radius: 20px 20px 0 0;
  }
`;

const FigcaptionEstilizada = styled.figcaption`
  background-color: #001634;
  margin: 0;
  padding: 0;
  color: #fff;
  padding: 12px;
  border-radius: 0px 0px 20px 20px;
  box-sizing: border-box;
  h3 {
    margin: 0;
    padding: 0;
    font-family: "GandhiSansBold";
  }
  p {
    margin: 0;
    padding: 0;
  }
  footer {
    display: flex;
    gap: 24px;
    p {
      flex-grow: 1;
    }
    button {
      border: none;
      background-color: transparent;
      padding: 0;
      margin: 0;
      width: 24px;
      height: 24px;
    }
  }
`;

const Imagem = ({ foto, expandida, aoZoomSolicitado, aoAlternarFavorito }) => {


    const iconeFavorito = foto.favorita
    ? "./icones/favorito-ativo.png"
    : "./icones/favorito.png";

    // let iconeFavorito = './icones/favorito.png';
    // if (foto.favorita) {
    //     iconeFavorito = './icones/favorito-ativo.png'
    // }

  return (
    <FigureEstilizada $expandida={expandida}>
      <img src={foto.path} alt={`imagem${foto.titulo}`} />
      <FigcaptionEstilizada>
        <h3>{foto.titulo}</h3>
        <footer>
          <p>{foto.fonte}</p>
          <button onClick={() => aoAlternarFavorito(foto)}>
            <img src={iconeFavorito} alt="" />
          </button>
          {!expandida && (
            <button onClick={() => aoZoomSolicitado(foto)}>
              <img src="./icones/expandir.png" alt="" />
            </button>
          )}
        </footer>
      </FigcaptionEstilizada>
    </FigureEstilizada>
  );
};

export default Imagem;
