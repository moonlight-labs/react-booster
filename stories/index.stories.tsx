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

storiesOf('UrlInput', module).add('basic', () => <UrlInput style={{ padding: 10 }} />);

storiesOf('Mock', module)
  .add('block', () => (
    <div>
      <Mock.Block />
      <Mock.Block title="Special Section" />
      <Mock.Block title="Stylized" style={{ background: 'lightblue', width: 200 }} />
      <Mock.Block title="Lorem" lorem />
      <Mock.Block title="Nested Flexbox" flex>
        <Mock.Block title="Section 1" lorem />
        <Mock.Block title="Section 2">
          <Mock.Block lorem />
        </Mock.Block>
      </Mock.Block>
    </div>
  ))
  .add('table', () => <Mock.Table />)
  .add('form', () => <Mock.Form />)
  .add('form with options', () => (
    <Mock.Form title={<h2>User Profile</h2>} fields={['name', 'address', 'height', 'weight', 'age']} />
  ));
