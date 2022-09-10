import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {BiSearch} from 'react-icons/bi'
import "./styles.css"

function Search(){
    const [search,setSearch] = useState("");
    const [error,setError] = useState();
    const navigate = useNavigate();

    async function handleSearch(e){
        e.preventDefault()
        try {
           if(!search){
            return;
           }
           navigate(`search?q=${search}`);
           setSearch("")
        } catch (error) {
            setError("Não existe personagens com esse nome");
        }
    }
    return(
        <div className="container-search">
            <h2>
            <Link to="/">Herói</Link>
            </h2>
            <form onSubmit={handleSearch}>
                <input 
                type="text" 
                placeholder="busque um herói"
                onChange={(e)=>setSearch(e.target.value)}
                value={search}
                >
                </input>
                <button type="submit">
                <BiSearch/>
                </button>    
            </form>
            <p>{error}</p>
        </div>
    )
}
export default Search;