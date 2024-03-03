import styled from 'styled-components'

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  width: 300px;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid var(--laranja1);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }
`
