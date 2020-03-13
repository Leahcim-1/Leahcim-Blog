import React, { Component } from 'react';
import { Button, Input, Icon, message, Upload, Select } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import MarkdownEditor from '../MarkdownEditor/MarkdownEditor';
import TagsComponent from '../Tags/TagsComponent';
import './BlogEditor.less';

const { Dragger } = Upload;
const { Option } = Select;

class BlogEditor extends Component {

    state = {
        publishLoading: false,
        draftLoading: false,
        coverImg: {},
    }

    static defaultProps = {
        blog: {
            id: "",
            title: "",
            author: "",
            description: "",
            tags: [],
            category: [],
            contentText: "",
            contentHTML: "",
            createdTime: undefined,
            lastEditedTime: undefined,
            coverPicPath: "",
            isPublish: false,
            isDraft: false,
        }
    }

    clickHandle = (e) => {
        let pathname = "";
        if (e.target.innerText === "Publish") {
            this.setState({ publishLoading: true });
            this.blog.isPublish = true;
            this.blog.isDraft = false;
            pathname = '/blogs_list';
        }
        else {
            this.setState({ draftLoading: true });
            this.blog.isDraft = true;
            pathname = '/draft_box';
        }
        this.blog.createdTime ? this.blog.createdTime = this.blog.createdTime : this.blog.createdTime = Date.now();
        this.blog.lastEditedTime = Date.now();
        this.props.submitServer(this.blog);
        this.setState({
            publishLoading: false,
            draftLoading: false,
        })
    }

    changeHandle = (e) => {
       let key = e.target.id
        this.blog[key] = e.target.value;
    }

  

    coverChangeHandle = (img) => {
        var formData = new FormData();
        formData.append('image', img.file);
        formData.append('id', this.blog.id);
        this.props.uploadCoverHandle(formData);
    }

    getTags = (tags = []) => {
        this.blog.tags = tags;
    }

    getContent = (html, text) => {
        this.blog.contentHTML = html;
        this.blog.contentText = text;
    }

    render() {
    const catagory = this.props.catagory.map(el => (<Option key={el.value}>{el.value}</Option>))
        return (
            <div style={{ padding: "10px", height: "100%" }}>

                <Input.Group
                    size="small"
                    style={{ marginBottom: "20px" }}

                >
                    <div className="title-div">
                        <h4>Title</h4>
                        <Input
                            placeholder="Title for that B"
                            id="title"
                            onChange={this.changeHandle}
                        />
                    </div>
                </Input.Group>

                <Input.Group
                    size="small"
                    style={{ marginBottom: "20px" }}>
                    <div className="author-div">
                        <h4>Author</h4>
                        <Input
                            placeholder="Author for that B"
                            id="author"
                            onChange={this.changeHandle}
                        />
                    </div>

                </Input.Group >

                <Input.Group
                    style={{ marginBottom: "20px" }}>
                    <div className="tags-div">
                        <h4>Description</h4>
                        <Input.TextArea
                            id="description"
                            autoSize={{ minRows: 2, maxRows: 4 }}
                            onChange={this.changeHandle}
                        />
                    </div>
                </Input.Group >

                <Input.Group
                    style={{ marginBottom: "20px" }}>
                    <div className="tags-div">
                        <h4>Categories</h4>
                        <Select
                            id="catagory"
                            mode="multiple"
                            style={{ width: '100%' }}
                            placeholder="Chose Your Topic"
                            onChange={(e) => {
                                const selectCat = e.map(val => { return {value: val}})
                                this.blog.category = [...selectCat];
                                }
                            }
                        >
                            {catagory}
                        </Select>
                    </div>
                </Input.Group >

                <Input.Group
                    style={{ marginBottom: "20px" }}>
                    <div className="upload-div">
                        <h4>Cover Image </h4>
                        <Dragger 
                            beforeUpload={() => false}
                            onChange={this.coverChangeHandle}
                        >
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                            <p className="ant-upload-hint">
                                Support for a single 
                            </p>
                        </Dragger>
                    </div>
                </Input.Group >

                <Input.Group
                    style={{ marginBottom: "20px" }}>
                    <div className="tags-div">
                        <h4>Tags</h4>
                        <TagsComponent
                            getTags={this.getTags}
                        />
                    </div>
                </Input.Group >

                <Input.Group style={{ marginBottom: "20px", }}>
                    <h4>Content</h4>
                    <MarkdownEditor
                        getContent={this.getContent}
                    />
                </Input.Group>

                <Input.Group >
                    <Button
                        type="primary"
                        size="large"
                        onClick={this.clickHandle}
                        loading={this.state.publishLoading}
                    >
                        <Icon type="upload" />Publish
                    </Button>
                    <Button
                        type="dashed"
                        size="large"
                        onClick={this.clickHandle}
                        style={{ marginLeft: "20px" }}
                        loading={this.state.draftLoading}
                    >
                        <Icon type="edit" />Save as Draft
                    </Button>

                </Input.Group>

            </div>
        );
    }

    componentDidMount() {
        this.blog = this.props.blog;
    }

    componentDidUpdate( ) { 
        this.blog.id = this.props.id;
        this.blog.coverPicPath = this.props.coverPicPath;
    }

    componentWillUnmount() {
        this.blog = {};
        this.coverImg = null;
    }

}

export default BlogEditor;