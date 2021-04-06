import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Landing from './pages/Landing';
import RegisterPage from './pages/RegisterPage'
import NotificationPage from './pages/NotificationsPage'

import ContentPage from './pages/ContentPage'
import ManutencaoUserPage from './pages/ManutencaoUserPage'
import LoginPage from './pages/LoginPage'

import ManutencaoEventPage from './pages/ManutencaoEventPage';

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}/>
                <Route path="/register" component={RegisterPage}/>
                <Route path="/notify" component={NotificationPage}/>

                <Route path="/manutencao/content" component={ContentPage}/>
                <Route path="/manutencao/user" component={ManutencaoUserPage}/>
                <Route path="/login" component={LoginPage}/>

                <Route path="/manutencao/event" component={ManutencaoEventPage}/>
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;