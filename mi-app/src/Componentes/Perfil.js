import React from 'react';

const Perfil = ({ imagen, nombre, titulo, descripcion, bgColor }) => {
    return (
        <div className={`card mb-3 p-4 shadow-sm ${bgColor}`} style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div className="row g-0 align-items-center">
                <div className="col-md-3 d-flex justify-content-center">
                    <img src={imagen} className="img-fluid rounded-circle" alt={nombre} style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
                </div>
                <div className="col-md-9">
                    <div className="card-body">
                        <p className="card-text text-muted">"" {descripcion}</p>
                        <h5 className="card-title fw-bold mt-3">{nombre}</h5>
                        <p className="card-text text-muted">{titulo}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Perfil; 