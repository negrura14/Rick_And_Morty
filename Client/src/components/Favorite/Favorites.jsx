import React, { useState } from 'react'
import styles from './Favorites.module.css'
import { connect, useDispatch } from 'react-redux'
import Card from '../Card/Card'
import { filterCards, orderCards } from '../../redux/actions'

const Favorites = (props) => {

  const {myFavorites} = props;
  const dispatch = useDispatch();

  const [aux,SetAux] = useState(false);
  
  const handleOrder = (e) =>{
    dispatch(orderCards(e.target.value))
    SetAux(!aux);
  }
  const handleFilter = (e) =>{
    dispatch(filterCards(e.target.value))
    SetAux(!aux);
  }
  return (
    <div >
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      {myFavorites.map((char) => {
      return (
        <div className= {styles.card}> 
        <Card 
          key={char.id}
          id={char.id}
          name={char.name}
          status={char.status}
          species={char.species}
          gender={char.gender}
          origin={char.origin.name}
          image={char.image}
        />
        </div>
      );
    })}</div>
  )
}

const mapStateToProps = (state) =>{
  return {
    myFavorites: state.myFavorites,
  }
}
export default connect(mapStateToProps,null)(Favorites);