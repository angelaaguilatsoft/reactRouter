
import { Route, Routes } from 'react-router-dom'
import { Inicio } from '../components/Inicio.jsx'
import { Nosotros } from '../components/Nosotros.jsx'
import { Contacto } from '../components/Contacto.jsx'

function AppRouter() {
  return (
    <>
        <Routes>
            <Route path='/' element={ <Inicio /> }/>
            <Route path='/nosotros' element={ <Nosotros /> }/>
            <Route path='/contacto' element={ <Contacto /> }/>
        </Routes>
    </>
    )
}

export default AppRouter