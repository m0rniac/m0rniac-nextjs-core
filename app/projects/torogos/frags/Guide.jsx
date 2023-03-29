import React from 'react';
import { UUID } from 'uuidjs';

export const Guide = () => {
    return (
        <div className="container-fluid">
            <br />
            <hr />
            <br />

            <p id="guide"></p>
            <h2 className="text-center">
                ¿Cómo se instala <strong>Torog OS</strong>?
            </h2>
            <p className="text-center">
                La distribución cuenta con <a href="https://github.com/gazelle-installer/gazelle-installer" target="_blank" rel="noopener noreferrer">Gazelle</a> como instalador minimalista por defecto.
            </p>

            <br />
            <div className="container-fluid">
                <h4><strong>Pasos de instalación:</strong></h4>
                <ul>
                    <li key={UUID.generate()}>
                        <p>Descargar la <a href="#top">última versión</a> de la distribución.</p>
                    </li>
                    <li key={UUID.generate()}>
                        Montar una <a href="https://www.google.com/search?q=USB" target="_blank" rel="noopener noreferrer">memoria USB</a> usando <a href="https://rufus.ie/" target="_blank" rel="noopener noreferrer">Rufus (en Windows)</a>, y <a href="https://www.balena.io/etcher" target="_blank" rel="noopener noreferrer">Balena Etcher (en Linux)</a>.
                    </li>
                    <li key={UUID.generate()}>
                        Reiniciar el dispositivo, en medio del proceso de encendido oprimir la <a href="https://www.disk-image.com/faq-bootmenu.htm" target="_blank" rel="noopener noreferrer">tecla de gestión de arranque</a>, seleccionar su memoria USB.
                    </li>
                    <li key={UUID.generate()}>
                        Se ejecutará la distribución en su <a href="https://en.wikipedia.org/wiki/Live_CD" target="_blank" rel="noopener noreferrer">versión LIVE</a>, para iniciar con su instalación debe oprimir la combinación de teclas <strong>($MOD + D)</strong> e introducir <strong>minstall-launcher</strong> y se ejecutará el GUI Installer.
                    </li>
                    <li key={UUID.generate()}>
                        Rellenar los campos solicitados y esperar a que la instalación finalice.
                    </li>
                </ul>
            </div>
        </div>
    );
};