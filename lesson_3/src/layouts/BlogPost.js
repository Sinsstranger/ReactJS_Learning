import React from 'react';

import Head from '../components/posts/Head';
import Meta from '../components/posts/Meta';
import Content from '../components/posts/Content';

export default class BlogPost extends React.Component{
    render(){
        return <div className="blog-post">
            <Head size={this.props.headSize} class={this.props.headClass}>{this.props.caption}</Head>
            <Meta date={this.props.date} name={this.props.name}/>
            <Content>{this.props.children}</Content>
        </div>;
    }
}