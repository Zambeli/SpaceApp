import React from 'react'
import styled from 'styled-components'

const FooterEstilizado = styled.footer`

margin: 0;
padding: 0;
height: 80px;
background-color: #04244F;
display: flex;
align-items: center;
justify-content: space-between;
color: white;
font-size: 20px;
padding-left: 20px;
padding-right: 20px;
margin-top: 60px;
div {
    display: flex;
    gap: 24px;
}
`

const Footer = () => {
  return (
    <FooterEstilizado>

        <div>
            <p>Face</p>
            <p>Twitter</p>
            <p>Insta</p>
        </div>

        <h4>Desenvolvido por Zambeli</h4>

    </FooterEstilizado>
  )
}

export default Footer