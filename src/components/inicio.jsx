import { useEffect, useState } from "react";
import { todosPersonajes } from "../funciones/funciones";
import { useNavigate } from "react-router-dom";
import "../stylesheets/inicio.css";
import { IoMdArrowRoundBack } from "@react-icons/all-files/io/IoMdArrowRoundBack";
import { IoMdArrowRoundForward } from "@react-icons/all-files/io/IoMdArrowRoundForward";

const Inicio = () => {
  const [personajes, setPersonajes] = useState(null);
  const [pagina, setPagina] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    todosPersonajes(setPersonajes, pagina);
  }, [pagina]);

  // Cerrar sesión
  const cerrarSesion = () => {
    // Lógica para cerrar sesión aquí
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <nav className="navbar">;
        <button className="buttonMenu" onClick={cerrarSesion}>
        <IoMdArrowRoundBack />
          Cerrar Sesión
        </button>
      </nav>
      <div className="column-container">
        {personajes != null
          ? personajes.map((personaje) => (
              <div className="column" key={personaje.id}>
                <a href={`/personaje/${personaje.id}`}>
                  <article>
                  <img className="imagen-1" src=
                  {personaje.image} alt="" />
                  <img className="imagen-2"
            src={require(`../images/rym-imagen-2.png`)}
            alt={"" + personaje.name}
          />
          </article>
                <span>{personaje.name}</span>
                </a>
              </div>
            ))
          : "no hay personajes"}
      </div>

      <div className="contenedor-botones-pagina">
        <button
          className="botonesPaginas"
          onClick={() => setPagina(pagina - 1)}
        >
          <IoMdArrowRoundBack />
          Anterior
        </button>
        <button
          className="botonesPaginas"
          onClick={() => setPagina(pagina + 1)}
        >
          Siguiente
          <IoMdArrowRoundForward />
        </button>
      </div>
    </div>
  );
};

export default Inicio;
