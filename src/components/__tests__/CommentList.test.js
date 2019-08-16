import React from 'react';
import {mount} from 'enzyme';

import Root from 'Root';
import CommentList from 'components/CommentList';

let wrapped;
beforeEach(() => {

    const initialState = {
        comments: ['comment 1', 'comment 2']
    };

    wrapped = mount(
        <Root initialState={initialState}>
            <CommentList/>
        </Root>);
});

afterEach(() => {
    wrapped.unmount();
});

it('has one LI per comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
});

it('shows the text for each comment', () => {
    let text = wrapped.render().text();
    expect(text).toContain('comment 1');
    expect(text).toContain('comment 2');
});
