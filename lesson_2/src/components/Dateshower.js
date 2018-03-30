import React from 'react';
export default class Dateshower extends React.Component{
	render(){
		return <button onClick={()=>{let date = new Date(); alert(date)}}>Показать дату</button>;
	}
}