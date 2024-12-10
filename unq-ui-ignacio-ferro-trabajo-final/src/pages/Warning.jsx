import React from "react";
import { useNavigate } from "react-router-dom";

const Warning = () => {

    const navigate = useNavigate();

    return (
        <div>
            <h2 className="warning-text">
                El siguiente Memo Test de fútbol contiene 32 pares de cartas, 
                combinando tanto equipos de la Liga Profesional de Fútbol,
                como de la Primera Nacional.
            </h2>
            <h3>
                ¿Estás listo para aceptar este desafío?
            </h3>
            <button className="button-si" onClick={() => navigate("/hardGame")}>Si</button>
            <button className="button-volver" onClick={() => navigate("/")}>Volver</button>
        </div>
    )
}

export default Warning;