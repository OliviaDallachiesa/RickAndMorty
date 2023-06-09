import { Link } from "react-router-dom";
import style from "./Card.module.css";
import { ADD_FAV, REMOVE_FAV } from "../../redux/action-types";
import { connect } from "react-redux";
import { useState, useEffect } from "react";


function Card({id, name, status, species, gender, origin, image, onClose, ADD_FAV, REMOVE_FAV, myFavorites}) {

   const [isFav, setIsFav] = useState(false)

   const handleFavorite = () => {
      if(isFav){
         setIsFav(false);
         REMOVE_FAV(id);
      } else {
         setIsFav(true)
         ADD_FAV({id, name, species, gender, image, onClose})
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={style.container}>
          <button onClick={handleFavorite}>{isFav? '❤️' : '🤍' }</button>
         <button onClick={() => onClose(id)} className={style.closeButton}>X</button>
         
         <img src={image} alt='' />

         <Link to={`/detail/${id}`}>
           <h2 className={style.nombrePersonaje}>{name}</h2>
         </Link>
         
         <h2 className={style.otrosDatos}>Status: {status}</h2>
         <h2 className={style.otrosDatos}>Species: {species}</h2>
         <h2 className={style.otrosDatos}>Gender: {gender}</h2>
         <h2 className={style.otrosDatos}>Origin: {origin.name}</h2>
         
      </div>
   );
}
const mapStateToProps = (state) => {
   return {
      myFavotrites: state.myFavorites
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      ADD_FAV: () => { dispatch(ADD_FAV) },
      REMOVE_FAV: () => { dispatch(REMOVE_FAV) }
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card)