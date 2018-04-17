import React from 'react';

export default class Caption extends React.PureComponent{
    constructor(props){
        super(props);
        this.source=props.source;
    }
    render(){
        return(<p>{this.source}</p>);
    }
}