import _extends from "@babel/runtime/helpers/extends";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";

/** @jsx jsx */
import { forwardRef } from "react";
import { jsx } from "@emotion/core";
import { Children, cloneElement, isValidElement } from "react";
import Flex from "../Flex";
import Box from "../Box"; // TODO: Reduce complexity by deprecating isInline and isReversed prop

var Stack = forwardRef(function (_ref, ref) {
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
      rest = _objectWithoutPropertiesLoose(_ref, ["direction", "isInline", "isReversed", "children", "align", "justify", "spacing", "shouldWrapChildren"]);

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

  var validChildrenArray = Children.toArray(children).filter(isValidElement);
  return jsx(Flex, _extends({
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
      return jsx(Box, _extends({
        d: "inline-block"
      }, spacingProps, {
        key: "stack-box-wrapper-" + index
      }), child);
    }

    return cloneElement(child, spacingProps);
  }));
});
export default Stack;