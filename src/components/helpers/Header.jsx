import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header>
        <Link to="/">Home</Link>
        <Link to="/servicios">Servicios</Link>
        <Link to="/contacto">Contacto</Link>
    </header>
  )
}

export default Header