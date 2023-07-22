import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/login';
import Inicio from './components/inicio';
import Personaje from './components/personaje';
import './index.css';
import ProtectedRoutes from './components/protected/ProtectedRoutes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<Login />} />

          <Route element={<ProtectedRoutes />} >
            
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/personaje/:id' element={<Personaje />} />
          </Route>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;