import * as React from 'react';

interface PropsType {
  children: React.ReactNode;
  duringContent?: React.ReactNode;
  afterContent?: React.ReactNode;
  onClick: Function;
  disabled?: boolean;

  // children: JSX.Element;
  // name: string;
}

interface StateType {
  disabled: boolean;
  status: string;

  // children: JSX.Element;
  // duringContent?: JSX.Element;
  // afterContent?: JSX.Element;
  // onClick: PropTypes.func.isRequired;
  // children: JSX.Element;
  // name: string;
}

export class ActionButton extends React.Component<PropsType & React.HTMLProps<HTMLButtonElement>, StateType> {
  static states: { [key: string]: string } = {
    init: 'init',
    during: 'during',
    done: 'done'
  };

  mounted: boolean = false;

  // export declare type States = 'init' | 'during' | 'done';

  public readonly state = {
    disabled: false,
    status: ActionButton.states.init
  };

  // constructor(props) {
  //   super(props);
  //   this.state = { disabled: false, status: ActionButton.states.init };
  // }

  componentDidMount() {
    this.mounted = true;
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  done(): void {
    if (this.mounted) this.setState({ status: ActionButton.states.done });
  }

  reset(milliseconds: number = 4000): void {
    setTimeout(() => {
      if (this.mounted) this.setState({ disabled: false, status: ActionButton.states.init });
    }, milliseconds);
  }

  // onClick = (evt: event) => {
  //   this.setState({ disabled: true, status: ActionButton.states.during });
  //   this.props.onClick(evt);
  // };

  renderContents() {
    switch (this.state.status) {
      case ActionButton.states.during:
        return this.props.duringContent || this.props.children;

      case ActionButton.states.done:
        return this.props.afterContent || this.props.children;

      default:
        return this.props.children;
    }
  }

  render() {
    const { children, duringContent, afterContent, onClick, ...props } = this.props;

    return (
      <button
        {...props}
        disabled={this.props.disabled || this.state.disabled}
        onClick={event => {
          this.setState({ disabled: true, status: ActionButton.states.during }, () => this.props.onClick(event));
        }}
      >
        {this.renderContents()}
      </button>
    );
  }
}
