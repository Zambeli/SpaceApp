import styled from "styled-components"

const CampoTextoDiv = styled.div`
    position: relative;
    display: inline-block;
`

const InputEstilizado = styled.input`
background-color: transparent;
width: 566px;
height: 56px;
border: 2px solid;
padding: 0;
border-color: rgba(201, 140, 241, 1)
rgba(123, 120, 229, 1);
border-radius: 10px;
margin-right: 50px;
padding: 12px 16px;
color: #D9D9D9;
font-weight: 600;
box-sizing: border-box;
font-size: 20px;
&::placeholder {
    color: #D9D9D9;
}
`

const ImagemEstilizada = styled.img`
    position: absolute;
    top: 12px;
    right: 10px;
    width: 32px;
    height: 32px;
`

const CampoTexto = () => {

    return(

        <CampoTextoDiv>

            <InputEstilizado type="text" placeholder="O que você procura?"/>

            <ImagemEstilizada src="./imagens/Lupa.svg"/>

        </CampoTextoDiv>
    )

}

export default CampoTexto