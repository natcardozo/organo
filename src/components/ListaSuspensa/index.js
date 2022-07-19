import React from 'react';
import './ListaSuspensa.css'

const ListaSuspensa = ({ label, itens, obrigatorio, valor, aoAlterar }) => {
    return (
        <div className='lista-suspensa'>
            <label htmlFor="">{label}</label>
            <select 
                required={obrigatorio} 
                value={valor} 
                onChange={e => aoAlterar(e.target.value)} 
            >
                {itens.map((item) => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;
