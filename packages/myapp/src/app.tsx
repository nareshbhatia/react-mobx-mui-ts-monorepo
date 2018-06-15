import * as React from 'react';

import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { Provider } from 'mobx-react';
import { HistoryAdapter } from 'mobx-state-router';
import { getTestTheme } from 'shared';
import { Shell } from './shell';
import { RootStore } from './stores/root.store';
import { history } from './utils/history';

const theme = getTestTheme();
const rootStore = new RootStore();
rootStore.init();

// Observe history changes
const historyAdapter = new HistoryAdapter(rootStore.routerStore, history);
historyAdapter.observeRouterStateChanges();

export class App extends React.Component<{}, {}> {
    public render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Provider rootStore={rootStore}>
                    <Shell />
                </Provider>
            </MuiThemeProvider>
        );
    }
}
