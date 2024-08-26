import { Link } from 'react-router-dom'

export const Menu = () => {
    return (
        <>
            {/* menu en router */}
            <nav className='menu'>
                <Link to='/'>Inicio</Link>
                <Link to='/nosotros'>Nosotros</Link>
                <Link to='/contacto'>Contacto</Link>
            </nav>
      </>
    )
}
