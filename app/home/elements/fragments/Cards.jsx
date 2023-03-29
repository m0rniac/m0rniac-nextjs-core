import React from 'react';

export const Cards = () => {
    return (
        <div className="container-fluid">
            {/* [Corpus; TITTLE] */}
            <div className="container-fluid"><br />
                <h1 className="text-center">m0rniac</h1>
                <br />
                <br />
            </div>

            {/* {subCorpus; Cards} */}
            <div className="container text-center">
                <div className="row align-items-end">
                    <div className="col">
                        <div className="card border-primary mb-3">
                            <div className="card-header">1/3</div>
                            <div className="card-body">
                                <h4 className="card-title"><strong>Código abierto:</strong></h4>
                                <p className="card-text">Gran parte de mis proyectos cuentan con su respectivo repositorio en línea.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-secondary mb-3">
                            <div className="card-header">2/3</div>
                            <div className="card-body">
                                <h4 className="card-title"><strong>Documentación explícita:</strong></h4>
                                <p className="card-text">Ya sea aquí o en el repositorio mismo, cada proyecto está descrito en su totalidad.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-success mb-3">
                            <div className="card-header">3/3</div>
                            <div className="card-body">
                                <h4 className="card-title"><strong>Sobre la autoría:</strong></h4>
                                <p className="card-text">Debemos fomentar el respeto a la propiedad intelectual de las ideas.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />

            {/* {subCorpus; Phrase} */}
            <div className="container-fluid">
                <figure className="text-center">
                    <blockquote className="blockquote">
                        <p className="mb-0"><strong>« La creatividad simplemente consiste en conectar las cosas »</strong></p>

                    </blockquote>
                    <figcaption className="blockquote-footer">
                        Autor: <cite title="Source Title">Steve Jobs</cite>
                    </figcaption>
                </figure>
            </div>
            <br />
            <hr />
            <br />
            <br />
            <br />
        </div>
    );
};