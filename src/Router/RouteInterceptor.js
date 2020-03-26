import React, { Component, lazy, Suspense } from 'react';
import { message, Divider } from 'antd'
import { userAuth } from '../api/user';
import { Route, Redirect } from 'react-router-dom';


const RouteInterceptor = ({...props}) => { 
   return class extends Component {
       state = { 
           isLoading: true,
           isAuth: false
        }

       authReq = async() => {

           const token = localStorage.getItem('token');
            let res = await userAuth(token);
            console.log(res)
            if (res.data.code === 0) {
                this.setState({
                    isLoading: false,
                    isAuth: true
                })
            }
       }

       componentDidMount(){
           debugger
            this.authReq()
       }

       render() {
           let node = undefined;
           if (this.state.isLoading) 
                node = (<div>isLoading</div>)
           else {
               if (this.state.isAuth) {
                   node = <Route {...props}/>
               }
               else {
                   node = <Redirect to='/login' />
               }
           }
           return (
               {node}
           );
       }
   }
    
}


export default RouteInterceptor;
