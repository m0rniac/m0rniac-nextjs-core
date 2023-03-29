/* [Corpus; React imports] */
import React from "react";
import "./Settings2.css";


/* [Corpus; Principal function] */
export function ContactSection() {
    return (
        <div className="container-fluid"><br />
            <br />
            {/* {subCorpus; Tittle} */}
            <div className="container-fluid">
                <h3 className="text-center"><strong>Apartado de contacto</strong></h3>
                <p className="text-center"><strong>Puedes contactarme a través de:</strong></p>
            </div>

            {/* {subCorpus; Social Media Links} */}
            <div className="container-fluid text-center">
                <a href="https://www.facebook.com/christ.castr" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-info"><strong>Facebook</strong></button></a>
                <a href="https://t.me/christcastr" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-light"><strong>Telegram</strong></button></a>
                <a href="https://api.whatsapp.com/send/?phone=%2B50360320546&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-success"><strong>WhatsApp</strong></button></a>
                <a href="https://www.instagram.com/christ.castr_/" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-secondary"><strong>Instagram</strong></button></a>
                <a href="https://www.github.com/m0rniac" target="_blank" rel="noopener noreferrer"><button type="button" className="btn btn-dark"><strong>GitHub</strong></button></a>
            </div>
            <br />
            <br />
            <br />

            {/* {subCorpus; Label} */}
            <div className="container-fluid card text-white bg-dark mb-3 text-center">
                <div className="card-header text-center">Acerca de:</div>
                <div className="card-body text-center">
                    <h4 className="card-title text-center"><strong>Modelaje y/o promoción</strong></h4>
                    <p className="card-text text-center">Puedes adquirir más información al respecto a través de mi Direct Manager: <a href="https://www.instagram.com/_magnifu/" target="_blank" rel="noopener noreferrer">@_magnifu</a></p>
                </div>
            </div>
        </div>
    );
};