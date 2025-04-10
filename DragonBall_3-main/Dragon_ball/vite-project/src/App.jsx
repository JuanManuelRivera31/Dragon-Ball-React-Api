
import React from 'react'
import "./App.css"
import Header from './Components/Header/Header'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Inicio from './Components/Paginas/Inicio/Inicio';
import Personaje from './Components/Paginas/Personaje/Personaje';
import AboutPage from './Components/Paginas/About_Page/AboutPage';
import Detalle from './Components/Paginas/Detalle/detalle';


const App = () => {
  return (
    <div className="App">
      <Router>
        <div id="div-header">
          <div id="cabeza">
            <Header/>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
           <Route path="/Personaje/:race" element={<Personaje/>}/>
           <Route path="/details/:id" element={<AboutPage/>}/> 
           <Route path="/Detalle" element={<AboutPage/>}/> 
      </Routes>
      </Router>
    </div>
  )
}

export default App