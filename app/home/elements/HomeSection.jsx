/* [Corpus; React imports] */
import React from "react";
import "./tittleAnimation.css"

// KEY LIB.
import { UUID } from "uuidjs";

/* [Corpus; Fragments of page] */
import { AlertMessage } from "./fragments/AlertMessage";
import { Cards } from "./fragments/Cards";


/* [Corpus; Principal function] */
export function HomeSection() {
    return (
        <div className="container-fluid">
            <AlertMessage />
            <Cards/>
        </div>
    );
};

/* [Corpus; Glosarious Table] */
export function GlosariousTable({
    M0sVersion = "Last version of m0rniac OS",
    SoftwareTotal = "Total of software developed or helped by m0rniac",
    ForumsAnswerTotal = "Total of questions answered by m0rniac at any forums"
}) {
    return (
        <div className="container-fluid">
            {/* {subCorpus; Tittle} */}
            <h3 className="text-center">Tabla de actualizaciones y últimos proyectos:</h3><br />

            {/* {subCorpus; List of elements} */}
            <div className="container-fluid">
                <ul className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={UUID.generate()}>
                        <strong>m0rniac OS</strong>
                        <span className="badge bg-primary rounded-pill">{M0sVersion}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={UUID.generate()}>
                        <strong>Software</strong>
                        <span className="badge bg-primary rounded-pill">{SoftwareTotal}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={UUID.generate()}>
                        <strong>Resoluciones en foros</strong>
                        <span className="badge bg-primary rounded-pill">{ForumsAnswerTotal}</span>
                    </li>
                </ul>
            </div><br /><br />

            {/* {subCorpus; Tittle for the news} */}
            <div className="container-fluid"><br />
                <h4 className="text-left"><strong>Resúmen de proyectos:</strong></h4>
            </div><br />
        </div>
    );
}

/* [Corpus; News sections] */
export function CurrentNew({
    TittleNew = "Tittle of new",
    TextNew = "Text of new",
    DateNew = "dd/mm/yyyy",
    AutorNew = "m0rniac"
}) {
    return (
        <div className="container-fluid">
            <div className="list-group">
                <p className="text-muted">Publicación más reciente:</p>
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start active">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{TittleNew}</h5>
                        <small>{DateNew}</small>
                    </div>
                    <p className="mb-1">{TextNew}</p>
                    <small>Publicado por: {AutorNew}</small>
                </a>
                <br />
            </div>
        </div>
    );
}
export function LastNew({
    TittleNew = "Tittle of new",
    TextNew = "Text of new",
    DateNew = "dd/mm/yy",
    AutorNew = "m0rniac"
}) {
    return (
        <div className="container-fluid">
            <div className="list-group">
                <a href="#" className="list-group-item list-group-item-action flex-column align-items-start">
                    <div className="d-flex w-100 justify-content-between">
                        <h5 className="mb-1">{TittleNew}</h5>
                        <small className="text-muted">{DateNew}</small>
                    </div>
                    <p className="mb-1">{TextNew}</p>
                    <small className="text-mu
                    ted">Publicado por: {AutorNew}</small>
                </a>
            </div>
        </div>
    );
}