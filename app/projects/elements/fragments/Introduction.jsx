import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { UUID } from 'uuidjs';

export const Introduction = ({ DownloadLink }) => {
    return (
        <div className="container-fluid">
            <br />
            {/* {subCorpus; Alert Message} */}
            <div className="alert alert-dismissible alert-secondary">
                <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                <strong>Oye!</strong> Puedes profundizar la información de cada proyecto haciendo click en él...
            </div>
            <br />

            <div className="d-flex align-items-center justify-content-center">
                <Link href="/projects/torogos"><Image src="/imgs/Logo_01.png" width={252} height={180} alt="loading..." /></Link>
            </div>

            <div className="container-fluid">
                {/* {subCorpus; Tittle} */}
                <br />
                <br />
                <h2 className="text-center"><strong>Torog OS</strong></h2>
                <p className="text-center"><Link href="/projects/torogos">Actual versión: <strong>0.0.1 (Rolling Gag)</strong></Link></p>

                {/* {subCorpus; Project Menu} */}
                <div className="container-fluid">
                    <ul className="nav nav-tabs" role="tablist">
                        {/* subCorpus; Questions */}
                        <li className="nav-item" role="presentation" key={UUID.generate()}>
                            <a className="nav-link active" data-bs-toggle="tab" href="#m0sDescription" aria-selected="true" role="tab">¿Qué es Torog OS?</a>
                        </li>
                        <li className="nav-item" role="presentation" key={UUID.generate()}>
                            <a className="nav-link" data-bs-toggle="tab" href="#m0sWhat" aria-selected="false" role="tab" tabIndex="-1">¿Para qué está hecho?</a>
                        </li>
                        <li className="nav-item" role="presentation" key={UUID.generate()}>
                            <a className="nav-link" data-bs-toggle="tab" href="#m0sPay" aria-selected="false" role="tab" tabIndex="-1">¿Es gratis?</a>
                        </li>
                    </ul>
                    {/* {subCorpus; Anwsers} */}
                    <div id="myTabContent" className="tab-content">
                        <div className="tab-pane fade active show" id="m0sDescription" role="tabpanel">
                            <br /><p className="text-center">Es un sistema operativo de origen <a href="https://es.wikipedia.org/wiki/El_Salvador" target="_blank" rel="noopener noreferrer">salvadoreño</a> basado en el proyecto <a href="https://www.debian.org/" target="_blank" rel="noreferrer">Debian</a>, diseñado y optimizado considerando el rendimiento para equipos de baja y media potencia; es eficiente para el demempeño de labores ofimáticas básicas y complejas a requerimiento del usuario. Dispone de una versión <a href="https://en.wikipedia.org/wiki/Live_CD" target="_blank" rel="noopener noreferrer">LIVE CD</a> por lo que puede ejecutarse desde una <a href="https://www.google.com/search?q=USB" target="_blank" rel="noopener noreferrer">Pendrive USB</a> sin una instalación previa.</p><p className="text-muted text-center">(Resúmen)</p>
                        </div>
                        <div className="tab-pane fade" id="m0sWhat" role="tabpanel">
                            <br /><p className="text-center">Originalmente fue idealizada como una distribución orientada a la ingeniería y/o desarrollo de software, pero basado en su bajo muy consumo de recursos a largo plazo: puede ser utilizada desde la reactivación de equipos viejos o sin potencia hasta el desarrollo o ingeniería con las tecnologías más modernas actualmente y a futuro.</p><p className="text-muted text-center">(Resúmen)</p>
                        </div>
                        <div className="tab-pane fade" id="m0sPay" role="tabpanel">
                            <br />
                            <hr /><p className="text-center">Siguiendo la filosofía debianita: <strong>"Cualquiera es libre de usarlo, modificarlo y distribuirlo".</strong></p><p className="text-muted text-center">(Resúmen)</p><hr />
                        </div>
                    </div>
                    <br />

                    {/* [Corpus; Choose] */}
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                {/* {subCorpus; Download Section} */}
                                <th scope="col">
                                    <a href={DownloadLink} target="_blank" rel="noopener noreferrer"><p className="text-center"><button type="button" className="btn btn-outline-light"><strong>Descargar Torog OS</strong></button></p></a>
                                </th>
                                {/* {subCorpus; Documentation Section} */}
                                <th scope="col">
                                    <Link href="/projects/torogos"><p className="text-center"><button type="button" className="btn btn-outline-warning"><strong>Leer documentación</strong></button></p></Link>
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <br />
                <br />
                <br />
                <br />
                <hr />
            </div >
        </div>
    );
};