import { Link } from "react-router-dom";
import "./styles.css"

function MarvelDetail({marvel}){
    
    return(
        <div className="container-persona">
            <div className="cards">
            <img src={`${marvel.thumbnail.path}.${marvel.thumbnail.extension}`} alt={`foto do ${marvel.name}`}></img>
            <strong>{marvel.name}</strong>
            </div>
            
        </div>  
    
    )
}
export default MarvelDetail;