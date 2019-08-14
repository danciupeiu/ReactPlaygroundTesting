import React from 'react';
import {mount} from 'enzyme';

import Root from 'Root';
import CommentBox from 'components/CommentBox';

let wrapped;
let val;
beforeEach(() => {
    wrapped = mount(<Root><CommentBox/></Root>);
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and a button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
});

describe('the text area', () => {

    beforeEach(() => {
        val = 'somevalue';
        wrapped.find('textarea').simulate('change', {target: {value: val}});
        wrapped.update();
    });

    it('allows input on the text area', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual(val);
    });

    it('allows submit and clears the text area', () => {
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });

});