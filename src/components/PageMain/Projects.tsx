import Card from './Projects/Card'
import { CardsContainer, ProjectsContainer } from './Projects.styled'

export default function Projects() {
  return (
    <>
      <ProjectsContainer>
        <h1>Principais Projetos</h1>
        <CardsContainer>
          <Card />
          <Card />
          <Card />
        </CardsContainer>
        <h2>------------</h2>
        <Card />
      </ProjectsContainer>
    </>
  )
}
