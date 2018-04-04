import React from 'react';

export default class HeaderContainer extends React.Component{
    render(){
        return <header className={this.props.className}>
            <div className="row flex-nowrap justify-content-between align-items-center">
            <div className="col-4 pt-1">
                <a className="text-muted" href="#">Subscribe</a>
            </div>
            <div className="col-4 text-center">
                <a className="blog-header-logo text-dark" href="#">Large</a>
            </div>
            <div className="col-4 d-flex justify-content-end align-items-center">
                <a className="text-muted" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                         className="mx-3">
                        <circle cx="10.5" cy="10.5" r="7.5"/>
                        <line x1="21" y1="21" x2="15.8" y2="15.8"/>
                    </svg>
                </a>
                <a className="btn btn-sm btn-outline-secondary btn-primary" href="#" data-toggle="modal" data-target="#myModal">Sign up</a>
            </div>
        </div></header>;
    }
}