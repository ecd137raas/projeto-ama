import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Signin from './pages/Signin';
import Home from './pages/Home';
import Employee from './pages/Employee';
import Menu from './pages/Menu';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Signin} />
                <Route path="/home" component={Home} />
                <Route path="/employee" component={Employee} />
                <Route path="/menu" component={Menu} />
            </Switch>
        </BrowserRouter>
    )
}