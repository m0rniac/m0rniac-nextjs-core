import React from 'react';
import { UUID } from 'uuidjs';

export const Cards = () => {
    return (
        <div className="container-fluid">
            {/* [Corpus; Tables 1] */}
            <p id="questions"></p>
            <br />

            <div className="container-fluid d-flex align-items-center justify-content-center">
                <div className="row align-items-end">
                    <div className="col">
                        <div className="card border-danger mb-3">
                            <div className="card-header">1/6</div>
                            <div className="card-body">
                                <h4 className="card-title text-center"><strong>¿Por qué es tan óptimo?</strong></h4>
                                <p className="card-text text-center">
                                    Opera con un <strong>Kernel ZEN</strong>, esto le permite mejorar la capacidad de respuesta a costa del rendimiento y el uso de energia, es decir:
                                </p>
                                <div className="d-flex align-items-center justify-content-center">
                                    <ul>
                                        <li key={UUID.generate()}>
                                            <p><strong>Control de congestión TCP: </strong>Maximizador de rendimiento que busca tener una velocidad igual o superior al <a href="https://en.wikipedia.org/wiki/CUBIC_TCP" target="_blank" rel="noopener noreferrer">cubic.</a></p>
                                        </li>
                                        <li key={UUID.generate()}>
                                            <p><strong>Reemplazo directo del núcleo de distribución: </strong>Configuración adecuada que admite la selección más amplia de hardware, opciones de paravirtualización y reducción de sobrecarga bajo virtualización.</p>
                                        </li>
                                        <li key={UUID.generate()}>
                                            <p><strong>B.F.Q: </strong><a href="https://www.kernel.org/doc/html/latest/block/bfq-iosched.html" target="_blank" rel="noopener noreferrer">Budget Fair Queue</a>, programador de disco para uso Desktop de alto rendimiento y baja latencia.</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-success mb-3">
                            <div className="card-header">2/6</div>
                            <div className="card-body">
                                <h4 className="card-title text-center"><strong>¿Por qué es seguro?</strong></h4>
                                <p className="card-text text-center">Al ser una distribución basada en Debian hereda gran parte de sus atributo, solo por destacar algunos:</p>
                                <div className="d-flex align-items-center justify-content-center">
                                    <ul>
                                        <li key={UUID.generate()}>
                                            <p><strong>Coordinación de múltiples avisos de seguridad con otros agentes de Software Libre.</strong></p>
                                        </li>
                                        <li key={UUID.generate()}>
                                            <p><strong>Actualización recurrente de paquetes con nuevos parches de seguridad.</strong></p>
                                        </li>
                                        <li key={UUID.generate()}>
                                            <p><strong>Establecimiento de <a href="https://wiki.debian.org/Debate/initsystem/sysvinit" target="_blank" rel="noopener noreferrer">SYSVINIT</a> como único gestor de arranque tras grub (esto acelera el arranque).</strong></p>
                                        </li>
                                        <li key={UUID.generate()}>
                                            <p><strong>Establecimiento de <a href="https://en.wikipedia.org/wiki/Systemd" target="_blank" rel="noopener noreferrer">SYSTEMD</a> como único gestor de procesos, tareas y multitareas dentro del sistema incluyendo la dependencia de los paquetes instalados o a instalar.</strong></p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-warning mb-3">
                            <div className="card-header">3/6</div>
                            <div className="card-body">
                                <h4 className="card-title text-center"><strong>¿Qué tan compatible es?</strong></h4>
                                <ul>
                                    <li key={UUID.generate()}>
                                        <p><strong>Actualmente es compatible con el hardware competente del mercado, a excepción de muy reducidos fabricantes/casos.</strong></p>
                                    </li>
                                </ul>
                                <p className="card-text text-center">El desempeño del hardware para el <strong>Kernel ZEN</strong> es continuo. Como <strong>sugerencia</strong> es poco recomendable utilizar componentes o respuestos extremadamente viejos puesto que su desempeño puede no ser competente a las exigencias de los programas utilizables por el usuario...</p><p className="text-muted text-center">(más no para el sistema).</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* [Corpus; Tables 1] */}
            <br />
            <div className="container-fluid d-flex align-items-center justify-content-center">
                <div className="row align-items-end">
                    <div className="col">
                        <div className="card border-light mb-3">
                            <div className="card-header">4/6</div>
                            <div className="card-body">
                                <h4 className="card-title text-center"><strong>¿Es confortable?</strong></h4>
                                <ul>
                                    <li key={UUID.generate()}>
                                        <p className="card-text">
                                            Utiliza una interfaz de usuario minimalista, amena e intuitiva con el usuario, <a href="https://i3wm.org/" target="_blank" rel="noopener noreferrer">i3-wm</a> <strong className="text-muted">(en futuras versiones se agregarán nuevas GUI).</strong>
                                        </p>
                                    </li>
                                    <li key={UUID.generate()}>
                                        <p className="card-text">
                                            No posee programas innecesarios instalados por defecto, cuenta únicamente con los paquetes requeridos para el correcto funcionamiento del sistema (reduciendo su peso).
                                        </p>
                                    </li>
                                </ul>
                                <p className="card-text text-center">En conclusión:<strong> muy confortable.</strong></p>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-secondary mb-3">
                            <div className="card-header">5/6</div>
                            <div className="card-body">
                                <h4 className="card-title text-center"><strong>¿Es una distribución atendida?</strong></h4>
                                <ul>
                                    <li key={UUID.generate()}>
                                        <p className="card-text">
                                            <strong>Afirmativo</strong>, paulatinamente se estarían lanzando nuevas actualizaciones para el sistema (siempre manteniendo la base inicial).
                                        </p>
                                    </li>
                                    <li key={UUID.generate()}>
                                        <p className="card-text">
                                            Tú mismo podrías hacer un aporte <a href="http://github.com/m0rniac/torogos" target="_blank" rel="noopener noreferrer">de código</a>, o un aporte <a href="https://www.paypal.com/paypalme/christcastr" target="_blank" rel="noopener noreferrer">monetario</a>.
                                        </p>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card border-primary mb-3">
                            <div className="card-header">6/6</div>
                            <div className="card-body">
                                <h4 className="card-title text-center"><strong>¿Por qué es ideal?</strong></h4>
                                <p className="card-text text-center">Al ser una distribución limpia de paquetes innecesarios (bloatware), es moldeable al antojo de cada usuario, estas podrían ser algunas ideas:</p>
                                <div className="d-flex align-items-center justify-content-center">
                                    <ul>
                                        <li key={UUID.generate()}><p><strong>Instalación y uso de paquetes ofimáticos.</strong></p></li>
                                        <li key={UUID.generate()}><p><strong>Desarrollo o ingeniería de software.</strong></p></li>
                                        <li key={UUID.generate()}><p><strong>Sistema operativo personal (seguro y privado).</strong></p></li>
                                    </ul>
                                </div>
                                <p className="text-center">Entre muchas otras funciones.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
