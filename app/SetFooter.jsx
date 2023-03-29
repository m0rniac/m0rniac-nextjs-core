/* [Corpus; React imports] */
import React from "react";
import { UUID } from "uuidjs";

/* [Corpus; Principal functiom] */
export function FooterSection() {
    return (
        <div className="container-fluid">
            <div className="container-fluid">
                <footer>
                    <br />
                    <br />
                    <br />
                    
                    <hr />
                    <br />
                    <div className="container-fluid">
                        <div className="container-fluid">
                            <ul className="list-unstyled">
                                <li className="float-end" key={UUID.generate()}><a href="#top">Regresar arriba</a></li>
                                <li key={UUID.generate()}><a href="https://www.buymeacoffee.com/christcastr" target="_blank" rel="noopener noreferrer">Buy me a coffee</a></li>
                                <li key={UUID.generate()}><a href="https://www.paypal.com/paypalme/christcastr" target="_blank" rel="noopener noreferrer">or PayPal</a></li>
                            </ul>
                            <p className="text-center"><strong><a href="https://www.instagram.com/christ.castr_/" target="_blank" rel="noopener noreferrer">I am m0rniac</a></strong></p>
                            <p className="text-center">Code released under the <a href="https://github.com/m0rniac/m0rniac.github.io/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">MIT LICENSE</a></p>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};