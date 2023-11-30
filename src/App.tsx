import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sidebar/Sobre'
import Projetos from './containers/Sidebar/Projetos'
import EstiloGlobal, { Container } from './style'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Container>
        <Sidebar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
