import React from "react";
import "./Cartao.css";

const Cartao = ({ nome, cargo, usuarioGithub, time, corPrimaria }) => {
    
    const img = usuarioGithub !== '' ? `https://github.com/${usuarioGithub}.png` : "https://eitrawmaterials.eu/wp-content/uploads/2016/09/person-icon.png"

    return (
        <div className="colaborador">
            <div style={{ backgroundColor: corPrimaria }} className="cabecalho">
                <img src={img} alt={nome} />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Cartao;
