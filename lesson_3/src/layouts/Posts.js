import React from 'react';

import Post1 from "../components/Post1";
import Post2 from "../components/Post2";

export default class Posts extends React.Component{
    render(){
        return <div className={this.props.postsClass}>
            <Post1 class={this.props.children}/>
            <Post2 class={this.props.children}/>
        </div>;
    }
}