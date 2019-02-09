import React, { Component } from "react";
import axios from "../../../axios";
import { Link, Route } from "react-router-dom";

import Post from "../../../components/Post/Post";
import "./Posts.css";
import FullPost from "../FullPost/FullPost";

const AUTHORS = [
    "Max",
    "Nick",
    "John",
    "Andrew",
    "Jane"
]

class Posts extends Component {

    state ={ 
        posts: []
    }

    componentDidMount () {
        //console.log(this.props);
        axios.get("/posts")
            .then(response => {
                const posts = response.data.slice(0, 5);

                const postsWithAuthor = posts.map((item, index) => {
                    return {
                        ...item,
                        author: AUTHORS[index]
                    }
                })

                this.setState({posts: postsWithAuthor});
            })
            .catch(error => {
                //this.setState({error: true})
                //console.log(error)
            })
    }

    postSelectedHandler = (id) => {

        this.props.history.push({pathname: '/posts/' + id});
        /* this.setState({selectedPostId: id}); */
        /* <Link to={"/" + item.id} key={item.id} > */
    }


    render () {

        let posts = <p style={{textAlign: "center"}}>Something went wrong!</p>

        if (!this.state.error) {
            posts = this.state.posts.map(item => {
                return (    <Post   key={item.id}
                                    title={item.title} 
                                    author={item.author}
                                    clicked={() => {this.postSelectedHandler(item.id)}} />
                        )
            })
        }

        return (
            <div>
                <section className="Posts">
                        {posts}
                </section>
                <Route path={this.props.match.url + "/:postId"} exact component={FullPost} />
            </div>
        )
    }
}


export default Posts;