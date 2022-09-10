import {Route,Routes} from 'react-router-dom';
import SearchComponents from './Components/SearchComponents';
import Main from './Pages/Main';
import Personagem from './Pages/Main/Detalhes';

function MainRouts(){
    return(
        <Routes>
            <Route path='/' element={<Main/>}></Route>
            <Route path='/detail/:id' element={<Personagem/>}></Route>
            <Route path='/search' element={<SearchComponents/>}></Route>
        </Routes>
    )
}

export default MainRouts