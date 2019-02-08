import React, { Component } from 'react';
//import axios from "axios";
import axios from "../../axios";
import { Route, NavLink, Switch } from "react-router-dom";

// import Post from '../../components/Post/Post';
// import FullPost from './FullPost/FullPost';
// import NewPost from './NewPost/NewPost';
import './Blog.css';
import Posts from "./Posts/Posts";
import NewPost from "./NewPost/NewPost";
import FullPost from "./FullPost/FullPost";


class Blog extends Component {

    render () {

        return (
            <div class="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink to="/" exact activeClassName="active" activeStyle={{color: "blue", textDecoration: "underline"}}>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    <Route path="/" exact component={Posts} /> 
                    <Route path="/new-post" component={NewPost} />
                    <Route path="/:postId" exact component={FullPost} />
                </Switch>
               
                {/* <Posts />   */}           
            </div>
        );
    }
}

export default Blog;