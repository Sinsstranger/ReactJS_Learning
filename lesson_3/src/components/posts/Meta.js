import React from 'react';


export default class Meta extends React.Component{
    render(){
        return <p className='blog-post-meta'>{this.props.date} <a href="#">{this.props.name}</a> </p>;
    }
}