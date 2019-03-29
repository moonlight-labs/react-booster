import * as React from 'react';

interface PropsType {
  done?: boolean;
  hi?: boolean;
  lo?: boolean;
  children: React.ReactNode;
}

// export const Todo: React.SFC<propsType> = props => {
export class Todo extends React.Component<PropsType> {
  render() {
    const props = this.props;
    const doneStyle = { color: '#aaa', textDecoration: 'line-through', fontSize: '75%' };
    const hiStyle = { fontWeight: 'bold' };

    const style = { ...(props.done && doneStyle), ...(props.hi && hiStyle) };
    return <li style={style}>{props.children}</li>;
  }
}
