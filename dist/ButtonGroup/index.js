"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _core = require("@emotion/react");

var _react = require("react");

var _Box = _interopRequireDefault(require("../Box"));

var _utils = require("../utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ButtonGroup = (0, _react.forwardRef)(function (props, ref) {
  var size = props.size,
      variantColor = props.variantColor,
      variant = props.variant,
      isAttached = props.isAttached,
      _props$spacing = props.spacing,
      spacing = _props$spacing === void 0 ? 2 : _props$spacing,
      children = props.children,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(props, ["size", "variantColor", "variant", "isAttached", "spacing", "children"]);
  var validChildren = (0, _utils.cleanChildren)(children);
  var clones = validChildren.map(function (child, index) {
    var isFirst = index === 0;
    var isLast = index === validChildren.length - 1;
    return (0, _react.cloneElement)(child, _objectSpread({
      size: size || child.props.size,
      variantColor: child.props.variantColor || variantColor,
      variant: child.props.variant || variant,
      _focus: {
        boxShadow: "outline",
        zIndex: 1
      }
    }, !isLast && !isAttached && {
      mr: spacing
    }, {}, isFirst && isAttached && {
      roundedRight: 0
    }, {}, isLast && isAttached && {
      roundedLeft: 0
    }, {}, !isLast && isAttached && {
      borderRight: 0
    }, {}, !isFirst && !isLast && isAttached && {
      rounded: 0
    }));
  });
  return (0, _core.jsx)(_Box["default"], (0, _extends2["default"])({
    ref: ref,
    display: "inline-block"
  }, rest), clones);
});
var _default = ButtonGroup;
exports["default"] = _default;