import NavB from "../NavB/NavB";
import "./Header.css";

const Header = () => {
  return (
    <header>
        <img id='logo-header' src="https://i.ibb.co/x7r2GV2/Logo.png" alt="Logo Dragon Ball" />
        <h1>Dragon Ball</h1>
        <p>Personajes</p>
        <NavB/>
    </header>
  )
}

export default Header