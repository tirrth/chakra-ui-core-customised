"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _core = require("@emotion/core");

var _react = require("react");

var _Input = _interopRequireDefault(require("../Input"));

var _ColorModeProvider = require("../ColorModeProvider");

var _Box = _interopRequireDefault(require("../Box"));

var _utils = _interopRequireDefault(require("./utils"));

var _custom = _interopRequireDefault(require("../Icon/custom"));

/** @jsx jsx */
var SelectIconWrapper = (0, _react.forwardRef)(function SelectIconWrapper(props, ref) {
  return (0, _core.jsx)(_Box["default"], (0, _extends2["default"])({
    ref: ref,
    position: "absolute",
    display: "inline-flex",
    width: "1.5rem",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    right: "0.5rem",
    top: "50%",
    pointerEvents: "none",
    zIndex: 2,
    transform: "translateY(-50%)"
  }, props));
});
var SelectInput = (0, _react.forwardRef)(function SelectInput(_ref, ref) {
  var placeholder = _ref.placeholder,
      children = _ref.children,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["placeholder", "children"]);
  return (0, _core.jsx)(_Input["default"], (0, _extends2["default"])({
    as: "select",
    appearance: "none",
    ref: ref,
    pr: "2rem",
    pb: "px",
    lineHeight: "normal"
  }, rest), placeholder && (0, _core.jsx)("option", {
    value: ""
  }, placeholder), children);
});
var Select = (0, _react.forwardRef)(function (_ref2, ref) {
  var rootProps = _ref2.rootProps,
      icon = _ref2.icon,
      _ref2$iconSize = _ref2.iconSize,
      iconSize = _ref2$iconSize === void 0 ? 5 : _ref2$iconSize,
      iconColor = _ref2.iconColor,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_ref2, ["rootProps", "icon", "iconSize", "iconColor"]);

  var _useColorMode = (0, _ColorModeProvider.useColorMode)(),
      colorMode = _useColorMode.colorMode;

  var color = colorMode === "dark" ? "whiteAlpha.800" : "inherit";
  var opacity = props.isReadOnly || props.isDisabled ? 0.5 : null;

  var _splitProps = (0, _utils["default"])(props),
      root = _splitProps[0],
      select = _splitProps[1];

  return (0, _core.jsx)(_Box["default"], (0, _extends2["default"])({
    position: "relative",
    width: "100%"
  }, root, rootProps), (0, _core.jsx)(SelectInput, (0, _extends2["default"])({
    ref: ref,
    color: color
  }, select)), (0, _core.jsx)(SelectIconWrapper, {
    opacity: opacity,
    color: iconColor || select.color || color
  }, (0, _core.jsx)(_custom["default"], {
    focusable: "false",
    "aria-hidden": "true",
    icon: icon || "chevron-down",
    size: iconSize
  })));
});
Select.displayName = "Select";
var _default = Select;
exports["default"] = _default;