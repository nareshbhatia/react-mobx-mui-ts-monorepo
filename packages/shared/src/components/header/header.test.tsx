import * as React from 'react';

import { mount } from 'enzyme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { getTestTheme } from '../test-support/get-test-theme';
import { Header } from './header';

test('Header renders specified title', () => {
    const wrapper = mount(
        <MuiThemeProvider theme={getTestTheme()}>
            <Header>React Template</Header>
        </MuiThemeProvider>
    );
    expect(wrapper.find(Header).text()).toEqual('React Template');
});
