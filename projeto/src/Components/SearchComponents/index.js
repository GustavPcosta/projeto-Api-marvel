import "./styles.css";
import {useState,useEffect} from 'react';
import {useParams,useSearchParams} from 'react-router-dom'
import api from "../../Services/api";
import MarvelDetail from "../DetailsPersona";

function SearchComponents(){
    const [marvel,setMarvel] = useState([]);
    const [error,setError] = useState("");
    const [searchParams] =useSearchParams();
    const query = searchParams.get("q");
    async function getMarvel(){
        try {
            const response = await api.get(`/characters?nameStartsWith=${query}`);
            console.log(response.data.data.results)
            setMarvel(response.data.data.results);

        } catch (error) {
            setError("Não foi possível encontrar nenum personagem")
        }
    }
    useEffect(()=>{
        getMarvel()
    },[query])
    return(
        <div className='container-cards'>
        <div className='cards'>
          {marvel.length === 0 && <p>Carregando</p>}
          {marvel.length > 0 && marvel.map((marvel)=><MarvelDetail key={marvel.id}marvel={marvel}/>)}
        </div>
      </div>
    )
}

export default SearchComponents;