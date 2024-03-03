import styled from 'styled-components'

export const ApresentacaoMainContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 2rem;
  padding: 2rem;
  background-color: var(--backgroundMain);
  color: var(--text);
  min-height: 93vh;
`

export const ImageDiv = styled.div``

export const ImageStyled = styled.img`
  width: 100%;
  max-width: 300px;
  border-radius: 50%;
`

export const AprensentacaoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 30%;
`

export const ImageArrowDown = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  filter: brightness(0);
`
