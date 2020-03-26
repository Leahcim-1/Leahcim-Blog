import React, { Component } from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Layout, Icon } from 'antd';
import MainHeader from './Header';
import Menu from './Sidebar';
import { adminRoutes } from '../../config/adminRoutesConfig'
import { renderRoutes } from '../../Router/RoutesMap';
import Home from './Home'
import AddBlog from './AddBlog';
import EditBlog from './EditBlog';
import BlogsList from './BlogsList';
import DraftBox from './DraftBox';
import './admin.less'

const { Header, Sider, Content } = Layout;



class Admin extends Component {
    constructor(props) {
        super(props);
        const { url } = props.match;
        const routes = adminRoutes(url);
        
        const routesNode = renderRoutes(routes)
        
        this.state = { 
            collapsed: false, 
            routesNode: routesNode,
            url: url
        };
    }


    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };

    render() {

        return (
            <Layout className="admin">
                <Sider
                    trigger={null} 
                    collapsible 
                    collapsed={this.state.collapsed}
                    width={250}
                >
                    <Menu adminURL={this.state.url} />
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 }}>
                        <Icon
                            className="trigger"
                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                            onClick={this.toggle}
                        />
                        <MainHeader />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                        }}
                    >
                        <Switch>
                            {this.state.routesNode}
                            <Redirect to='admin/home'></Redirect>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export default Admin