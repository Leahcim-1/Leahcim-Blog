import React, { Component } from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import About from '../../components/Blog/About/About'
import Nonsense from './Nonsense'
import TechBlogs from './TechBlogs'
import BlogDetail from '../../components/Blog/BlogDetail/BlogDetail'

export class Content extends Component {
    state = {  }

    render() {
        const blogUrl = "/blog"
        return (
            <div>
                <Switch>
                    <Route path={`${blogUrl}/tech_blogs`} component={TechBlogs} />
                    <Route path={`${blogUrl}/nonsense`} component={Nonsense} />
                    <Route path={`${blogUrl}/about`} component={About} />
                    <Route path={`${blogUrl}/blog_detail`} component={BlogDetail} />
                    <Redirect to={`${blogUrl}/tech_blogs`} />
                </Switch>
            </div>
        );
    }
}

