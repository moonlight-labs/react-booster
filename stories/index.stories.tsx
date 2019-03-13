import * as React from 'react';
import { storiesOf } from '@storybook/react';
// import { Image } from '../src/Image';
import { ActionButton } from '../src/ActionButton';
import { UrlInput } from '../src/UrlInput';
import { Mock } from '../src/Mock';

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

storiesOf('UrlInput', module).add('basic', () => <UrlInput />);

storiesOf('Mock', module).add('basic', () => (
  <div>
    <Mock />
    <Mock title="Special Section" />
    <Mock title="Stylized" style={{ background: 'lightblue', width: 200 }} />
    <Mock title="Lorem" lorem />
  </div>
));
// .add('with some emoji', () => (
//   <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
// ));
