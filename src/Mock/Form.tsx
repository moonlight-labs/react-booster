import * as React from 'react';

// import './Image.css';

interface PropsType {
  title?: JSX.Element;
  style?: any;
  fields?: string[];
}

interface StateType {}

export class Form extends React.Component<PropsType, StateType> {
  render() {
    const defaultStyle = {
      // backgroundColor: '#eee',
      // minHeight: 100,
      // minWidth: 100,
      // margin: 10,
      // border: 'solid 1px #333',
      // padding: 10
    };

    const defaultFields = ['name', 'email', 'phone'];

    return (
      <form style={{ ...defaultStyle, ...this.props.style }}>
        {this.props.title}
        {(this.props.fields || defaultFields).map(field => (
          <div>
            <label>{field}</label>
            <input name="{field}" />
          </div>
        ))}
        {/* <button type="submit">Save</button> */}
        <input className="button-primary" type="submit" value="Send" />
      </form>
    );
  }
}

// export class Placeholder extends React.Component {
//   static propTypes = {
//     backgroundColor: PropTypes.string,
//     title: PropTypes.string,
//     minHeight: PropTypes.number,
//     minWidth: PropTypes.number,
//     children: PropTypes.node
//   };

//   render() {
//     let generalStyle = {
//       backgroundColor: this.props.backgroundColor || '#eee',
//       minHeight: this.props.minHeight || 100,
//       minWidth: this.props.minWidth || 100,
//       marginBottom: 20,
//       border: 'solid 1px #333',
//       padding: 10
//     };
//     return (
//       <div style={generalStyle}>
//         <div>{this.props.title || this.constructor.name}</div>
//         {this.props.children}
//       </div>
//     );
//   }
// }
