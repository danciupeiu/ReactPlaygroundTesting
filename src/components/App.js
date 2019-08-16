import React from 'react';
import {Link, Route} from 'react-router-dom';
import {connect} from "react-redux";

import CommentList from './CommentList';
import CommentBox from './CommentBox';
import * as actions from 'actions';

class App extends React.Component {

    renderButton() {
        let text = '';
        if (this.props.auth) {
            text = 'Sign out';
        } else {
            text = 'Sign in';
        }
        let newAuthState = !this.props.auth;
        return (
            <button onClick={() => this.props.changeAuth(newAuthState)}>{text}</button>
        )
    }

    renderHeader = () => {
        return (
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/post">Post comment</Link>
                </li>
                <li>
                    {this.renderButton()}
                </li>
            </ul>
        )
    };

    render() {
        return (
            <div>
                {this.renderHeader()}
                <Route path="/post" component={CommentBox}/>
                <Route path="/" exact component={CommentList}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
};

export default connect(mapStateToProps, actions)(App);