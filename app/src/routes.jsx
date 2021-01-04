import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Login from './pages/sign in/sign-in';
import CriarConta from './pages/sign up/sign-up';
import Filmes from './pages/filmes/filmes';
import Home from './pages/home/home';
import Series from './pages/series/series';

function Router(){
        return(
                <BrowserRouter>
                        <Switch>
                                <Route exact path="/" component={Login} />
                                <Route path="/criar-conta" component={CriarConta} />
                                <Route path="/home" component={Home} />
                                <Route path="/filmes" component={Filmes} />
                                <Route path="/series" component={Series} />
                        </Switch>
                </BrowserRouter>
        )
}

export default Router;