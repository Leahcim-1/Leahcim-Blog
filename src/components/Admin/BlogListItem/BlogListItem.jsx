import React, { Component } from 'react';
import { List, Button, Icon, Divider } from 'antd';
import { showTags } from '../Tags/TagsComponent';
import { Link } from 'react-router-dom';

class BlogListItem extends Component {
    state = {
        page: 1
    }

    componentDidMount() {
        this.url = "http://localhost:20000"
    }

    render() {
        const vDivider = (<Divider type="vertical" />);
        return (
            <List
                itemLayout="vertical"
                size="default"
                pagination={{
                    pageSize: 5,
                    position: "bottom",
                    onChange: page => {
                        this.setState({ page: page })
                    },
                }}
                dataSource={this.props.blogs}
                renderItem={item => {
                    const lastEditedTime = new Date(item.lastEditedTime).toLocaleDateString();
                    const createdTime = new Date(item.createdTime).toLocaleDateString();
                    const tagsNode = showTags(item.tags);
                    return (
                        <List.Item
                            key={item.title}
                            extra={(
                                <div
                                    className="list-img"
                                    style={{
                                        width: "150px",
                                        height: "150px",
                                        backgroundImage: `url(${this.url}/${item.coverPicPath})`,
                                        backgroundPosition: "center",
                                        backgroundRepeat: "none"
                                    }}
                                >

                                </div>
                            )}
                        >
                            <List.Item.Meta
                                title={<a href={item.title}>{item.title}</a>}
                                description={item.description}
                            />
                            <div
                                className="list-tag"
                                style={{ marginBottom: "12px" }}
                            >
                                <Icon type="tags" style={{ marginRight: '8px' }} />
                                {tagsNode}
                            </div>

                            <div 
                            className="button"
                                style={{ marginBottom: "12px" }}
                            >
                                <Button size="small" style={{ marginRight: "8px" }}>
                                    <Link to={{
                                        pathname: "edit_blog",
                                        hash: item._id
                                    }}>Edit</Link>
                                </Button>
                                <Button size="small">Delete</Button>
                            </div>

                            <div className="list-time">
                                <span>
                                    <Icon type="clock-circle" style={{ marginRight: '8px' }} />
                                    Created Time:  {createdTime}
                                </span>
                                {vDivider}
                                <span>
                                    <Icon type="clock-circle" style={{ marginRight: '8px' }} />
                                    Last Edited:  {lastEditedTime}
                                </span>
                            </div>
                        </List.Item>
                    )
                }}
            >
            </List>
        );
    }
}

export default BlogListItem;