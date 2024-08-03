import styled from "styled-components"

const ImagemBanner = styled.figure`

    display: flex;
    position: relative;
    flex-grow: 1;
    background-image: ${props => `url(${props.$backgroundImg})`};
    min-height: 328px;
    max-width: 100%;
    margin: 0px;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 20px;

`

const TituloEstilizado = styled.h1`

    color: rgba(255, 255, 255, 1);
    position: absolute;
    top: 60px;
    left: 70px;
    width: 300px;
    font-family: GandhiSansRegular;
    font-size: 40px;
    font-weight: 400;
    line-height: 48px;

`

const Banner = ({ titulo, background }) => {


    return (

        <ImagemBanner $backgroundImg={background}>
            <TituloEstilizado>{titulo}</TituloEstilizado>
        </ImagemBanner>

    )
    
}

export default Banner
