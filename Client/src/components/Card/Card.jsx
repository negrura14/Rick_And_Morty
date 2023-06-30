import { connect } from 'react-redux';
import styles from './Card.module.css'
import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { useState, useEffect} from 'react';
import {ROUTES} from '../../helpers/RoutesPath'
import { useLocation } from 'react-router-dom';



function Card(props) {
  
  const location = useLocation();
  const isHomeRoute = location.pathname === ROUTES.HOME;
  
  const { id, 
          name, 
          status, 
          species, 
          gender,
          origin, 
          image, 
          onClose, 
          addFav, 
          removeFav,
          myFavorites,
        } = props;

        
          

  const [isFav, setIsFav] = useState(false);

    useEffect(()=>{
      myFavorites.forEach((fav)=>{
        if (fav.id === props.id){
          setIsFav(true);
        }
      })
    },[myFavorites]);

  const handleFavorite = () => {
    isFav ? removeFav(id) : addFav(props);
    setIsFav(!isFav)
  }
   


   return (
        
    <div className={styles.wrapperCard}>
            {
              isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
              ) : (
                  <button onClick={handleFavorite}>🤍</button>
              )
             } 
          
          {isHomeRoute && (
        <button
        className={styles.btn} 
        onClick={() => onClose(id)}>
          Delete
        </button>
      )}
          
      <img src={image} alt="character" />
      <div className={styles.wrapperText}>
      <Link strict to={`/detail/${id}`}>
           <h1 className={styles.name}>{name}</h1>  
        </Link>
        <div className={styles.details}>
          <h2>{status}</h2>
          <h2>{species}</h2>
          <h2>{gender}</h2>
          <h2>{origin}</h2>
        </div>
      </div>
    </div>
   );
}
const mapDispatchToProps = (dispatch) =>{
  return {
    addFav: (character) =>{
      dispatch(addFav(character));
    },
    removeFav: (id) =>{
      dispatch(removeFav(id));
    },
  }
}

const mapStateToProps = (state) =>{
  return {
    myFavorites: state.myFavorites,
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Card);