import React, { Component } from 'react';
import { getBlog } from '../../api/blog';
import BlogsList from '../../components/Blog/BlogList/BlogsList'

class TechBlogs extends Component {

    state = {
        initLoading: true,
        loading: false,
        page: 1,
        numOfPages: 6,
        blogs: [],
    }  

    getBlogs = async ( ) => {
        let res = await getBlog({
            isPublish: true
        });
        this.setState({
            page: this.state.page + 1,
            blogs: res.blogs,
            initLoading: false
        })
    } 
    
    componentDidMount() {
        this.getBlogs()
    }

    render() {
        return (
            <BlogsList 
                blogs={this.state.blogs}
                page={this.state.page}
                history={this.props.history}
            />
        );
    }
}

export default TechBlogs;