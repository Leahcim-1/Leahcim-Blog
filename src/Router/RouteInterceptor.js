import React, { Component, lazy, Suspense } from 'react';
import { message } from 'antd'
import { userAuth } from '../api/user';
import { Route, Redirect } from 'react-router-dom';


class RouteInterceptor extends Component {
    _isMounted = false;

    state = {
        vaild: false
    }




    authReq = async () => {
        const token = localStorage.getItem('token');
        const res = await userAuth(token);
        if (this._isMounted) {
            if (res.data.code === 0) {
                this.setState({ vaild: true })
            }
            else {
                message.error('You haven\'t Sign In Yet')
                this.setState({ vaild: false })
            }
        }
    }
  


    componentDidMount() {
        this._isMounted = true;
        this.authReq();
    }

    componentWillUnmount() {
        console.log('mount: ', this._isMounted)
        this._isMounted = false;
    }

    render() {
        const LazyComponent = lazy(() => import(`../${this.props.component}`))  
        const vaild = this.state.vaild;
        console.log(vaild)
        console.log('mount: ', this._isMounted)

        if (this._isMounted) {
            console.log('mount: ', this._isMounted)
            return (
                <Route
                    path={this.props.path}
                    render={props =>
                        (vaild) ? (
                            <Suspense fallback={<div>Loading...</div>}>
                                <LazyComponent {...props} />
                            </Suspense>) 
                             : (<Redirect to={{ pathname: '/login' }} />)
                    }
    
                />
            );
        }
        
        return <div> </div>
    }

}

export default RouteInterceptor;
