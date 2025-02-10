import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css"

import Header from "./Componentes/Header/Header"

import HomePage from "./Pages/HomePage/HomePage";
import CharacterPage from "./Pages/CharacterPage/CharacterPage"
import AboutPage from "./Pages/AboutPage/AboutPage"

const App = () => {
  return (
    <div className="App">
      <Router>
        <div id="div-header">
          <div id="menu">
            <Header />
          </div>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/characters/:id" element={<CharacterPage />} />
          <Route path="/characters/:race" element={<CharacterPage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
        </Routes>

      </Router>
    </div>
  )
}

export default App