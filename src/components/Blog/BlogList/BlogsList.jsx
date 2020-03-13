import React, { Component } from 'react';
import { List, Skeleton, Button, Card } from 'antd';
import './BlogsList.less';


class BlogsList extends Component {


    renderLIsts = (item) => {

    }

    onLoadMore = () => {

    }



    render() {
        const history=this.props.history
        const loadMore =
            true && true ? (
                <div
                    style={{
                        textAlign: 'center',
                        marginTop: 12,
                        height: 32,
                        lineHeight: '32px',
                    }}
                >
                    <Button onClick={this.onLoadMore}>More</Button>
                </div>
            ) : null;

        return (
            
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 2,
                    lg: 3,
                    xl: 4,
                    xxl: 5,
                }}
                dataSource={this.props.blogs}
                loadMore={loadMore}
                renderItem={blog => (
                    <List.Item
                        key={blog._id}
                    >
                        <Card
                            hoverable={true}
                            style={{ width: 300, margin: "0 auto" }}
                            bodyStyle={{ margin: 0, padding: 0 }}
                        >
                            <div
                                className="blog-cover"
                                onClick={() => {
                                    history.push({
                                        pathname: 'blog_detail',
                                        state: `${blog._id}`
                                    })
                                }}
                            >
                                <div className="blog-meta">
                                    <p className='blog-title'>{blog.title}</p>
                                    <p className='blog-description'>{blog.description}</p>
                                </div>
                            </div>
                        </Card>
                    </List.Item>
                )}
            />
        );
    }
}

export default BlogsList;
