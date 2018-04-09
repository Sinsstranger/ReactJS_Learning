import React, { PureComponent } from 'react';

export default class Name extends PureComponent{
    render(){
        return <div className="Pokemon"><img src={this.props.imageSrc} alt={this.props.pokiName}/><p>{this.props.pokiName}</p></div>;
    }
}