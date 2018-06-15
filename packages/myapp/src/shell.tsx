import * as React from 'react';

import { WithStyles, withStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { inject } from 'mobx-react';
import { RouterView, ViewMap } from 'mobx-state-router';
import { HomePage } from './features/home/home-page';
import { NotFoundPage } from './features/not-found-page';
import { RootStore } from './stores/root.store';

const styles = (theme: Theme) => ({
    '@global': {
        html: {
            height: '100%',
            boxSizing: 'border-box' as 'border-box'
        },
        '*, *:before, *:after': {
            boxSizing: 'inherit' as 'inherit'
        },
        body: {
            height: '100%',
            margin: 0,
            background: theme.palette.background.default,
            fontFamily: theme.typography.fontFamily,
            fontSize: theme.typography.fontSize,
            color: theme.palette.text.primary,

            // Helps fonts on OSX look more consistent with other systems
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale',

            // Use momentum-based scrolling on iOS devices
            WebkitOverflowScrolling: 'touch' as 'touch'
        },
        '#root': {
            height: '100%',
            display: 'flex',
            flexDirection: 'column' as 'column'
        }
    },
    root: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column' as 'column'
    }
});

const viewMap: ViewMap = {
    home: <HomePage />,
    notFound: <NotFoundPage />
};

const decorate = withStyles(styles);

export interface ShellProps {
    rootStore: RootStore;
}

export const Shell = decorate<{}>(
    inject('rootStore')(
        class extends React.Component<
            ShellProps & WithStyles<'@global' | 'root'>
        > {
            public render() {
                const {
                    classes,
                    rootStore: { routerStore }
                } = this.props;

                return (
                    <div className={classes.root}>
                        <RouterView
                            routerStore={routerStore}
                            viewMap={viewMap}
                        />
                    </div>
                );
            }
        }
    )
);
