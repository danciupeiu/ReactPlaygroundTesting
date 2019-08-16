import React from 'react';
import {fetchComments, saveComment} from 'actions';
import {connect} from "react-redux";
import requireAuth from 'components/requireAuth';

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
        if (this.props.auth) {

        }
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
                <button className="fetch-comments"
                        onClick={this.props.fetchComments}>
                    Fetch comments
                </button>
            </div>
        )
    }

}

export default connect(null, {saveComment, fetchComments})(requireAuth(CommentBox));