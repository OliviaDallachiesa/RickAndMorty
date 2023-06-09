import style from "./Searchbar.module.css";
import { useState } from "react";



export default function SearchBar({onSearch}) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
   setId(event.target.value);

  }

   return (
      <div>
         <input className={style.searchBar} type='search' 
         placeholder="Type a number..." onChange={handleChange}
         value={id}/> 
         <button className={style.botonSearch} 
         onClick={ () => {onSearch(id)} }>Agregar</button>
      </div>
   );
}
