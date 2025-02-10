import "./CharacterPage.css";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CharCard from "../../Componentes/ChardCard/ChardCard";

const CharacterPage = () => {
  const [character, setCharacter] = useState(null); // Cambiado para almacenar solo un personaje
  const { id } = useParams(); // Cambia `race` a `id`

  useEffect(() => {
    axios.get(`https://dragonball-api.com/api/characters/${id}`) // Llama directamente al personaje por id
      .then(response => setCharacter(response.data))
      .catch(error => console.error("Error fetching character:", error));
  }, [id]);

  // Muestra un mensaje de carga si el personaje no se ha cargado
  if (!character) return <p>Cargando personaje...</p>;

  return (
    <main id="character-page">
      <h1 id="title-character">{character.name}</h1>
      <div id="characters-races">
        <CharCard 
          img={character.image} 
          nombre={character.name} 
          race={character.race} 
          ki={character.ki}
          maxKi={character.maxKi}
        />
        {/* Agrega más detalles del personaje si es necesario */}
        <Link to="/">Volver</Link>
      </div>
    </main>
  );
}

export default CharacterPage;