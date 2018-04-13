import React from 'react';
import { Route, Switch} from "react-router-dom";

import Main from './Main';
import Pokemon from './Pokemon';
import Header from '../components/Header';
import Footer from '../components/Footer';

/**
 * В зависимости от содержимого адресной строки будет отображаться либо страница с покемонами
 * Либо отдельная страница покемона
 */
export default class Layout extends React.Component{
    constructor(props){
        super(props);
        this.reg=/\d+$/;
    }
    render(){
        return (<div>
            <Header/>
                <Switch>
                    <Route path="/" component={Main}/>
                    <Route path={`/pokemon/${this.reg}`} component={Pokemon}/>
                </Switch>
            <Footer/>
        </div>);
    }
}