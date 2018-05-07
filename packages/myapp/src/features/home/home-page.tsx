import * as React from 'react';
import { Header } from 'shared';

export class HomePage extends React.Component<{}, {}> {
    public render() {
        const styles = {
            content: {
                padding: 16
            }
        };

        return (
            <div>
                <Header>Home</Header>
                <div style={styles.content}>Hello World!</div>
            </div>
        );
    }
}
