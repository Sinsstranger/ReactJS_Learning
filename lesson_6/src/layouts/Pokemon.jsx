import React, {PureComponent} from 'react';

export default class Pokemon extends PureComponent{
    constructor(props){
        super(props);
        this.number=+(document.location.pathname.match(/\d+$/));
        this.state={};
    }
    contentGet(){
        fetch(`https://pokeapi.co/api/v2/pokemon/${this.number}`).then(response => response.json())
            .then(result =>
                this.setState({
                    name: result.name,
                    image: result.sprites.front_default,
                    type: result.types[0].type.name
                }));
        fetch(`https://pokeapi.co/api/v2/ability/${this.number}`).then(response => response.json())
            .then(result => this.setState({
                    effect: result.effect_entries[0].effect
            }));
    }
        ;
    render(){
        this.contentGet();
        return (<div className="pokemon_item">
            <img src={`${this.state.image}`} alt={`${this.state.name}`}/>
            <p>Этого покемона зовут: <span>{this.state.name}</span></p>
            <p>He type is: {this.state.type}</p>
            <p>And his general effect in short:<br/>{this.state.effect}</p>
        </div>);
    }
}