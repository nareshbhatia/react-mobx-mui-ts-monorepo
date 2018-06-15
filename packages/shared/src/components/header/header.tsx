import * as React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

export interface HeaderProps {
    children?: any;
}

export class Header extends React.Component<HeaderProps> {
    render() {
        const { children } = this.props;

        return (
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit">
                        {children}
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}
