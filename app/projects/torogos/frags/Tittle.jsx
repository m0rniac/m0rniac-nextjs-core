import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { UUID } from 'uuidjs';

export const Tittle = ({ DownloadLink = "No-Link-Entry", ForumLink = "No-Link-Entry" }) => {
    return (
        <div className="container-fluid">
            {/* [Corpus; Alert Message] */}
            <div className="container-fluid">
                <div className="alert alert-dismissible alert-info">
                    <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                    <strong>¡Bienvenido o bienvenida!</strong> a la documentación oficial de Torog OS, más abajo encontrarás un pequeño índice de navegación que te ayudará a guiarte.
                </div>
            </div>

            {/* [Corpus; Logotype] */}
            <div className="d-flex align-items-center justify-content-center">
                <Image src="/imgs/Logo_01.png" width={252} height={180} alt="loading..." />
            </div>


            {/* [Corpus; Tittle] */}
            <p className="text-center">
                Libre de <a href="https://en.wikipedia.org/wiki/Software_bloat#Bloatware" target="_blank" rel="noopener noreferrer">bloatware</a>
            </p>
            <div className="container-fluid">
                <br />
                <h2 className="text-center"><strong>Torog OS</strong></h2>
                <h6 className="text-center">0.0.1 (Rolling Gag)</h6>
                <br />

                <div className="container-fluid">
                    <ul className="nav nav-tabs" role="tablist">
                        {/* subCorpus; Questions */}
                        <li className="nav-item" role="presentation" key={UUID.generate()}>
                            <a className="nav-link active" data-bs-toggle="tab" href="#torogosDescription" aria-selected="true" role="tab">¿Qué es Torog OS?</a>
                        </li>
                        <li className="nav-item" role="presentation" key={UUID.generate()}>
                            <a className="nav-link" data-bs-toggle="tab" href="#torogosWhat" aria-selected="false" role="tab" tabIndex="-1">¿Para qué está hecho?</a>
                        </li>
                        <li className="nav-item" role="presentation" key={UUID.generate()}>
                            <a className="nav-link" data-bs-toggle="tab" href="#torogosPay" aria-selected="false" role="tab" tabIndex="-1">¿Es gratis?</a>
                        </li>
                    </ul>
                    {/* {subCorpus; Anwsers} */}
                    <div id="myTabContent" className="tab-content">
                        <div className="tab-pane fade active show" id="torogosDescription" role="tabpanel">
                            <br />
                            <p className="text-center">
                                Torog <strong>Operative System</strong>, es un sistema operativo de origen <a href="https://es.wikipedia.org/wiki/El_Salvador" target="_blank" rel="noopener noreferrer">salvadoreño</a> basado en el proyecto <a href="https://www.debian.org/" target="_blank" rel="noreferrer">Debian</a>, configurado y diseñado para obtener el mejor rendimiento en equipos de baja y mediana potencia; eficiente para el demempeño de labores ofimáticas básicas/complejas a requerimiento del usuario, dispone de una versión <a href="https://en.wikipedia.org/wiki/Live_CD" target="_blank" rel="noopener noreferrer">LIVE CD</a> por lo que puede ejecutarse desde una <a href="https://www.google.com/search?q=USB" target="_blank" rel="noopener noreferrer">Pendrive USB</a> sin una instalación previa en el disco duro.
                            </p>
                        </div>
                        <div className="tab-pane fade" id="torogosWhat" role="tabpanel">
                            <br />
                            <p className="text-center">
                                Originalmente idealizada como una distribución orientada al mantenimiento y reparación de equipos extremadamente viejos, posteriormente a la ingeniería y desarrollo de software; actualmente es un entorno privado con un muy bajo muy consumo de recursos a largo plazo y completamente libre de software innecesario , por lo que es un entorno moldeable para cualquier usuario.
                            </p>
                        </div>
                        <div className="tab-pane fade" id="torogosPay" role="tabpanel">
                            <br />
                            <p className="text-center">
                                <strong>"Cualquiera es libre de usarlo, modificarlo y distribuirlo"</strong>, pero recuerda, este proyecto está sujeto a una MIT License, la cual puedes contemplar <a href="https://drive.google.com/file/d/1-7HKUUPO_s_ozQE6ecAfNKwXuc1sjtzZ/view?usp=share_link" target="_blank" rel="noopener noreferrer">haciéndo click aquí</a>.
                            </p>
                        </div>
                    </div>
                    <br />
                </div>



                {/* [Corpus; INIT buttons]. */}
                <div className="container-fluid">
                    <p className="text-center"><a href={DownloadLink} target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-outline-light"><strong>Descargar última versión</strong></button></a></p>
                </div>
                {/* {B; Community link} */}
                <div className="container-fluid">
                    <a href={ForumLink} target="_blank" rel="noopener noreferrer"><p className="text-center"><button type="button" className="btn btn-dark">Comunidad</button></p></a>
                </div>
                <br />


                {/* [Corpus; MiniNavBar] */}
                <div className="container-fluid">
                    <p className="text-warning text-center"><strong><b>Secciones de documentación:</b></strong></p>
                    <p className="text-center"><a href="#questions">Preguntas comúnes</a></p>
                    <p className="text-center"><a href="#manual">Manual básico</a></p>
                    <p className="text-center"><a href="#guide">¿Cómo instalar Torog OS?</a></p>
                    <p className="text-center"><a href="#showDemo">Demostración de sistema</a></p>

                </div>

                <br /><br /><br />
                <hr />
            </div>
        </div>
    );
};
