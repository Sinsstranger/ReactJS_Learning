import React from 'react';

import MainTitle from '../components/MainTitle';
import BlogPost from './BlogPost';
import BlogPost1 from '../components/posts/BlogPost1';
import BlogPost2 from '../components/posts/BlogPost2';
import BlogPost3 from '../components/posts/BlogPost3';
import MainNav from '../components/MainNav';
import MainAside from './MainAside';
/*
* @ This is the Main part of Webpage
* */
export default class Main extends React.Component{
    render(){
        return <div className="row">
                    <div className="col-md-8 blog-main">
                        <MainTitle/>
                            <BlogPost caption="Sample blog post" headSize="2" headClass="blog-post-title" date="January 1, 2014 by" name="Mark"><BlogPost1/></BlogPost>
                            <BlogPost caption="Another blog post" headSize="2" headClass="blog-post-title" date="December 23, 2013 by" name="Jacob"><BlogPost2/></BlogPost>
                            <BlogPost caption="New feature" headSize="2" headClass="blog-post-title" date="December 14, 2013 by" name="Chris"><BlogPost3/></BlogPost>
                            <MainNav/>
                    </div>
            <MainAside class="col-md-4 blog-sidebar"/>
        </div>;
    }
}