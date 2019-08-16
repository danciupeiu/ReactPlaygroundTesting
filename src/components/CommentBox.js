import React from 'react';
import {saveComment,fetchComments} from 'actions';
import {connect} from "react-redux";

class CommentBox extends React.Component {

    state = {comment: ''};

    handleChange = (event) => {
        this.setState({comment: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({comment: ''});
        this.props.saveComment(this.state.comment);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>

                    <h4>Add a comment</h4>
                    <textarea
                        onChange={this.handleChange}
                        value={this.state.comment}/>
                    <div>
                        <button>Submit Comment</button>
                    </div>

                </form>
                <button
                    onClick={this.props.fetchComments}>
                    Fetch comments
                </button>
            </div>
        )
    }

}

export default connect(null, {saveComment, fetchComments})(CommentBox);