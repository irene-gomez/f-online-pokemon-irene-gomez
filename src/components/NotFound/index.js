import React, { Fragment } from 'react';
import './styles.css';

const NotFound = () => {
    return (
        <Fragment>
            <div className="not-found__image"></div>
            <p className="not-found__info">No se ha encontrado ninguna coincidencia</p>
        </Fragment>
    );
}
 
export default NotFound;