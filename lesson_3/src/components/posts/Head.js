import React from 'react';


export default class Head extends React.Component{
    constructor(props){
        super(props);
        this.size = ('h'+props.size);
    }
    render(){
        return React.createElement(this.size, { className: this.props.class }, this.props.children);
    }
}