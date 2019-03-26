import * as React from 'react';

// import './Image.css';

interface PropsType {
  title?: string;
  style?: any;
  lorem?: boolean;
  flex?: boolean;
}

interface StateType {}

export class Block extends React.Component<PropsType, StateType> {
  render() {
    const defaultStyle = {
      backgroundColor: '#eee',
      minHeight: 100,
      minWidth: 100,
      margin: 10,
      border: 'solid 1px #333',
      padding: 10
    };

    const loremIpsum =
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

    const containerStyle = this.props.flex ? { display: 'flex' } : {};

    return (
      <div style={{ ...defaultStyle, ...this.props.style }}>
        <div>{this.props.title || this.constructor.name}</div>
        <div style={containerStyle}>{this.props.children || (this.props.lorem && loremIpsum)}</div>
      </div>
    );
  }
}
