'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var universalParseUrl = require('universal-parse-url');
var tsDebounce = require('ts-debounce');

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

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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

// TODO
var GreenCheck = require('./images/green-check.svg');
var RedX = require('./images/red-x-2.svg');
var UrlInput = /** @class */ (function (_super) {
    __extends(UrlInput, _super);
    function UrlInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.inputRef = React.createRef();
        _this.debouncedFetch = tsDebounce.debounce(function (url) { return __awaiter(_this, void 0, void 0, function () {
            var error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.debug(url);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, fetch(url, {
                                mode: 'no-cors'
                            }).then(function (response) {
                                _this.setState({ validUrl: true, pending: false });
                            })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.setState({ validUrl: false, pending: false });
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); }, 250);
        _this.state = {
            validUrl: false,
            pending: true
        };
        _this.validateUrl = function () {
            var input = _this.inputRef.current;
            if (input) {
                var parsed = universalParseUrl.parseURL(input.value);
                if (parsed.host === window.location.host) {
                    _this.setState({ validUrl: false, pending: input.value.trim() == '' });
                    return;
                }
                _this.setState({ pending: true });
                _this.debouncedFetch(input.value);
            }
        };
        return _this;
    }
    UrlInput.prototype.render = function () {
        var _a = this.props, style = _a.style, props = __rest(_a, ["style"]);
        var dataUri = "url(\"" + (this.state.validUrl ? GreenCheck : RedX) + "\")";
        var inputStyle = this.state.pending
            ? style || {}
            : __assign({}, style, {
                backgroundImage: dataUri,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right',
                backgroundOrigin: 'content-box'
            });
        return React.createElement("input", __assign({ type: "url", style: inputStyle, onChange: this.validateUrl }, props, { ref: this.inputRef }));
    };
    return UrlInput;
}(React.Component));

// export { Image } from './Image';

var Mock = /** @class */ (function (_super) {
    __extends(Mock, _super);
    function Mock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mock.prototype.render = function () {
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
    return Mock;
}(React.Component));

var MockForm = /** @class */ (function (_super) {
    __extends(MockForm, _super);
    function MockForm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MockForm.prototype.render = function () {
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
    return MockForm;
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

var MockTable = /** @class */ (function (_super) {
    __extends(MockTable, _super);
    function MockTable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MockTable.prototype.dataForColumn = function (name) {
        return 'rando';
    };
    MockTable.prototype.render = function () {
        var _this = this;
        var columns = this.props.columns || ['name', 'email', 'phone'];
        var data = Array.from({ length: this.props.rows || 50 }, function () { return Math.floor(Math.random() * 10); });
        return (React.createElement("table", null,
            React.createElement("thead", null,
                React.createElement("tr", null, columns.map(function (column) { return (React.createElement("th", null, column)); }))),
            React.createElement("tbody", null, data.map(function () { return (React.createElement("tr", null, columns.map(function (column) { return (React.createElement("td", null, _this.dataForColumn(column))); }))); }))));
    };
    return MockTable;
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

// export { Image } from './Image';

exports.Image = Image;
exports.ActionButton = ActionButton;
exports.UrlInput = UrlInput;
exports.Mock = Mock;
