import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Image } from '../src/Image';

storiesOf('Image', module).add('with text', () => <Image />);
// .add('with some emoji', () => (
//   <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
// ));
