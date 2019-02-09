import React, { Component } from 'react';
//import axios from "axios";
import axios from "../../axios";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";

// import Post from '../../components/Post/Post';
// import FullPost from './FullPost/FullPost';
// import NewPost from './NewPost/NewPost';
import './Blog.css';
import Posts from "./Posts/Posts";
import asyncComponent from "../../hoc/asyncComponent";
// import NewPost from "./NewPost/NewPost";
// import FullPost from "./FullPost/FullPost";

const AsyncNewPost = asyncComponent(() => {
    return import("./NewPost/NewPost");
});


class Blog extends Component {

    state = {
        auth: false
    }

    render () {

        return (
            <div class="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink    to="/posts" 
                                            exact 
                                            activeClassName="active" 
                                            activeStyle={{
                                                color: "blue", 
                                                textDecoration: "underline"
                                            }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>                
                <Switch>
                    <Route path="/new-post" component={AsyncNewPost} />
                    <Route path="/posts" component={Posts} />
                    {/* <Redirect from="/" to="/posts" /> */}
                </Switch>        
            </div>
        );
    }
}

export default Blog;