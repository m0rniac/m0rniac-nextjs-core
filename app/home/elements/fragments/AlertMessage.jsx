import React from 'react';

export const AlertMessage = () => {
    return (
        <div className="container-fluid">
            {/* {subCorpus; Alert Message} */}
            <br />
            <div className="alert alert-dismissible alert-warning">
                <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
                <h4 className="alert-heading"><strong>¡Holaaa!</strong></h4>
                <p className="mb-0"><strong>Bienvenido o bienvenida al deploy web de mi GitHub 🫶🏻</strong></p>
            </div>
        </div>
    )
}
