import React, { useState } from 'react';
import '../style/styles2.css';
function Metas2({ meta, onDelete, onEdit }) {
    const [completando, setCompletando] = useState(false);
    const [nuevoTexto, setNuevoTexto] = useState(meta.texto);

    const handleGuardar = () => {
        onEdit(meta.id, nuevoTexto);
        setCompletando(false);
    };

    return (
        <div>
            {completando ? (
                <div className='completar-meta'>
                    <p className='p1'
                        value={nuevoTexto}
                        onChange={(i) => setCompletando(i.target.value)}
                    />
                    <button onClick={handleGuardar}>Guardar</button>
                </div>
            ) : (
                <div className='contenedor-meta'>
                    <p className='meta'>{meta.texto}
                    <button className='boton-el' onClick={() => onDelete(meta.id)}><img src='./icons/borrar.png'/></button>
                    <button className='boton-co' onClick={() => setCompletando(true)}>Completar</button>
                    </p>
                </div>
            )}
        </div>
    );
}

export default Metas2;