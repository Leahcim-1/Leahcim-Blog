import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Admin from './containers/Admin/Admin';
import Login from './containers/Login/Login';
import Blog from './containers/Blog/Blog'

class app extends Component {
    
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path='/blog' component={Blog}></Route>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/admin' component={Admin}></Route>
                        <Redirect to='/blog' />
                    </Switch>
                </BrowserRouter>
            </div>        
        );
    }
}

export default app;