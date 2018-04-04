import React from 'react';

export default class MainNav extends React.Component{
    render(){
        return <nav className="blog-pagination">
            <a className="btn btn-outline-primary" href="#">Older</a>
            <a className="btn btn-outline-secondary disabled" href="#">Newer</a>
        </nav>;
    }
}