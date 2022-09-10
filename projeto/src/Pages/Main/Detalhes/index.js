import './styles.css';
import HeaderTwo from '../../../Components/HeaderTwo';
import Line from '../../../assets/line-red.svg'
import './styles.css';
import api from '../../../Services/api';
import {useParams} from 'react-router-dom';
import {useState,useEffect} from 'react';
import MarvelDetail from '../../../Components/DetailsPersona';
function Personagem(){
const [marvel,setMarvel] = useState(null);
const{id} = useParams()
    async function personagemDetails(){
        try {
            const response = await api.get("/characters");
            setMarvel(response.data.data.results)
            console.log(response.data.data.results)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        personagemDetails()
    },[])
    return(
        <>
        <HeaderTwo/>
        <div className='container-detail'>
        <div className='line-small small'><img src={Line} alt='line'></img></div>
        <strong>About</strong>
        <div className='container-detail-two'>
        {marvel > 0 && marvel.map((marvel)=><MarvelDetail key={marvel.id}marvel={marvel}/>)}
        </div>
        </div>
        </>
    )
}
export default Personagem;