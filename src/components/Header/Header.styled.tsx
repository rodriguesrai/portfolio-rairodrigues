import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 2rem;
  height: 7vh;
  background-color: var(--backgroundHeader);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 100;
`
export const Logo = styled.h1`
  font-size: 2rem;
`
export const Nav = styled.nav`
  display: flex;
  gap: 1rem;
  font-size: 1.5rem;
`
export const SocialIconsContainer = styled.div`
  display: flex;
  gap: 1rem;
`
export const DivButtonsAndContacts = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`
