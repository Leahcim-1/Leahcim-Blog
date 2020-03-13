import React, { Component } from 'react';
import BlogListItem from '../../components/Admin/BlogListItem/BlogListItem'
import { getBlog } from '../../api/blog';


class DraftBox extends Component {
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
        const condition = { isDraft: true };
        const loadBlogs = async () => {
            let res = await getBlog(condition);
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
            <BlogListItem />
        );
    }

    
}


export default DraftBox;