import React, { PureComponent } from 'react';
import Caption from './Caption';
export default class Name extends PureComponent{
    constructor(props) {
        super(props);
        this.source = null;
        this.sourceGet=function () {
            this.source=this.props.source;
        }
    }

    render(){
        return (<div className="Pokemon" onClick={this.sourceGet()}>
            <img src={this.props.imageSrc} alt={this.props.pokiName}/>
            <p>{this.props.pokiName}</p>
            <Caption source={this.source}/>
        </div>);
    }
}