import React from 'react';
let image = require('../images/index.svg');

export default class Post2 extends React.Component{
    render(){
        return <div className={this.props.class}>
            <div className="card flex-md-row mb-4 box-shadow h-md-250">
                <div className="card-body d-flex flex-column align-items-start">
                    <strong className="d-inline-block mb-2 text-success">Design</strong>
                    <h3 className="mb-0">
                        <a className="text-dark" href="#">Post title</a>
                    </h3>
                    <div className="mb-1 text-muted">Nov 11</div>
                    <p className="card-text mb-auto">This is a wider card with supporting text below as a natural
                        lead-in to additional content.</p>
                    <a href="#">Continue reading</a>
                </div>
                <img className="card-img-right flex-auto d-none d-md-block" src={image}
                     alt="Card image cap"/>
            </div>
        </div>;
    }
}