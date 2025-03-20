import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Titulo from './componentes/Titulo'
import Imagen from './componentes/imagen'
import BloqueVerde from './componentes/BloqueVerde'
import BloqueAzul from './componentes/BloqueAzul'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Titulo/>
    <Imagen/>
    <BloqueVerde/>
    <BloqueAzul/>
  </StrictMode>,
)
