'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

// import * as ReactDOM from 'react-dom';
// import './Image.css';
var Image = function () { return React.createElement("div", null, "Image"); };

// export { Image } from './Image';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

var ActionButton = /** @class */ (function (_super) {
    __extends(ActionButton, _super);
    function ActionButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // export declare type States = 'init' | 'during' | 'done';
        _this.state = {
            disabled: false,
            status: ActionButton.states.init
        };
        return _this;
    }
    // constructor(props) {
    //   super(props);
    //   this.state = { disabled: false, status: ActionButton.states.init };
    // }
    ActionButton.prototype.done = function () {
        this.setState({ status: ActionButton.states.done });
    };
    ActionButton.prototype.reset = function () {
        this.setState({ disabled: false, status: ActionButton.states.init });
    };
    // onClick = (evt: event) => {
    //   this.setState({ disabled: true, status: ActionButton.states.during });
    //   this.props.onClick(evt);
    // };
    ActionButton.prototype.renderContents = function () {
        switch (this.state.status) {
            case ActionButton.states.during:
                return this.props.duringContent || this.props.children;
            case ActionButton.states.done:
                return this.props.afterContent || this.props.children;
            default:
                return this.props.children;
        }
    };
    ActionButton.prototype.render = function () {
        var _this = this;
        var _a = this.props, children = _a.children, duringContent = _a.duringContent, afterContent = _a.afterContent, onClick = _a.onClick, props = __rest(_a, ["children", "duringContent", "afterContent", "onClick"]);
        return (React.createElement("button", __assign({}, props, { disabled: this.state.disabled, onClick: function (event) {
                _this.setState({ disabled: true, status: ActionButton.states.during });
                _this.props.onClick(event);
            } }), this.renderContents()));
    };
    ActionButton.states = {
        init: 'init',
        during: 'during',
        done: 'done'
    };
    return ActionButton;
}(React.Component));

// export { Image } from './Image';

var Block = /** @class */ (function (_super) {
    __extends(Block, _super);
    function Block() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Block.prototype.render = function () {
        var defaultStyle = {
            backgroundColor: '#eee',
            minHeight: 100,
            minWidth: 100,
            margin: 10,
            border: 'solid 1px #333',
            padding: 10
        };
        var loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
        var containerStyle = this.props.flex ? { display: 'flex' } : {};
        return (React.createElement("div", { style: __assign({}, defaultStyle, this.props.style) },
            React.createElement("div", null, this.props.title || this.constructor.name),
            React.createElement("div", { style: containerStyle }, this.props.children || (this.props.lorem && loremIpsum))));
    };
    return Block;
}(React.Component));

var Form = /** @class */ (function (_super) {
    __extends(Form, _super);
    function Form() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Form.prototype.render = function () {
        var defaultStyle = {
        // backgroundColor: '#eee',
        // minHeight: 100,
        // minWidth: 100,
        // margin: 10,
        // border: 'solid 1px #333',
        // padding: 10
        };
        var defaultFields = ['name', 'email', 'phone'];
        return (React.createElement("form", { style: __assign({}, defaultStyle, this.props.style) },
            this.props.title,
            (this.props.fields || defaultFields).map(function (field) { return (React.createElement("div", null,
                React.createElement("label", null, field),
                React.createElement("input", { name: "{field}" }))); }),
            React.createElement("input", { className: "button-primary", type: "submit", value: "Send" })));
    };
    return Form;
}(React.Component));
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

var Table = /** @class */ (function (_super) {
    __extends(Table, _super);
    function Table() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Table.prototype.dataForColumn = function (name) {
        return 'rando';
    };
    Table.prototype.render = function () {
        var _this = this;
        var columns = this.props.columns || ['name', 'email', 'phone'];
        var data = Array.from({ length: this.props.rows || 50 }, function () { return Math.floor(Math.random() * 10); });
        return (React.createElement("table", null,
            React.createElement("thead", null,
                React.createElement("tr", null, columns.map(function (column) { return (React.createElement("th", null, column)); }))),
            React.createElement("tbody", null, data.map(function () { return (React.createElement("tr", null, columns.map(function (column) { return (React.createElement("td", null, _this.dataForColumn(column))); }))); }))));
    };
    return Table;
}(React.Component));
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

// export const Todo: React.SFC<propsType> = props => {
var Todo = /** @class */ (function (_super) {
    __extends(Todo, _super);
    function Todo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Todo.prototype.render = function () {
        var props = this.props;
        var doneStyle = { color: '#aaa', textDecoration: 'line-through', fontSize: '75%' };
        var hiStyle = { fontWeight: 'bold' };
        var style = __assign({}, (props.done && doneStyle), (props.hi && hiStyle));
        return React.createElement("li", { style: style }, props.children);
    };
    return Todo;
}(React.Component));

var Mock = /** @class */ (function () {
    function Mock() {
    }
    Mock.Block = Block;
    Mock.Form = Form;
    Mock.Table = Table;
    Mock.Todo = Todo;
    return Mock;
}());

exports.ActionButton = ActionButton;
exports.Image = Image;
exports.Mock = Mock;
