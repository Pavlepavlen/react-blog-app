import React, { Component } from 'react';
import axios from "axios";

import './NewPost.css';

const AUTHORS = [
    "Max",
    "Nick",
    "John",
    "Andrew",
    "Jane"
]

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: ''
    }

    componentDidMount () {
        //console.log(this.props);
    }

    postDataHandler = () => {

        const post = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };

        axios.post("/posts", post)
            .then(response => {
                //console.log(response);
            })
    }

    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value={AUTHORS[0]}>{AUTHORS[0]}</option>
                    <option value={AUTHORS[1]}>{AUTHORS[1]}</option>
                    <option value={AUTHORS[2]}>{AUTHORS[2]}</option>
                    <option value={AUTHORS[3]}>{AUTHORS[3]}</option>
                    <option value={AUTHORS[4]}>{AUTHORS[4]}</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;