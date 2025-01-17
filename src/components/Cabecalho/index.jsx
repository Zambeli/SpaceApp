import styled from "styled-components"
import CampoTexto from "../../CampoTexto"

const HeaderEstilizado = styled.header`

    display: flex;
    justify-content: space-between;
    padding: 60px 0;
    img {
        width: 212px;
    }

`



const Cabecalho = ({setFiltro}) => {

    return (

        <HeaderEstilizado>

            <img src="./imagens/logo.png" alt="Logo da SpaceApp" />
            <CampoTexto setFiltro={setFiltro}/>

        </HeaderEstilizado>


    )

}

export default Cabecalho