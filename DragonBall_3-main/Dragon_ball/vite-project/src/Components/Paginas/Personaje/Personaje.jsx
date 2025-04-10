import "./Personaje.css";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Charcard from "../../Card/Charcard";

const Personaje = () => {
  const [data, setData] = useState([]);
  const { race } = useParams();

  useEffect(() => {
    axios.get("https://dragonball-api.com/api/characters")
      .then(char => setData(char.data.items))
  }, []);

  const tmp = race === "NoHuman"
    ? data.filter(elem => ["Saiyan", "Frieza Race", "Android"].includes(elem.race))
    : data.filter(elem => elem.race === race);

  return (
    <main id='pagina_personaje'>
      <h1 id="titulo_personaje">Personajes</h1>
      <div id="race_personaje">
          {tmp.map((element) => 
            <div key={element.id}>
              <Link to={`/details/${element.id}`}>
                <Charcard img={element.image} nombre={element.name} ki={element.ki} race={element.race} />
              </Link>
            </div>
          )}
      </div>
    </main>
  );
}

export default Personaje;
