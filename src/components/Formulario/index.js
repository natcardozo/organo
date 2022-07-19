import React, { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import "./Formulario.css"

const Formulario = ({ aoColaboradorCadastrado, times }) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [usuarioGithub, setUsuarioGithub] = useState('');
    const [time, setTime] = useState('Selecione um time');

    const aoSalvar = (e) => {
        e.preventDefault()
        if(time !== "Selecione um time") {
            aoColaboradorCadastrado({nome, cargo, usuarioGithub, time})
            setNome('')
            setCargo('')
            setUsuarioGithub('')
            setTime('Selecione um time')
        }
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    placeholder="Informe o nome" 
                    label="Nome" 
                    valor={nome}
                    aoAlterar={valor => setNome(valor)}
                    obrigatorio={true} 
                />
                <CampoTexto 
                    placeholder="Informe o cargo" 
                    label="Cargo" 
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)}
                    obrigatorio={true} 
                />
                <CampoTexto 
                    placeholder="Informe o usuário do github" 
                    label="Usuário do Github" 
                    valor={usuarioGithub}
                    aoAlterar={valor => setUsuarioGithub(valor)}
                    // obrigatorio={true} 
                />
                <ListaSuspensa 
                    label="Time" 
                    itens={times} 
                    valor={time}
                    setValor={setTime}
                    aoAlterar={valor => setTime(valor)}
                    obrigatorio={true} 
                />
                <Botao>Criar card</Botao>
            </form>
        </section>
    )
}

export default Formulario;
