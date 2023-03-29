import React from 'react';
import { UUID } from 'uuidjs';

export const CardVideoReview = ({ VideoInsert = "Nothing-To-Show" }) => {
    return (
        <div className="container-fluid d-flex align-items-center justify-content-center">
            <p id="showDemo"></p>
            <div className="card mb-3">
                <br />
                <br />
                <hr />
                <h3 className="card-header text-center"><strong>Demostración de sistema operativo:</strong></h3>
                <div className="card-body">
                    <h5 className="card-title">Resúmen:</h5>
                    <ul>
                        <li key={UUID.generate()}>
                            <h6 className="card-subtitle text-muted">
                                Creación de entorno de virtualización para Python.
                            </h6>
                        </li>
                        <li key={UUID.generate()}>
                            <h6 className="card-subtitle text-muted">
                                Ejecución de videojuego interpretado (sin compilar).
                            </h6>
                        </li>
                        <li key={UUID.generate()}>
                            <h6 className="card-subtitle text-muted">
                                Ejecución de navegador de alto rendimiento (con 5 AdBlockers corriendo en segundo plano).
                            </h6>
                        </li>
                        <li key={UUID.generate()}>
                            <h6 className="card-subtitle text-muted">
                                Ejecución de algunas herramientas del sistema.
                            </h6>
                        </li>
                    </ul>
                </div>
                {
                    VideoInsert
                }
                <div className="card-body">
                    <p className="card-text">
                        Demostración grabada desde una máquina con:
                    </p>
                </div>
                <ul className="list-group list-group-flush">
                    <li key={UUID.generate()} className="list-group-item">Procesador Intel Celeron (2 núcleos)</li>
                    <li key={UUID.generate()} className="list-group-item">2GB de memoria RAM</li>
                    <li key={UUID.generate()} className="list-group-item">Disipador convencional</li>
                    <li key={UUID.generate()} className="list-group-item">Disco duro HDD</li>
                    <li key={UUID.generate()} className="list-group-item">(Sin tarjeta gráfica)</li>
                </ul>
                <div className="card-footer">
                    <p className="text-muted text-center">Un rendimiento bastante óptimo para una máquina de baja potencia.</p>
                </div>
            </div>
        </div>
    );
};

export const VideoReview = () => {
    // container-fluid d-flex align-items-center justify-content-center
    return (
        <div className="embed-responsive embed-responsive-16by9 d-flex align-items-center justify-content-center">
            <iframe className="embed-responsive-item" src="/vids/Review_001Rg.mp4" allowFullScreen></iframe>
        </div>
    );
};
