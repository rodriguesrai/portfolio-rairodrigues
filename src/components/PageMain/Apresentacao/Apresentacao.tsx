import {
  AprensentacaoWrapper,
  ApresentacaoMainContainer,
  ImageArrowDown,
  ImageDiv,
  ImageStyled,
} from './Apresentacao.styled'
import ImagemApresentacao from '../../../assets/stallion-2099164.svg'
import Seta from '../../../assets/arrow-1455.gif'

export default function Apresentação() {
  return (
    <>
      <ApresentacaoMainContainer>
        <AprensentacaoWrapper>
          <h1>Apresentação</h1>
          <p>
            Me chamo Rai Rodrigues, sou desenvolvedor front-end, atualmente
            trabalhando com React e Typescript. Sou apaixonado por tecnologia e
            estou sempre em busca de novos conhecimentos.
          </p>
        </AprensentacaoWrapper>
        <ImageDiv>
          <ImageStyled src={ImagemApresentacao} alt='imagem legal' />
        </ImageDiv>
        <ImageArrowDown src={Seta} />
      </ApresentacaoMainContainer>
    </>
  )
}
