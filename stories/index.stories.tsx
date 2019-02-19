import * as React from 'react';
import { storiesOf } from '@storybook/react';
// import { Image } from '../src/Image';
import { ActionButton } from '../src/ActionButton';

class ActionButtonWrapper extends React.Component {
  private actionButton: any;

  render() {
    return (
      <ActionButton
        duringContent={'Processing...'}
        afterContent={'Payment complete!'}
        ref={(c: any) => {
          this.actionButton = c;
        }}
        onClick={() =>
          // Do something that could take a little time, then call .done()
          setTimeout(() => {
            this.actionButton.done();
            // Reset the button after a couple more seconds - call reset()
            setTimeout(() => {
              this.actionButton.reset();
            }, 2000);
          }, 2000)
        }
      >
        Pay Now
      </ActionButton>
    );
  }
}

storiesOf('ActionButton', module).add('basic', () => <ActionButtonWrapper />);
// .add('with some emoji', () => (
//   <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
// ));
