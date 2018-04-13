import React, {PureComponent} from 'react';
import { Link } from "react-router-dom";
export default class Main extends PureComponent{
    render(){
        return <div><Pokemons/></div>;
    }
}
class Pokemons extends PureComponent {
    constructor(props) {
        super(props);
        this.result=[];
    }
    resultGet(){
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=200').then(response => response.json())
            .then(res => res.results).then(poki => {
                for(let i=0, b=1; i<poki.length; i++, b++){
                    this.result.push(<Name pokiName={poki[i].name} number={b} imageSrc={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${b}.png`}/>);
            }
            this.setState({});
        });
    }
    componentWillMount(){
        this.resultGet();
    }
    render() {
        return <main className="pokemons">
            {this.result}
        </main>;
    }
}
class Name extends PureComponent{
    render(){
        return (<div className="Pokemon">
            <Link to={`/pokemon/${this.props.number}`}>
                <img src={this.props.imageSrc} alt={this.props.pokiName}/>
            </Link>
            <p>{this.props.pokiName}</p>
        </div>);
    }
}