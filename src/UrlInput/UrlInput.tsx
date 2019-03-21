// TODO
// Set a short timeout.  ie http://cnn.co never returns

import * as React from 'react';
import { parseURL } from 'universal-parse-url';
import { debounce } from 'ts-debounce';

const GreenCheck = require('./images/green-check.svg') as string;
const RedX = require('./images/red-x-2.svg') as string;

interface PropsType {
  style?: React.CSSProperties;
}

interface StateType {
  validUrl: boolean;
  pending: boolean;
}

export class UrlInput extends React.Component<PropsType, StateType> {
  private inputRef = React.createRef<HTMLInputElement>();
  private debouncedFetch = debounce(async url => {
    console.debug(url);
    try {
      await fetch(url, {
        mode: 'no-cors'
      }).then(response => {
        this.setState({ validUrl: true, pending: false });
      });
    } catch (error) {
      this.setState({ validUrl: false, pending: false });
    }
  }, 250);

  public readonly state = {
    validUrl: false,
    pending: true
  };

  validateUrl = () => {
    const input = this.inputRef.current;

    if (input) {
      const parsed = parseURL(input.value);

      if (parsed.host === window.location.host) {
        this.setState({ validUrl: false, pending: input.value.trim() == '' });
        return;
      }

      this.setState({ pending: true });
      this.debouncedFetch(input.value);
    }
  };

  render() {
    const { style, ...props } = this.props;
    const dataUri = `url("${this.state.validUrl ? GreenCheck : RedX}")`;

    const inputStyle = this.state.pending
      ? style || {}
      : {
          ...style,
          ...{
            backgroundImage: dataUri,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right',
            backgroundOrigin: 'content-box'
          }
        };

    return <input type="url" style={inputStyle} onChange={this.validateUrl} {...props} ref={this.inputRef} />;
  }
}
