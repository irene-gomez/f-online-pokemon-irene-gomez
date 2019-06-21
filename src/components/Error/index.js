import React, { Fragment } from 'react';
import './styles.scss';

const Error = () => {
    return (
        <Fragment>
            <div className="error404__image"></div>
            <p className="error404__info">Page not found (error 404)</p>
        </Fragment>
    );
}
 
export default Error;