import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import Employee from './pages/Employee';
import Patients from './pages/Patients';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/home" component={Home} />
                <Route path="/employee" component={Employee} />
                <Route path="/patients" component={Patients} />
            </Switch>
        </BrowserRouter>
    )
}