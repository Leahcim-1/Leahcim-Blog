import React, { Component } from 'react';
import BlogListItem from '../../components/Admin/BlogListItem/BlogListItem';
import { getBlog, editBlog, deleteBlog } from '../../api/blog';
import { message, Modal } from 'antd';

const { confirm } = Modal;

class BlogsList extends Component {

    constructor(props) {
        super(props)
        const url = this.props.location.pathname;
        const history = this.props.history;
        this.state = {
            blogs: [],
            url: url,
            history: { ...history }
        }
    }

    getBlogsData = async () => {
        const condition = { isDraft: false };
        let res = await getBlog(condition);
        this.setState({
            blogs: [...res.blogs]
        })
    }

    updateBlog = async (id) => {
        let blog = this.state.blogs.find(blog => blog._id === id)
        const docs = {isPublish: !blog.isPublish};
        const res = await editBlog(id, docs);
        if (res.code === 0) {
            this.getBlogsData()
        }
    }

    deleteBlog = (id) => {
        confirm({
            title: 'Be Careful',
            content: "Are you sure you want to delete this blog?",
            cancelText: 'No',
            okText: "Sure",
            okType: 'danger',
            onOk: async()=> {
                const res = await deleteBlog(id);
                if (res.code === 0) {
                    this.getBlogsData()
                }
            }
        })
    }

    componentDidMount() {
        this.getBlogsData()
    }

    render() {
        console.log(this.state.blogs)
        return (
            <div>
                <BlogListItem blogs={this.state.blogs} updateBlog={this.updateBlog} deleteBlog={this.deleteBlog}/>
            </div>
        );
    }
}

export default BlogsList;