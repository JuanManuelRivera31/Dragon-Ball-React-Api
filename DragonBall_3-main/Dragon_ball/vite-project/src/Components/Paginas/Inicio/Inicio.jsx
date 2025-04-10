import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./Inicio.css";
import axios from 'axios';
import Charcard from '../../Card/Charcard';

const Inicio = () => {

  const [data, setData] = useState([]);

  useEffect(
    () => {
      axios("https://dragonball-api.com/api/characters")      
      .then(char=>setData(char.data.items))
    },[]);

  return (
    <main id='inicio'>
        <div>
          <h1>Inicio</h1>
        </div>        
        <div id='personaje'>
        {
            data.map((element)=>
              <div key={element.id}>
                <Link to={"/details/"+element.id}>
                <Charcard img={element.image} nombre={element.name} ki={element.ki} race={element.race}/>
                </Link>            
              </div>
            )                
        }
        </div>
    </main>
  )
}

export default Inicio