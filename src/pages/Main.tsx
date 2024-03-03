import Apresentacao from '../components/PageMain/Apresentacao/Apresentacao'
import Contatos from '../components/PageMain/Contatos/Contatos'
import Projects from '../components/PageMain/Projects'
import { MainContainer } from './Main.styled'

export default function Principal() {
  return (
    <>
      <MainContainer>
        <Apresentacao />
        <Projects />
        <Contatos />
      </MainContainer>
    </>
  )
}
