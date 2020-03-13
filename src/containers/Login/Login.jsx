import React, { Component } from 'react';
import LoginForm from '../../components/Login/LoginForm';
import './login.less';
import logo from '../../assets/img/logo_light.png';

class Login extends Component {

    Redirect = ( ) => {
        this.props.history.replace('/admin');
    }

    render() {
        return (
            <div className="login">
                <header className='header'>
                    <span style={{ display: 'block', height: '100%'}}>
                        <img src={logo} style={{ height: "100%", display: "inline-block", margin: "0 10%", zIndex: "1" }} />
                    </span>
                </header>
                <section className='main'>
                    <LoginForm 
                        history={this.props.history}
                    />
                </section>
                <footer>

                </footer>
            </div>

        );
    }
}

export default Login;