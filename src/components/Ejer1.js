import React, { useState } from 'react';
import Ejer1 from './Ejer1';
import '../style/styles.css';

function Metas() {
    const [metas, setMetas] = useState([]);
    const [nuevaMeta, setNuevaMeta] = useState('');

    const agregarMeta = () => {
        if (nuevaMeta.trim() === '') return;
        setMetas([...metas, { id: Date.now(), texto: nuevaMeta }]);
        setNuevaMeta('');
    };

    const eliminarMeta = (id) => {
        setMetas((prevMetas) => prevMetas.filter((nota) => nota.id !== id));
    };

    const completarMeta = (id, nuevoTexto) => {
        setMetas((prevMetas) =>
        prevMetas.map((meta) => (meta.id === id ? { ...meta, texto: nuevoTexto } : meta))
        );
    };
    return (
        <div className='caja1'>
            <div className='contenedor-metas1'>
                <input
                    className="input"
                    type="text"
                    value={nuevaMeta}
                    onChange={(e) => setNuevaMeta(e.target.value)}
                    placeholder='Nueva Meta...'
                />
                    <button className='boton' onClick={agregarMeta}>Agregar Meta</button>
                    <div className='contenedor-estado'>
                        <p className='completas'>Completas: </p>
                        <p className='pendientes'>Pendientes: </p>
                        <div className='contenedor-lista'>
                            {metas.map((meta) => (
                                <Metas
                                    key={meta.id}
                                    meta={meta}
                                    onDelete={eliminarMeta}
                                    onEdit={completarMeta}
                                />
                            ))}
                        </div>
                    </div>
                
            </div>
        </div>
    );
}

export default Metas;