import React, { useState, useEffect} from "react";
import styles from './Detail.module.css'
import axios from "axios";
import { useParams } from "react-router-dom";

const Detail = () => {
    const { id } = useParams();
    const [character, setCharacter] = useState({});

    useEffect(() => {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
        ({ data }) => {
          if (data.name) {
            setCharacter(data);
          } else {
            window.alert("No hay personajes con ese ID");
          }
        }
      );
      return setCharacter({});
    }, [id]);

    return (
      <div className={styles.cont}>
        <div className={styles.h1}>
           <h1>{character?.name}</h1>
        </div>
          <h2 className={styles.status}>{character?.status}</h2>
          <h2 className={styles.species}>{character?.species}</h2>
          <h2 className={styles.gender}>{character?.gender}</h2>
          <h2 className={styles.name}>{character.origin?.name}</h2>
      <img src={character.image} alt="char detail" />
    </div>
  );

};

export default Detail;