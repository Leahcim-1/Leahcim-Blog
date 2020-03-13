import React, { Component } from 'react';
import BlogListItem from '../../components/Admin/BlogListItem/BlogListItem';
import { getBlog } from '../../api/blog';
import { message } from 'antd';

class BlogsList extends Component {

    constructor(props) {
        super(props)
        const url = this.props.location.pathname;
        const history = this.props.history;
        this.state = {
            blogs: [],
            url: url,
            history: {...history}
        }
    }

    getBlogsData() {
        const condition = { isDraft: false };
        const loadBlogs = async () => {
            let res = await getBlog(condition);
            console.log(res)
            this.setState({
                blogs: [...res.blogs]
            })
            
        }
        loadBlogs()
        
    }

    componentDidMount() {
        this.getBlogsData()
    }

    render() {
        return (
            <div>
                <BlogListItem blogs={this.state.blogs}/>            
            </div>
        );
    }
}

export default BlogsList;