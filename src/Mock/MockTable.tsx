import * as React from 'react';

// import './Image.css';

interface PropsType {
  rows?: number;
  columns?: string[];
}

interface StateType {}

export class MockTable extends React.Component<PropsType, StateType> {
  dataForColumn(name: string) {
    return 'rando';
  }

  render() {
    const columns = this.props.columns || ['name', 'email', 'phone'];
    const data = Array.from({ length: this.props.rows || 50 }, () => Math.floor(Math.random() * 10));

    return (
      <table>
        <thead>
          <tr>
            {columns.map(column => (
              <th>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(() => (
            <tr>
              {columns.map(column => (
                <td>{this.dataForColumn(column)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
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
