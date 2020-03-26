import React, { Component } from 'react';
import BlogEditor from '../../components/Admin/BlogEditor/BlogEditor';
import { addBlog, initBlog, uploadCover } from '../../api/blog';

import { message, Spin } from 'antd';

class AddBlog extends Component {

    constructor(props) {
        super(props)
        const history = this.props.history;
        this.state = {
            id: "",
            coverPicPath: "",
            catagory: [],
            history: { ...history },
            loading: <Spin size='large' />
        }
    }


    submitServer = async (blog) => {
        let res = await addBlog(blog);
        console.log(res);
        if (res.code === 0) {
            const mes = res.message;
            const path = blog.isDraft ? "draft_box" : "blogs_list";
            message.success(mes);
            this.state.history.replace(path);
        }
    }

    getBlogID = async () => {
        let res = await initBlog();
        this.setState({
            id: res.id,
            catagory: [...res.catagory],
            loading: false
        });
    }

    uploadCoverHandle = async (img, id) => {
        let res = await uploadCover(img, id);
        this.setState({
            coverPicPath: res.data.coverPicPath
        })
    }


    render() {
        return (
            this.state.loading ?
                (<Spin 
                    size='large' 
                    style={{display: 'block', margin: '0 auto'}}
                />)
                :
                (
                    <BlogEditor
                        submitServer={this.submitServer}
                        id={this.state.id}
                        uploadCoverHandle={this.uploadCoverHandle}
                        coverPicPath={this.state.coverPicPath}
                        catagory={this.state.catagory}
                    />
                )
        );
    }

    componentDidMount() {
        this.getBlogID();
    }


}

export default AddBlog;