import React from 'react';
import Image from 'next/image';
import { UUID } from 'uuidjs';

export const VideoInput = () => {
    // container-fluid d-flex align-items-center justify-content-center
    return (
        <div className="embed-responsive embed-responsive-16by9 d-flex align-items-center justify-content-center">
            <iframe className="embed-responsive-item" src="/vids/Review_002Rg.mp4" allowFullScreen></iframe>
        </div>
    );
};

export const VideoInput2 = () => {
    // container-fluid d-flex align-items-center justify-content-center
    return (
        <div className="embed-responsive embed-responsive-16by9 d-flex align-items-center justify-content-center">
            <iframe className="embed-responsive-item" src="/vids/Review_003Rg.mp4" allowFullScreen></iframe>
        </div>
    );
};


export const Manual = ({ VideInput = "No-Input-Loaded", VideoInput2 = "No-Input-Loaded" }) => {
    // d-flex align-items-center justify-content-center
    return (
        <div>
            {/* [Corpus; Principal settings] */}
            <div className="container-fluid">
                <br />
                <p id="manual"></p>
                <hr />
                <br />

                <h3 className="text-center">Lista de comandos básicos:</h3>

                <div className="container-fluid d-flex align-items-center justify-content-center">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">
                                    <h5 className="text-center"><strong>Para sistema:</strong></h5>
                                    <ul>
                                        <li key={UUID.generate()}>
                                            <h5>Apagar de máquina:</h5>
                                            <ul>
                                                <li key={UUID.generate()}>
                                                    <p>
                                                        Presionar la tecla <strong>"SHUT DOWN"</strong> situada en la esquina inferior derecha.
                                                    </p>
                                                    <br />
                                                </li>
                                            </ul>
                                        </li>
                                        <li key={UUID.generate()}>
                                            <h5>Reiniciar máquina:</h5>
                                            <ul>
                                                <li key={UUID.generate()}>
                                                    <p>
                                                        Presionar la tecla <strong>"RE BOOT"</strong> situada en la esquina inferior derecha.
                                                    </p>
                                                    <br />
                                                </li>
                                            </ul>
                                        </li>
                                        <li key={UUID.generate()}>
                                            <h5>Aumentar/disminuir brillo en pantalla:</h5>
                                            <ul>
                                                <li key={UUID.generate()}>
                                                    <code>sudo brightnessctl (cantidad)</code>
                                                    <br /><br />
                                                    {
                                                        VideInput
                                                    }
                                                    <br />
                                                </li>
                                            </ul>
                                        </li>
                                        <li key={UUID.generate()}>
                                            <h5>Aumentar/disminuir volúmen:</h5>
                                            <ul>
                                                <li key={UUID.generate()}>
                                                    <p>
                                                        Presiona el botón en el scroll de tu ratón para silenciar o desilenciar el volúmen.
                                                    </p>
                                                </li>
                                                <li key={UUID.generate()}>
                                                    <p>
                                                        Desliza el scroll hacia arriba para aumentar el volúmen.
                                                    </p>
                                                </li>
                                                <li key={UUID.generate()}>
                                                    <p>
                                                        Desliza el scroll hacia abajo para disminuir el volúmen.
                                                    </p>
                                                </li>
                                                <br />
                                                {
                                                    VideoInput2
                                                }
                                            </ul>
                                        </li>
                                    </ul>
                                </th>

                                <th scope="col">
                                    <h5 className="text-center"><strong>Para administración:</strong></h5>
                                    <ul>
                                        <li key={UUID.generate()}>
                                            <h5>Establecimiento tecla $MOD:</h5>

                                            <Image src="/imgs/image01.png" width="323" height="238" alt="Loading..." />
                                            <br />

                                            <p className="text-muted">
                                                - Puedes profundizar sobre la función de la tecla $MOD <a href="https://i3wm.org/docs/userguide.html#_default_keybindings" target="_blank" rel="noopener noreferrer">haciendo click acá</a>, esta tecla te servirá para ejecutar funciones del sistema rápidamente.
                                            </p>
                                            <ul>
                                                <li key={UUID.generate()}>
                                                    <h5>Combinaciones de teclas escenciales:</h5>
                                                    <ul>
                                                        <li key={UUID.generate()}>
                                                            <p>
                                                                $MOD + [1 - 9] = Creación y/o esplazamiento de un espacio de trabajo.
                                                            </p>
                                                            <ul>
                                                                <li key={UUID.generate()}>
                                                                    <p className="text-muted">
                                                                        Un espacio de trabajo es una ventana aparte en la que podrás repartir la cantidad de programas ejecutados (esto evita la saturación visual para el usuario).
                                                                    </p>
                                                                </li>
                                                                <li key={UUID.generate()}>
                                                                    <p className="text-muted">
                                                                        Podrás crear 10 espacios de trabajo como máximo:
                                                                    </p>
                                                                    <ul>
                                                                        <li key={UUID.generate()}>
                                                                            <p className="text-muted">
                                                                                $MOD + 1 = Espacio 1.
                                                                            </p>
                                                                        </li>
                                                                        <li key={UUID.generate()}>
                                                                            <p className="text-muted">
                                                                                $MOD + 2 = Espacio 2.
                                                                            </p>
                                                                        </li>
                                                                        <li key={UUID.generate()}>
                                                                            <p className="text-muted">
                                                                                [...]
                                                                            </p>
                                                                        </li>
                                                                        <li key={UUID.generate()}>
                                                                            <p className="text-muted">
                                                                                $MOD + 0 = Espacio 10.
                                                                            </p>
                                                                        </li>
                                                                    </ul>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li key={UUID.generate()}>
                                                            <p>
                                                                $MOD + ENTER = Ejecutar terminal.
                                                            </p>
                                                        </li>
                                                        <li key={UUID.generate()}>
                                                            <p>
                                                                $MOD + Shift + Q = Cerrar cualquier aplicación.
                                                            </p>
                                                        </li>
                                                        <li key={UUID.generate()}>
                                                            <p>
                                                                $MOD + D = Menú de aplicaciones (Mientras escribes el nombre de la aplicación se irá autocompletando).
                                                            </p>
                                                        </li>
                                                    </ul>
                                                    <p className="text-muted">
                                                        <a href="https://i3wm.org/docs/userguide.html#_using_i3" target="_blank" rel="noopener noreferrer">Haz click aquí</a> para leer la lista completa de comandos.
                                                    </p>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <br />
            </div>
        </div>
    );
};
