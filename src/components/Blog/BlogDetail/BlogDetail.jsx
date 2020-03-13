import React, { Component, } from 'react';
import { Divider } from 'antd';
import { UserOutlined, ClockCircleOutlined, TagsOutlined } from '@ant-design/icons';
import { showTags } from '../../Admin/Tags/TagsComponent'
import { getBlog } from '../../../api/blog';
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css'
import MarkdownIt from 'markdown-it'


class BlogDetail extends Component {
    state = {
        blog: {

        }
    }

    getBlogInfo = (id) => {
        const getBlogReq = async () => {
            let res = await getBlog( { _id: id });
            this.setState({
                blog: res.blogs[0]
            })
        }

        getBlogReq()
    }

    componentDidMount() {
        const { state } = this.props.location;
        console.log(state)
        this.getBlogInfo( state)
    }

    render() {
        const mdParser = new MarkdownIt({
            html: true,
            linkify: true,
            typographer: true,
        });

        const blog = this.state.blog
        const createdTime = new Date(blog.createdTime).toLocaleString();
        const tagNodes = showTags(blog.tags, false)

        return (
            <div
                className='blog-detail'
                style={{
                    backgroundColor: "white",
                    minWidth: "500px",
                    width: "80%",
                    height: "100%",
                    margin: "0 auto",
                    padding: "20px",
                    textAlign: 'center',
                    fontSize: '16px'
                }}
            >
                <h1>{blog.title}</h1>
                <div><span><UserOutlined /></span> {blog.author} <Divider type='vertical' /><span><ClockCircleOutlined /></span> {createdTime}</div>
                <div>{tagNodes}</div>

                <MdEditor
                    value={blog.contentText}
                    renderHTML={(text) => mdParser.render(text)}
                    style={{ width: '100%', border: "none", marginTop: 20, paddingLeft: 50}}
                    view={{ menu: false, md: false, html: true }}
                    canView={{ menu: false, md: false, html: true, hideMenu: false }}
                />


            </div>
        );
    }
}

export default BlogDetail;