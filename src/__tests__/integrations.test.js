import React from 'react';
import {mount} from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name: 'comment 1'}, {name: 'comment 2'}]
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
    const wrapper = mount(
        <Root>
            <App/>
        </Root>);
    wrapper.find('.fetch-comments').simulate('click');
    moxios.wait(() => {
        wrapper.update();
        expect(wrapper.find('li').length).toEqual(2);
        done();
        wrapper.unmount();
    });

});
