import * as React from 'react';

import { storiesOf } from '@storybook/react';
import { StoryDecorator } from '../test-support/story-decorator';
import { Header } from './header';

storiesOf('Header', module)
    .addDecorator(StoryDecorator)
    .add('with title', () => <Header>React Template</Header>);
