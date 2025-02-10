import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import "./NavBar.css";

const NavBar = () => {
    return (<nav>
        <Link to="/">
            <Button sx={{ marginTop: 4, width: 150 }} variant="contained">Inicio</Button>
        </Link>
        <Link to="/characters/Human">
            <Button onClick={() => setRaceFilter("Human")} sx={{ marginTop: 4, width: 150 }} variant="contained">Humanos</Button>
        </Link>
        <Link to="/characters/NoHuman">
            <Button onClick={() => setRaceFilter("NoHuman")} sx={{ marginTop: 4, width: 150 }} variant="contained">No Humanos</Button>
        </Link>
        <Link to="/AboutPage">
            <Button sx={{ marginTop: 4, width: 150 }} variant="contained">Acerca De</Button>
        </Link>
    </nav>);
}; export default NavBar