import React from "react";
import SearchBar from "../Searchbar/SearchBar";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
    return (
        <div>
            <SearchBar onSearch={onSearch}/>
            <button>
                <Link to = '/about'>ABOUT</Link>
            </button>
            
            <button>
            <Link to = '/home'>HOME</Link>
            </button>

            <button>
                <Link to = '/favorites'>FAVORITES</Link>
            </button>
 
        </div>
    )
}

export default Nav;