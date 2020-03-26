import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { loginReq } from '../../api/user';
import './loginForm.less'



class LoginForm extends Component {


    handleSubmit = e => {
        const history = this.props.history;
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                const { username, password } = values;
                let res = await loginReq({
                    username: username,
                    password: password
                });
                console.log(res)
                if (res.authorized) {
                    message.success('Login sucess!');
                    localStorage.setItem('token', res.token)
                    history.replace('/admin');
                }
                else {
                    message.error('Incorrect usename or password')
                }
            }
        });
    }



    render() {
        const { getFieldDecorator } = this.props.form;

        return (
            <div className="login-form-wrapper">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <h1 style={{ marginBottom: "30px", color: " rgba(20,20,20,1)" }}>Login</h1>
                    <Form.Item>
                        {
                            getFieldDecorator('username', {
                                rules: [
                                    { required: true, message: '用户名必须输入' },
                                    { min: 4, message: '用户名至少4位' },
                                    { max: 10, message: '用户名最多10位' },
                                    { pattern: /^[a-zA-Z0-9_]+$/, whitespace: true, message: '用户名必须是英文数字或下划线' },
                                ],
                                initialValue: "admin",
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />,
                            )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('password', {
                            rules: [
                                { whitespace: true, message: "不可以有空格" }
                            ],
                        })(
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />,
                        )}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('remember', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>Remember me</Checkbox>)}
                        <a className="login-form-forgot" href="">
                            Forgot password
                         </a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                    </Button>
                        Or <a href="">register now!</a>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

LoginForm = Form.create('login-form')(LoginForm);

export default LoginForm;