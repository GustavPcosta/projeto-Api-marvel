import Header from '../../Components/Header';
import Line from '../../assets/line-red.svg';
import './styles.css';
import { useEffect, useState } from 'react';
import api from '../../Services/api';
import MarvelDetail from '../../Components/DetailsPersona';
import Search from './Search';



function Main() {

const [marvel,setMarvel] = useState([]);
const[error,setError] = useState("");
async function  buscarPerso(){
  try {
    const response = await api.get("/characters");
    console.log(response.data.data.results);
    setMarvel(response.data.data.results);
  } catch (error) {
      setError("O site está temporariamente fora do ar")
  }
  
}
useEffect(()=>{
  buscarPerso()
},[])
  return (
    <>
    <Header/>
    <div className="Container-main">
   <main>
      <strong>CHARACTERS</strong>
      <div className='line-small'><img src={Line} alt='line'></img></div>
      <Search/>
      <div className='container-cards'>
        <div className='cards'>
          {marvel.length === 0 && <p>Carregando</p>}
          {marvel.length > 0 && marvel.map((marvel)=><MarvelDetail key={marvel.id}marvel={marvel}/>)}
        </div>
      </div>
    </main>
    <p>{error}</p>     
    </div>
    </>
  );
}

export default Main;
