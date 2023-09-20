import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Servicios from "./components/layouts/Servicios"
import Contacto from "./components/layouts/Contacto"
import Home from './components/layouts/Home'
const router = createBrowserRouter([
  {
    path: '/servicios',
    element: <Servicios />
  },
  {
    path: '/contacto',
    element: <Contacto />
  },
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <section className='contenedor'>
      <RouterProvider router={router} />
    </section>
  )
}

export default App
