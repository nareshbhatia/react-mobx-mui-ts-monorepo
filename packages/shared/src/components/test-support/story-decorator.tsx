import * as React from 'react';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { getTestTheme } from './get-test-theme';

const shellStyle: React.CSSProperties = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
};

export const StoryDecorator = (story: any) => (
    <MuiThemeProvider theme={getTestTheme()}>
        <div style={shellStyle}>{story()}</div>
    </MuiThemeProvider>
);
