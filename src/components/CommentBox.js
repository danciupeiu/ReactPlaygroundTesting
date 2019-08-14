import React from 'react';
import {connect} from "react-redux";
import * as actions from 'actions';

class CommentBox extends React.Component {

    state = {comment: ''};

    handleChange = (event) => {
        this.setState({comment: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({comment: ''});
        // this.props.saveComment(this.state.comment);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h4>Add a comment</h4>
                <textarea
                    onChange={this.handleChange}
                    value={this.state.comment}/>
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        )
    }

}

export default CommentBox;