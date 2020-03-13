import React, { Component } from 'react';
import { getBlog } from '../../api/blog';
import BlogsList from '../../components/Blog/BlogList/BlogsList'

class TechBlogs extends Component {

    state = {
        initLoading: true,
        loading: false,
        page: 1,
        numOfPages: 5,
        blogs: [],
    }  

    
    componentDidMount() {
        const getBlogs = async ( ) => {
            let res = await getBlog({
                isPublish: true
            });

            console.log(res)
            this.setState({
                page: this.state.page + 1,
                blogs: res.blogs,
                initLoading: false
            })
        } 
        getBlogs()
    }

    render() {
        return (
            <BlogsList 
                blogs={this.state.blogs}
                page={this.state.page}
                numOfPages={5}
                initLoading={this.state.initLoading}
                history={this.props.history}
            />
        );
    }
}

export default TechBlogs;