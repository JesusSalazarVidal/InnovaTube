import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import {InnovaProvider} from './Context/InnovaContext'
import Inicio from './pages/InicioPage'
import Navbar from './Components/Navbar'
import FormularioRegistro from './Components/FormularioRegistro'
import FavoritosUsuarioPage from './pages/FavoritosUsuarioPage'

function App() {
  return (
    <InnovaProvider>
    <BrowserRouter>
    <main>
    <Navbar/>
      <Routes>
        
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/registrar' element={<FormularioRegistro/>}/>
        <Route path='/misFavoritos' element={<FavoritosUsuarioPage/>}/>
      </Routes>
    </main>
    </BrowserRouter>
    </InnovaProvider>
  )
}

export default App