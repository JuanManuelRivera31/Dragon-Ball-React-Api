import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import "./NavB.css";

const NavB = () => {
  return (
    <nav>        
        <Link to={"/"}> 
          <Button sx={{marginTop: 3, width: 150}} variant="contained" id='boton'>Inicio</Button>
         </Link>
        <Link to={"/Personaje/NoHuman"}>
          <Button sx={{marginTop: 3, width: 150}} variant="contained" id='boton'>No humano</Button>  
        </Link>
        <Link to={"/Personaje/Human"}>
          <Button sx={{marginTop: 3, width: 150}} variant="contained" id='boton'>Humanos</Button>
         </Link> 
         <Link to={"/detalle"}> 
          <Button sx={{marginTop: 3, width: 150, marginBottom:2}} variant="contained" id='boton'>Detalles</Button>
        </Link>
        
    </nav>
  )
}
export default NavB