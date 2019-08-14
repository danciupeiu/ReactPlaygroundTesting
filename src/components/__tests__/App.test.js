import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme';

import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import App from 'components/App';

it('shows the comment box', () => {
    const wrapped = shallow(<App/>);

    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows the comment list', () => {
    const wrapped = shallow(<App/>);

    expect(wrapped.find(CommentList).length).toEqual(1);
});