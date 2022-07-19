import React from 'react';
import './CampoTexto.css';

const CampoTexto = ({label, placeholder, obrigatorio, valor, aoAlterar}) => {

    const aoDigitar = (e) => {
        aoAlterar(e.target.value)
    }
    
    return (
        <div className="campo-texto">
            <label htmlFor="">{label}</label>
            <input 
                value={valor} 
                onChange={aoDigitar} 
                type="text" placeholder={placeholder} 
                required={obrigatorio} 
            />
        </div>
    )
}

export default CampoTexto;
