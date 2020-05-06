import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const permission = false;

const PanelClient = () => {
    return (
        <Route render={() => (
            permission ? <h3>Panel klienta...</h3> : <Redirect to="/login" />
        )} />
    );
}

export default PanelClient;