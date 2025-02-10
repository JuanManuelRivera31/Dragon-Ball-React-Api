import "./Header.css";

import NavBar from "../NavBar/NavBar";

const Header = () => {
  return (
    <header>
        <img id='logo-header' src="https://imgix.ranker.com/user_node_img/50045/1000894831/original/dbz-is-one-of-the-top-50-rated-shows-of-all-time-photo-u1?fit=crop&fm=pjpg&q=60&w=650&dpr=2" alt="Logo DB" />
        <h1>DRAGON BALL</h1>
        <NavBar/>
    </header>
  )
}

export default Header