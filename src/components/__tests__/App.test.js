import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import CommentBox from '../CommentBox';
import CommentList from '../CommentList';
import App from '../App';

it('shows the comment box', () => {
    const wrapped = shallow(<App/>);

    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows the comment list', () => {
    const wrapped = shallow(<App/>);

    expect(wrapped.find(CommentList).length).toEqual(1);
});