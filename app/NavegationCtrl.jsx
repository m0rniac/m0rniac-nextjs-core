/* [Corpus; React imports] */
import React from "react";
import Link from "next/link";
import { UUID } from "uuidjs";

/* [Corpus; Principal function] */
function IAmNavBar() {
    return (
        <header>
            <div className='container-fluid'>
                {/* {subCorpus; Sub-Logotype} */}
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand"><strong>[ ➜ ]</strong></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        {/* {subCorpus; List of sections (NavBar)} */}
                        <div className="collapse navbar-collapse" id="navbarColor02">
                            <ul className="navbar-nav me-auto">
                                <li className="nav-item" key={UUID.generate()}>
                                    <Link className="nav-link active" href="/">Inicio</Link>
                                </li>
                                <li className="nav-item" key={UUID.generate()}>
                                    <Link className="nav-link" href="/contact">Contacto</Link>
                                </li>
                                <li className="nav-item" key={UUID.generate()}>
                                    <Link className="nav-link" href="/projects">Mis Proyectos</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
};

/* [Corpus; Default exportation] */
export default IAmNavBar;