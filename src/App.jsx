import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { Container } from 'react-bootstrap'
import Formulario from './components/Formulario'

function App() {
  return (
    <>
    <header className='py-3 bg-dark'>
      <h1 className='display-3 text-center text-light'>Peliculas</h1>
    </header>
    <Container className='mainContainer'>
      <Formulario>
      </Formulario>
    </Container>
    <footer className='py-3 bg-dark'>
      <p className='text-center text-light'>&copy; todos los derechos reservados</p>
    </footer>
    </>
  )
}

export default App
