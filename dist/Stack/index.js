"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _react = require("react");

var _core = require("@emotion/react");

var _Flex = _interopRequireDefault(require("../Flex"));

var _Box = _interopRequireDefault(require("../Box"));

/** @jsx jsx */
// TODO: Reduce complexity by deprecating isInline and isReversed prop
var Stack = (0, _react.forwardRef)(function (_ref, ref) {
  var direction = _ref.direction,
      _ref$isInline = _ref.isInline,
      isInline = _ref$isInline === void 0 ? false : _ref$isInline,
      _ref$isReversed = _ref.isReversed,
      isReversed = _ref$isReversed === void 0 ? false : _ref$isReversed,
      children = _ref.children,
      align = _ref.align,
      justify = _ref.justify,
      _ref$spacing = _ref.spacing,
      spacing = _ref$spacing === void 0 ? 2 : _ref$spacing,
      shouldWrapChildren = _ref.shouldWrapChildren,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["direction", "isInline", "isReversed", "children", "align", "justify", "spacing", "shouldWrapChildren"]);

  var _isReversed = isReversed || direction && direction.endsWith("reverse");

  var _isInline = isInline || direction && direction.startsWith("row");

  var _direction;

  if (_isInline) {
    _direction = "row";
  }

  if (_isReversed) {
    _direction = isInline ? "row-reverse" : "column-reverse";
  }

  if (direction) {
    _direction = direction;
  }

  if (!_isInline && !_isReversed && !direction) {
    _direction = "column";
  }

  var validChildrenArray = _react.Children.toArray(children).filter(_react.isValidElement);

  return (0, _core.jsx)(_Flex["default"], (0, _extends2["default"])({
    align: align,
    justify: justify,
    direction: _direction
  }, rest, {
    ref: ref
  }), validChildrenArray.map(function (child, index) {
    var _ref2, _ref3;

    var isLastChild = validChildrenArray.length === index + 1;
    var spacingProps = _isInline ? (_ref2 = {}, _ref2[_isReversed ? "ml" : "mr"] = isLastChild ? null : spacing, _ref2) : (_ref3 = {}, _ref3[_isReversed ? "mt" : "mb"] = isLastChild ? null : spacing, _ref3);

    if (shouldWrapChildren) {
      return (0, _core.jsx)(_Box["default"], (0, _extends2["default"])({
        d: "inline-block"
      }, spacingProps, {
        key: "stack-box-wrapper-" + index
      }), child);
    }

    return (0, _react.cloneElement)(child, spacingProps);
  }));
});
var _default = Stack;
exports["default"] = _default;