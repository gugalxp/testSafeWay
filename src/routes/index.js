import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Carrinho from '../pages/Carrinho';
import ResumoCompra from '../pages/ResumoCompra';

function RoutesApp() {
    return(
        <Routes>
            <Route path="/produtos" element={ <Home/> } />
            <Route path="/carrinho" element={ <Carrinho/> }/>
            <Route path="/resumoCompra" element={ <ResumoCompra/> }/>

        </Routes>
    )
}

export default RoutesApp;