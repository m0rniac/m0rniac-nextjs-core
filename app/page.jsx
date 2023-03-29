import React from "react";

/* [Corpus; Elements] */
import {
    HomeSection,
    GlosariousTable,
    CurrentNew,
    LastNew
} from "./home/elements/HomeSection";
import "./home/bootstrap.min.css";

export default function HomePage() {
    return (
        <main>
            {/* [Corpus; Home] */}
            <HomeSection />

            {/* [Corpus; Information] */}
            <GlosariousTable
                M0sVersion="0.0.2 (Rolling Gag)"
                SoftwareTotal="0"
                ForumsAnswerTotal="0"
            />

            {/* [Corpus; Last new] */}
            <CurrentNew
                TittleNew="Actualización de m0rniac OS"
                TextNew="Lanzamiento de nueva versión de m0rniac OS: 0.0.2 (Rolling Gag). Accede a la sección 'Mis proyectos' para obtener más información."
                DateNew=""
            />
            {/* [Corpus; Past news] */}
            <div className="container-fluid">
                <p className="text-muted">Publicaciones pasadas:</p>
                <LastNew
                    TittleNew="Lanzamiento beta de m0rniac OS"
                    TextNew="Lanzamiento piloto del proyecto m0rniac Operative System, un sistema operativo óptimo basado en Linux. Más información en sección 'Mis Proyectos'"
                    DateNew="14-01-2023"
                />
                <br />
                <LastNew
                    TittleNew="Deploy web para repositiorios en línea"
                    TextNew="Acá :D"
                    DateNew="28-12-2022"
                />
            </div>
        </main>
    );
};