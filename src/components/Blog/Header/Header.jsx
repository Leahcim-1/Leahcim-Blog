import React, { Component } from 'react';
import { Menu, Icon, Input } from 'antd';
import { Link } from 'react-router-dom';
import { NavLIsts } from '../../../config/NavConfig';
import logo from '../../../assets/img/logo_dark.png';
import './Header.less'

const { Search } = Input;

export class Header extends Component {
    state = {
        current: "",
        toggle: false
    }

    focusText =( ) => {
        this.searchInput.current.focus();
        console.log("hi")
    }

    handleClick = (e) => {
        if (e.key !== 'search') {
            this.setState({
                current: e.key,
                toggle: false
            })
        }
        else {
            this.setState({
                current: e.key,
                toggle: !this.state.toggle
            })
        }
        
    }

    searchToggle = (toggle) => {
        if (toggle) {
            return (
                <Search
                    placeholder="Search something..."
                    onSearch={value => console.log(value)}
                    onClick={this.focusText}
                    style={{ width: "100%", zIndex:"1" }}
                    autoFocus={true}
                />
            )
        }
    }


    getNavNode = () => {
        const blogUrl = "/blog";

        return (
            <Menu
                mode="horizontal"
                onClick={this.handleClick}
                selectedKeys={this.state.current}
                style={{ textAlign: "right", backgroundColor: "#eee" }}
            >
                {
                    NavLIsts.map((item) => {
                        let node = '';
                        if (item.title !== 'Search') {
                            node = (
                                <Link to={blogUrl + item.key}>
                                    <Icon type={item.type} style={{ marginRight: "5px" }} />
                                    <span style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                                        {item.title}
                                    </span>
                                </Link>
                            )
                        }
                        else {
                            node = (
                                <span>
                                    <Icon type={item.type} style={{ marginRight: "5px" }} />
                                    <span style={{ fontSize: "1.2em", fontWeight: "bold" }}>
                                        {item.title}
                                    </span>
                                </span>
                            )
                        }

                        return (
                            <Menu.Item
                                key={item.key}
                                style={{backgroundColor: "#eee"}}
                            >
                                {node}
                            </Menu.Item>
                        )
                    })
                }
            </Menu>
        )
    }

    componentDidMount() {
        this.searchInput = React.createRef();
        
    }

    render() {
        const navNode = this.getNavNode();
        const searchNode = this.searchToggle(this.state.toggle);
        return (
            <div className="header" >

                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>

                <div className="header-nav">
                    {navNode}
                </div>

                <div className="search">
                    {searchNode}
                </div>

            </div>
        );
    }
}
