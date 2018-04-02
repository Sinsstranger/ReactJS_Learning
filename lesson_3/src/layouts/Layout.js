import React from 'react';

import HeaderContainer from '../components/HeaderContainer';
import Nav from '../components/Nav';
import Jumbotron from '../components/Jumbotron';
import Posts from './Posts';
import Main from './Main';
import Footer from './Footer';
import ModalWindow from './ModalWindow';
/**
 * Parent Blog Element in Body
 **/
export default class Blog extends React.Component{
    render() {
        return <div>
            <div className={"container"}>
                    <HeaderContainer class="blog-header py-3"/>
                    <Nav class="nav-scroller py-1 mb-2"/>
                    <Jumbotron class="jumbotron p-3 p-md-5 text-white rounded bg-dark"/>
                    <Posts postsClass ="row mb-2">col-md-6</Posts>
            </div>
            <main className={"container"} role={"role"}>
                <Main/>
            </main>
            <Footer class="blog-footer"/>
            <ModalWindow/>
        </div>;
    }
}