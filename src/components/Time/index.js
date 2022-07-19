import React from "react";
import Cartao from "../Cartao";
import "./Time.css";

const Time = ({ nome, corPrimaria, corSecundaria, colaboradores }) => {
    return (
        <>
            {colaboradores.length > 0 ? 
                <section style={{ backgroundColor: corSecundaria }} className="time">
                    <h3 style={{ borderBottomColor: corPrimaria}}>{nome}</h3>
                    <div className="colaboradores">
                        {colaboradores.map(colaborador => (
                            <Cartao 
                                key={colaborador.nome}
                                nome={colaborador.nome}
                                cargo={colaborador.cargo}
                                usuarioGithub={colaborador.usuarioGithub}
                                time={colaborador.time}
                                corPrimaria={corPrimaria} 
                            />
                        ))}
                    </div>
                </section> : ""
            }
        </>
    )
}

export default Time;
