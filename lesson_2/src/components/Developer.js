import React from 'react';
export default class Developer extends React.Component{
	render(){
		return <h1 className={this.props.className}>{this.props.name} {this.props.surname}</h1>;
	}
}