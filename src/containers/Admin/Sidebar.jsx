import React, { Component } from 'react';
import SidebarComponent from '../../components/Admin/Sidebar/Sidebar'
import logo from '../../assets/img/logo_light.png';
import MenuList from '../../config/MenuList'

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <SidebarComponent 
                logo={logo}
                menuList={MenuList}
                adminURL={this.props.adminURL}
            />
        );
    }
}

export default Sidebar;