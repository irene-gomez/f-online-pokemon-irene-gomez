import React, { Fragment } from 'react';
import './styles.scss';

const NotFound = () => {
    return (
        <Fragment>
            <div className="not-found__image"></div>
            <p className="not-found__info">No match found</p>
        </Fragment>
    );
}
 
export default NotFound;