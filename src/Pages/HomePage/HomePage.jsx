import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./HomePage.css";
import axios from 'axios';

import CharCard from '../../Componentes/ChardCard/ChardCard';

const HomePage = () => {

  const [data, setData] = useState([]);

  useEffect(
    () => {
      axios("https://dragonball-api.com/api/characters")
        .then(char => setData(char.data.items))
    }, []);

  return (
    <main id='home-page'>
      <div>
      <img id='logo' src="https://imgix.ranker.com/user_node_img/50045/1000894831/original/dbz-is-one-of-the-top-50-rated-shows-of-all-time-photo-u1?fit=crop&fm=pjpg&q=60&w=650&dpr=2" alt="Logo DB" />
      </div>
      <div id='characters'>
        {
          data.map((element) =>
            <div key={element.id}>
              <Link to={"/characters/" + element.id} key={element.id} style={{ textDecoration: 'none' }}> {/* Mueve key al Link */}
                <CharCard img={element.image} nombre={element.name} raza={element.race} ki={element.ki} maxKi={element.maxKi}/>
              </Link>
            </div>
          )
        }
      </div>
    </main>
  )
}

export default HomePage