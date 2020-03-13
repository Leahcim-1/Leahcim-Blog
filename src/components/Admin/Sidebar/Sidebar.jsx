import React, { Component } from 'react';
import { Menu, Icon, Button } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import './Sidebar.less'

const { SubMenu } = Menu;

class SidebarComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: '1'
        };
    }

    static defaultProps = {
        mode: "inline",
        theme: "dark",
        inlineIndent: "40",
    };

    handleClick = e => {
        this.setState({
            current: e.key,
        });
    };

    getMenuNode = (menuList) => {
        const path = this.props.location.pathname;
        const linkPath = this.props.adminURL;
        return menuList.map((item, index) => {
            if (!item.children) {
                return (
                    <Menu.Item
                        key={item.key}
                    >
                        <Link to={linkPath + item.key}>
                            <Icon type={item.type} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            }
            else {
                const selectedKey = item.children.find(children => (linkPath + children.key) === path);
                if (selectedKey)
                    this.openKey = item.key;
                return (
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                <Icon type={item.type} />
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {this.getMenuNode(item.children)}
                    </SubMenu>
                )
            }
        });
    };

    componentWillMount() {
        this.menuNode = this.getMenuNode(this.props.menuList);
    }

    render() {
        const linkPath = this.props.adminURL;
        const path = this.props.location.pathname;
        const openKey = this.openKey;
        return (
            <div className="menu">
                <Menu
                    mode={this.props.mode}
                    theme={this.props.theme}
                    inlineIndent={this.props.inlineIndent}
                    style={{height: '100vh'}}
                    selectedKeys={linkPath+[path]}	
                    defaultOpenKeys={[openKey]}
                    
                    onClick={this.handleClick}
                >
                    <div className="logo-wrapper">
                        <img src={this.props.logo} alt="logo" className="logo"  />
                    </div> 
                    {this.menuNode}
                </Menu>
            </div>
        );
    }
}

SidebarComponent = withRouter(SidebarComponent);

export default SidebarComponent;