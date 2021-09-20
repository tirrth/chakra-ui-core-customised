"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _colorsUtils = require("../theme/colors-utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var baseProps = {
  userSelect: "none",
  border: "2px",
  rounded: "md",
  borderColor: "inherit",
  transition: "background-color 120ms, box-shadow 250ms"
};

var interactionProps = function interactionProps(_ref) {
  var color = _ref.color,
      colorMode = _ref.colorMode;
  var isDarkMode = colorMode === "dark";

  var _color = isDarkMode ? 200 : 500;

  return {
    color: "white",
    _checked: {
      bg: (0, _colorsUtils.get)(color, _color),
      borderColor: (0, _colorsUtils.get)(color, _color),
      color: isDarkMode ? "gray.900" : undefined
    },
    _checkedAndDisabled: {
      borderColor: isDarkMode ? "transparent" : "gray.200",
      bg: isDarkMode ? "whiteAlpha.300" : "gray.200",
      color: isDarkMode ? "whiteAlpha.500" : "gray.500"
    },
    _disabled: {
      bg: isDarkMode ? "whiteAlpha.100" : "gray.100",
      borderColor: isDarkMode ? "transparent" : "gray.100"
    },
    _focus: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: isDarkMode ? "red.300" : "red.500"
    }
  };
};

var useCheckboxStyle = function useCheckboxStyle(props) {
  var sizes = {
    lg: 5,
    md: 4,
    sm: props.type === "radio" ? 3 : "auto"
  };
  return _objectSpread({}, baseProps, {}, props.size && {
    rounded: "sm"
  }, {}, interactionProps(props), {
    size: sizes[props.size]
  });
};

var _default = useCheckboxStyle;
exports["default"] = _default;