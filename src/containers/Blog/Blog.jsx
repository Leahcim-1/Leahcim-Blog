import React, { Component } from 'react';
import  { Layout } from 'antd';
import { Header as BlogHeader } from '../../components/Blog/Header/Header'
import { Content as BlogContent } from './Content'

const { Header, Footer, Content } = Layout


class Blog extends Component {
    state = {}
    render() {
        return (
            <Layout theme='light'>
                <Header style={{height: 100, backgroundColor: "#eee"}}  >
                    <BlogHeader />
                </Header>
                <Content style={{overflow: "initial", minHeight: 'calc(100vh - 200px)', padding: 40}}>
                    <BlogContent />
                </Content>
                <Footer  style={{height: 100, backgroundColor: "#eee"}} >
                    <div>
                        footer
                    </div>
                </Footer>
            </Layout>        
        )
    }
}

export default Blog;