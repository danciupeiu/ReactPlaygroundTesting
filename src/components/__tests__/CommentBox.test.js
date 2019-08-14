import React from 'react';
import {mount} from 'enzyme';

import CommentBox from 'components/CommentBox';

let wrapped;
beforeEach(() => {
    wrapped = mount(<CommentBox/>);
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

it('allows input on the text area', () => {
    const val = 'somevalue';
    wrapped.find('textarea').simulate('change', {target: {value: val}});
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual(val);
});

it ('allows submit and clears the text area', () => {
    const val = 'val';
    wrapped.find('textarea').simulate('change', { target: { value: val}});
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
});
