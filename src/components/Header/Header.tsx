import { Link } from 'react-router-dom'
import {
  DivButtonsAndContacts,
  HeaderContainer,
  Logo,
  Nav,
  SocialIconsContainer,
} from './Header.styled'
import { FaLinkedin, FaSquareGithub } from 'react-icons/fa6'

export default function Header() {
  return (
    <>
      <HeaderContainer>
        <Logo>RR</Logo>
        <DivButtonsAndContacts>
          <Nav>
            <Link to='/'>Sobre</Link>
            <Link to='/'>Projetos</Link>
            <Link to='/contato'>Contato</Link>
          </Nav>
          <SocialIconsContainer>
            <a href='https://github.com/rodriguesrai' target='_blank'>
              <FaSquareGithub size={30} />
            </a>
            <a
              href='https://www.linkedin.com/in/rai-rodrigues/'
              target='_blank'
            >
              <FaLinkedin size={30} />
            </a>
          </SocialIconsContainer>
        </DivButtonsAndContacts>
      </HeaderContainer>
    </>
  )
}
