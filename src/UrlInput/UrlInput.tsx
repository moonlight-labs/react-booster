import * as React from 'react';

const GreenCheck = require('./images/green-check.svg') as string;
const RedX = require('./images/red-x.svg') as string;

// import RedX from '../images/red-x.svg';
// Features
// validate format or validate exists

interface PropsType {
  // children: React.ReactNode;
  // duringContent?: React.ReactNode;
  // afterContent?: React.ReactNode;
  // onClick: Function;
  // children: JSX.Element;
  // name: string;
}

interface StateType {
  valid: boolean;
}

export class UrlInput extends React.Component<PropsType, StateType> {
  public readonly state = {
    valid: true
  };

  validate = () => {
    this.setState({ valid: false });
  };

  render() {
    const { ...props } = this.props;
    // const dataUri = `url("data:image/svg+xml,${this.state.valid ? GreenCheck : RedX}")`;
    const dataUri = `url("${this.state.valid ? GreenCheck : RedX}")`;

    const style = {
      backgroundImage: dataUri,
      backgroundSize: '16px 16px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right'
    };

    return <input type="url" style={style} onBlur={this.validate} {...props} />;
  }
}
