import styled from "styled-components"
import Titulo from "../../Titulo"
import fotos from './fotos-populares.json'

const PopularesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 0;
  margin: 0;
  button {
    background-color: transparent;
    border: 2px solid #7B78E5;
    font-size: 20px;
    color: white;
    width: 210px;
    height: 58px;
    border-radius: 10px ;
    margin-top: 20px;
  }
  ul {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding: 0;
    margin: 0;
    img {
      border-radius: 10px;
      padding: 0;
      margin: 0;
    }
  }
`

const Populares = () => {
  return (
    <PopularesContainer>
    <Titulo $alinhamento="center">Populares</Titulo>
    <ul>
      {fotos.map(foto => <img src={foto.path} alt={foto.alt} key={foto.id}/>)}
    </ul>
    <button>Ver mais</button>
    </PopularesContainer>
  )
}
export default Populares
