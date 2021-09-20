import _objectWithoutPropertiesLoose from "@babel/runtime/helpers/objectWithoutPropertiesLoose";
import _extends from "@babel/runtime/helpers/extends";

/** @jsx jsx */
import { jsx } from "@emotion/core";
import { forwardRef } from "react";
import Input from "../Input";
import { useColorMode } from "../ColorModeProvider";
import Box from "../Box";
import splitProps from "./utils";
import Icon from "../Icon/custom";
var SelectIconWrapper = forwardRef(function SelectIconWrapper(props, ref) {
  return jsx(Box, _extends({
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
var SelectInput = forwardRef(function SelectInput(_ref, ref) {
  var placeholder = _ref.placeholder,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["placeholder", "children"]);

  return jsx(Input, _extends({
    as: "select",
    appearance: "none",
    ref: ref,
    pr: "2rem",
    pb: "px",
    lineHeight: "normal"
  }, rest), placeholder && jsx("option", {
    value: ""
  }, placeholder), children);
});
var Select = forwardRef(function (_ref2, ref) {
  var rootProps = _ref2.rootProps,
      icon = _ref2.icon,
      _ref2$iconSize = _ref2.iconSize,
      iconSize = _ref2$iconSize === void 0 ? 5 : _ref2$iconSize,
      iconColor = _ref2.iconColor,
      props = _objectWithoutPropertiesLoose(_ref2, ["rootProps", "icon", "iconSize", "iconColor"]);

  var _useColorMode = useColorMode(),
      colorMode = _useColorMode.colorMode;

  var color = colorMode === "dark" ? "whiteAlpha.800" : "inherit";
  var opacity = props.isReadOnly || props.isDisabled ? 0.5 : null;

  var _splitProps = splitProps(props),
      root = _splitProps[0],
      select = _splitProps[1];

  return jsx(Box, _extends({
    position: "relative",
    width: "100%"
  }, root, rootProps), jsx(SelectInput, _extends({
    ref: ref,
    color: color
  }, select)), jsx(SelectIconWrapper, {
    opacity: opacity,
    color: iconColor || select.color || color
  }, jsx(Icon, {
    focusable: "false",
    "aria-hidden": "true",
    icon: icon || "chevron-down",
    size: iconSize
  })));
});
Select.displayName = "Select";
export default Select;