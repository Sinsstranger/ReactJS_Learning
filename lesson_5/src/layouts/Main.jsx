import React, { PureComponent } from 'react';

import Name from '../components/Name';

export default class Pokemons extends PureComponent {
    constructor(props) {
        super(props);
            this.result=[];
        }
    resultGet(){
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=200').then(response => response.json())
            .then(res => res.results).then(poki => {
            for(let i=0, b=1; i<poki.length; i++, b++){
                this.result.push(<Name pokiName={poki[i].name} source={b} imageSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${b}.png`}/>);
            }
            this.setState({});
        });
    }
    componentWillMount(){
       this.resultGet();
        console.log(this.result);
    }
    render() {
        return <div className="pokemons">
            {this.result}
        </div>;
    }
}