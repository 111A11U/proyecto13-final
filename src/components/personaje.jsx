import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { unicoPersonaje } from '../funciones/funciones'
import "../stylesheets/personaje.css"
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "@react-icons/all-files/io/IoMdArrowRoundBack";

const Personaje = () => {
  const [personaje, setPersonaje] = useState(null)

const navigate = useNavigate()

const params = useParams()
useEffect(()=>{
  unicoPersonaje(params.id, setPersonaje)
},[])
  return (
    <div className='contenedor-personaje'>
    <div className='nombre-personaje'><h1>{personaje?.name}</h1>
    </div>
    <div className='contenedor-imagen-personaje'><img src={personaje?.image} alt=""/>
    </div>
    <div className='contenedor-info-personaje'>
    <p>Status: {personaje?.status}</p>
    <p>Gender: {personaje?.gender}</p>
    <p>Origin: {personaje?.origin.name}</p>
    <p>Location: {personaje?.location.name}</p>
    </div>
    <div>
    <button className="boton-atras-inicio" onClick={() => navigate("/Inicio")}> <IoMdArrowRoundBack/> Atrás </button>
    </div>
    </div>

  )
}

export default Personaje
