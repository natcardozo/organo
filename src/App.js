import React, { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';

function App() {
  const times = [
    {
      id: 1,
      nome: "Selecione um time",
      corPrimaria: "#444444",
      corSecundaria: "#C2C2C2",
    },
    {
      id: 2,
      nome: "Programação",
      corPrimaria: "#57C278",
      corSecundaria: "#D9F7E9",
    },
    {
      id: 3,
      nome: "Front-end",
      corPrimaria: "#82CFFA",
      corSecundaria: "#E8F8FF",
    },
    {
      id: 4,
      nome: "Data Science",
      corPrimaria: "#A6D157",
      corSecundaria: "#F0F8E2",
    },
    {
      id: 5,
      nome: "DevOps",
      corPrimaria: "#E06B69",
      corSecundaria: "#FDE7E8",
    },
    {
      id: 6,
      nome: "UX e Design",
      corPrimaria: "#DB6EBF",
      corSecundaria: "#FAE9F5",
    },
    {
      id: 7,
      nome: "Mobile",
      corPrimaria: "#FFBA05",
      corSecundaria: "#FFF5D9",
    },
    {
      id: 8,
      nome: "Inovação e Gestão",
      corPrimaria: "#FF8A29",
      corSecundaria: "#FFEEDF",
    },
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }
  
  return (
    <>
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={aoNovoColaboradorAdicionado} />
      {times.map(time => (
        <Time 
          key={time.id} 
          nome={time.nome} 
          corPrimaria={time.corPrimaria} 
          corSecundaria={time.corSecundaria} 
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />
      ))}
    </>
  );
}

export default App;
