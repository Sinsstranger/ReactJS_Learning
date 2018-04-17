import React, { PureComponent } from 'react';
import Caption from './Caption';

export default class Name extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            show: false,
        }
    }
    render(){
        let caption=null;
        if(this.state.show){
            caption=(<Caption source={this.props.source}/>);
        }
        return <div className="Pokemon" onClick={()=>{
            this.setState({
                show: !this.state.show
            });
        }}><img src={this.props.imageSrc} alt={this.props.pokiName}/><p>{this.props.pokiName}</p>{caption}</div>;
    }
}