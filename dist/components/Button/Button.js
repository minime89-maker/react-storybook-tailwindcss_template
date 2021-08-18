"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var label = _ref.label;
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    className: "bg-red-500 text-white text-xl py-4 px-8 rounded-md"
  }, label));
};

Button.propTypes = {
  label: _propTypes.default.string.isRequired
};
Button.defaultProps = {
  label: 'Button'
};
var _default = Button;
exports.default = _default;