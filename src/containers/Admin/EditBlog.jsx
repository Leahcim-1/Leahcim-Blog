import React, { Component } from 'react';
import BlogEditor from '../../components/Admin/BlogEditor/BlogEditor';

class EditBlog extends Component {
    state = { 

     }

     componentDidMount() {
        const hash = this.props.history.location.hash;
        console.log(hash)
     }

    render() {
        return (
            <BlogEditor />    
        );
    }
}

export default EditBlog;