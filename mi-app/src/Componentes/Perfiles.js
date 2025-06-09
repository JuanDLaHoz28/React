import React from 'react';
import Perfil from './Perfil';
import foto1 from '../img/reynoldsrya.jpg';
import foto2 from '../img/emily.jpg';
import foto3 from '../img/iñaki.jpg';


const Perfiles = () => {
    const perfilesData = [
        {
            id: 1,
            imagen: foto1,
            nombre: 'Ryan Castro',
            titulo: 'Experto en Marketing Digital',
            descripcion: 'Vitae suscipit tellus mauris a diam maecenas sed enim ut. Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin.',
            bgColor: 'bg-primary-subtle'
        },
        {
            id: 2,
            imagen: foto2,
            nombre: 'Emily Suarez',
            titulo: 'Diseñadora UX/UI',
            descripcion: 'Pharetra vel turpis nunc eget lorem. Quisque id diam vel quam elementum pulvinar etiam. Urna porttitor rhoncus dolor purus non enim praesent elementum.',
            bgColor: 'bg-warning-subtle'
        },
        {
            id: 3,
            imagen: foto3,
            nombre: 'Sebastian Caballero',
            titulo: 'Desarrollador Full-Stack',
            descripcion: 'Mauris augue neque gravida in fermentum. Praesent semper feugiat nibh sed pulvinar proin. Nibh nisl condimentum id venenatis a condimentum.',
            bgColor: 'bg-primary'
        }
    ];

    return (
        <div className="container text-center mt-5">
            <h2 className="fw-bold text-darkPurple mb-3">Somos un equipo de expertos comprometidos</h2>
            <p className="mb-5 text-muted">Te presentamos a nuestro equipo experto en marketing digital, diseño UX/UI y desarrollo web.</p>
            <div className="row justify-content-center">
                <div className="col-md-10">
                    {perfilesData.map(perfil => (
                        <Perfil
                            key={perfil.id}
                            imagen={perfil.imagen}
                            nombre={perfil.nombre}
                            titulo={perfil.titulo}
                            descripcion={perfil.descripcion}
                            bgColor={perfil.bgColor}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Perfiles;
