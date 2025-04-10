import "./AboutPage.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

import Charcard from "../../Card/Charcard";

const AboutPage = () => {
  
  const [data, setData]=useState({});
  
  let {id} = useParams();

 useEffect(()=>{
  axios.get(`https://dragonball-api.com/api/characters/${id}`)
  .then(char=> setData(char.data))},[])
  

  return (
    <main id='pagina_personaje'>
        <h1 id="titulo_personaje">Personaje especifico</h1>    
        <Charcard img={data.image} nombre={data.name} ki={data.ki} race={data.race}/>
    </main>
  )
}

export default AboutPage