import _extends from "@babel/runtime/helpers/extends";
import _defineProperty from "@babel/runtime/helpers/defineProperty";
import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/** @jsx jsx */
import { jsx } from "@emotion/core";
import { cloneElement, forwardRef } from "react";
import Box from "../Box";
import { cleanChildren } from "../utils";
var ButtonGroup = forwardRef(function (props, ref) {
  var size = props.size,
      variantColor = props.variantColor,
      variant = props.variant,
      isAttached = props.isAttached,
      _props$spacing = props.spacing,
      spacing = _props$spacing === void 0 ? 2 : _props$spacing,
      children = props.children,
      rest = _objectWithoutPropertiesLoose(props, ["size", "variantColor", "variant", "isAttached", "spacing", "children"]);

  var validChildren = cleanChildren(children);
  var clones = validChildren.map(function (child, index) {
    var isFirst = index === 0;
    var isLast = index === validChildren.length - 1;
    return cloneElement(child, _objectSpread({
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
  return jsx(Box, _extends({
    ref: ref,
    display: "inline-block"
  }, rest), clones);
});
export default ButtonGroup;