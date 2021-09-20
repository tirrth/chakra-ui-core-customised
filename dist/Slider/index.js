"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.valueToPercent = valueToPercent;
exports.percentToValue = percentToValue;
exports.roundValueToStep = roundValueToStep;
exports.clampValue = clampValue;
exports["default"] = exports.SliderFilledTrack = exports.SliderTrack = exports.SliderThumb = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutPropertiesLoose"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _core = require("@emotion/core");

var _react = require("react");

var _Box = _interopRequireDefault(require("../Box"));

var _styles = _interopRequireDefault(require("./styles"));

var _PseudoBox = _interopRequireDefault(require("../PseudoBox"));

var _utils = require("../utils");

/**
 * Slider Component
 *
 * The following code is a derivative of the amazing work done by the Material UI team.
 * Original source: https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Slider/Slider.js
 */

/** @jsx jsx */
function valueToPercent(value, min, max) {
  return (value - min) * 100 / (max - min);
}

function percentToValue(percent, min, max) {
  return (max - min) * percent + min;
}

function makeValuePrecise(value, step) {
  var stepDecimalPart = step.toString().split(".")[1];
  var stepPrecision = stepDecimalPart ? stepDecimalPart.length : 0;
  return Number(value.toFixed(stepPrecision));
}

function roundValueToStep(value, step) {
  return makeValuePrecise(Math.round(value / step) * step, step);
}

function clampValue(val, min, max) {
  if (val > max) {
    return max;
  }

  if (val < min) {
    return min;
  }

  return val;
} ////////////////////////////////////////////////////////////////


var SliderThumb = (0, _react.forwardRef)(function (props, ref) {
  var _useSliderContext = useSliderContext(),
      thumbRef = _useSliderContext.thumbRef,
      isDisabled = _useSliderContext.isDisabled,
      onFocus = _useSliderContext.onFocus,
      onKeyDown = _useSliderContext.onThumbKeyDown,
      min = _useSliderContext.min,
      max = _useSliderContext.max,
      valueText = _useSliderContext.valueText,
      orientation = _useSliderContext.orientation,
      trackPercent = _useSliderContext.trackPercent,
      size = _useSliderContext.size,
      color = _useSliderContext.color,
      value = _useSliderContext.value,
      ariaLabelledBy = _useSliderContext.ariaLabelledBy;

  var _useSliderStyle = (0, _styles["default"])({
    trackPercent: trackPercent,
    orientation: orientation,
    size: size,
    color: color
  }),
      thumbStyle = _useSliderStyle.thumbStyle;

  var sliderThumbRef = (0, _utils.useForkRef)(thumbRef, ref);
  return (0, _core.jsx)(_PseudoBox["default"], (0, _extends2["default"])({
    "data-slider-thumb": "",
    d: "flex",
    alignItems: "center",
    outline: "none",
    justifyContent: "center",
    onFocus: onFocus,
    ref: sliderThumbRef,
    role: "slider",
    tabIndex: isDisabled ? undefined : 0,
    "aria-disabled": isDisabled,
    "aria-valuemin": min,
    "aria-valuetext": valueText,
    "aria-orientation": orientation,
    "aria-valuenow": value,
    "aria-valuemax": max,
    "aria-labelledby": ariaLabelledBy,
    onKeyDown: onKeyDown
  }, thumbStyle, props));
});
exports.SliderThumb = SliderThumb;
SliderThumb.displayName = "SliderThumb"; ////////////////////////////////////////////////////////////////

var SliderTrack = function SliderTrack(props) {
  var _useSliderContext2 = useSliderContext(),
      trackRef = _useSliderContext2.trackRef,
      isDisabled = _useSliderContext2.isDisabled,
      context = (0, _objectWithoutPropertiesLoose2["default"])(_useSliderContext2, ["trackRef", "isDisabled"]);

  var _useSliderStyle2 = (0, _styles["default"])(context),
      trackStyle = _useSliderStyle2.trackStyle;

  return (0, _core.jsx)(_Box["default"], (0, _extends2["default"])({
    "data-slider-track": "",
    "aria-disabled": isDisabled,
    ref: trackRef
  }, trackStyle, props));
}; ////////////////////////////////////////////////////////////////


exports.SliderTrack = SliderTrack;

var SliderFilledTrack = function SliderFilledTrack(props) {
  var _useSliderContext3 = useSliderContext(),
      isDisabled = _useSliderContext3.isDisabled,
      context = (0, _objectWithoutPropertiesLoose2["default"])(_useSliderContext3, ["isDisabled"]);

  var _useSliderStyle3 = (0, _styles["default"])(context),
      filledTrackStyle = _useSliderStyle3.filledTrackStyle;

  return (0, _core.jsx)(_PseudoBox["default"], (0, _extends2["default"])({
    "aria-disabled": isDisabled,
    "data-slider-filled-track": ""
  }, filledTrackStyle, props));
}; ////////////////////////////////////////////////////////////////


exports.SliderFilledTrack = SliderFilledTrack;
var SliderContext = (0, _react.createContext)();

var useSliderContext = function useSliderContext() {
  return (0, _react.useContext)(SliderContext);
};

var Slider = (0, _react.forwardRef)(function (_ref, ref) {
  var controlledValue = _ref.value,
      defaultValue = _ref.defaultValue,
      onChange = _ref.onChange,
      onKeyDown = _ref.onKeyDown,
      onFocus = _ref.onFocus,
      _onBlur = _ref.onBlur,
      onMouseDown = _ref.onMouseDown,
      isDisabled = _ref.isDisabled,
      _ref$max = _ref.max,
      max = _ref$max === void 0 ? 100 : _ref$max,
      _ref$min = _ref.min,
      min = _ref$min === void 0 ? 0 : _ref$min,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? 1 : _ref$step,
      ariaLabelledBy = _ref["aria-labelledby"],
      ariaLabel = _ref["aria-label"],
      ariaValueText = _ref["aria-valuetext"],
      _ref$orientation = _ref.orientation,
      orientation = _ref$orientation === void 0 ? "horizontal" : _ref$orientation,
      getAriaValueText = _ref.getAriaValueText,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? "md" : _ref$size,
      _ref$color = _ref.color,
      color = _ref$color === void 0 ? "blue" : _ref$color,
      name = _ref.name,
      id = _ref.id,
      children = _ref.children,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["value", "defaultValue", "onChange", "onKeyDown", "onFocus", "onBlur", "onMouseDown", "isDisabled", "max", "min", "step", "aria-labelledby", "aria-label", "aria-valuetext", "orientation", "getAriaValueText", "size", "color", "name", "id", "children"]);

  var _useRef = (0, _react.useRef)(controlledValue != null),
      isControlled = _useRef.current;

  var _useState = (0, _react.useState)(defaultValue || 0),
      value = _useState[0],
      setValue = _useState[1];

  var _value = isControlled ? controlledValue : value;

  var actualValue = clampValue(_value, min, max);
  var trackPercent = valueToPercent(actualValue, min, max);

  var _useSliderStyle4 = (0, _styles["default"])({
    trackPercent: trackPercent,
    orientation: orientation,
    size: size,
    color: color
  }),
      rootStyle = _useSliderStyle4.rootStyle;

  var trackRef = (0, _react.useRef)();
  var thumbRef = (0, _react.useRef)();

  var getNewValue = function getNewValue(event) {
    if (trackRef.current) {
      var _trackRef$current$get = trackRef.current.getBoundingClientRect(),
          left = _trackRef$current$get.left,
          width = _trackRef$current$get.width;

      var _ref2 = event.touches ? event.touches[0] : event,
          clientX = _ref2.clientX;

      var diffX = clientX - left;
      var percent = diffX / width;
      var newValue = percentToValue(percent, min, max);

      if (step) {
        newValue = roundValueToStep(newValue, step);
      }

      newValue = clampValue(newValue, min, max);
      return newValue;
    }
  };

  var updateValue = (0, _react.useCallback)(function (newValue) {
    if (!isControlled) {
      setValue(newValue);
    }

    if (onChange) {
      onChange(newValue);
    }
  }, [isControlled, onChange]);

  var handleThumbKeyDown = function handleThumbKeyDown(event) {
    var flag = false;
    var newValue;
    var tenSteps = (max - min) / 10;

    switch (event.key) {
      case "ArrowLeft":
      case "ArrowDown":
        newValue = actualValue - step;
        flag = true;
        break;

      case "ArrowRight":
      case "ArrowUp":
        newValue = actualValue + step;
        flag = true;
        break;

      case "PageDown":
        newValue = actualValue - tenSteps;
        flag = true;
        break;

      case "PageUp":
        newValue = actualValue + tenSteps;
        flag = true;
        break;

      case "Home":
        newValue = min;
        flag = true;
        break;

      case "End":
        newValue = max;
        flag = true;
        break;

      default:
        return;
    }

    if (flag) {
      event.preventDefault();
      event.stopPropagation();
    }

    if (step) {
      newValue = roundValueToStep(newValue, step);
    }

    newValue = clampValue(newValue, min, max);
    updateValue(newValue);
    onKeyDown && onKeyDown(event);
  };

  var handleMouseUp = function handleMouseUp() {
    document.body.removeEventListener("mousemove", handleMouseMove);
    document.body.removeEventListener("touchmove", handleMouseMove);
    document.body.removeEventListener("mouseup", handleMouseUp);
    document.body.removeEventListener("touchend", handleMouseUp);
  }; // TODO: Optimize this mouseMove event


  var handleMouseMove = function handleMouseMove(event) {
    var newValue = getNewValue(event);
    updateValue(newValue);
  };

  var handleMouseDown = function handleMouseDown(event) {
    if (isDisabled) return;
    onMouseDown && onMouseDown(event);
    event.preventDefault();
    var newValue = getNewValue(event);

    if (newValue !== actualValue) {
      updateValue(newValue);
    }

    document.body.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("touchmove", handleMouseMove);
    document.body.addEventListener("mouseup", handleMouseUp);
    document.body.addEventListener("touchend", handleMouseUp);
    thumbRef.current && thumbRef.current.focus();
  };

  var valueText = getAriaValueText ? getAriaValueText(actualValue) : ariaValueText;
  var context = {
    trackRef: trackRef,
    thumbRef: thumbRef,
    onThumbKeyDown: handleThumbKeyDown,
    onFocus: onFocus,
    trackPercent: trackPercent,
    ariaLabelledBy: ariaLabelledBy,
    orientation: orientation,
    isDisabled: isDisabled,
    size: size,
    color: color,
    min: min,
    max: max,
    valueText: valueText,
    value: actualValue
  };
  return (0, _core.jsx)(SliderContext.Provider, {
    value: context
  }, (0, _core.jsx)(_Box["default"], (0, _extends2["default"])({
    role: "presentation",
    tabIndex: "-1",
    onMouseDown: handleMouseDown,
    onTouchStart: handleMouseDown,
    onMouseLeave: handleMouseUp,
    onTouchEnd: handleMouseUp,
    onBlur: function onBlur(event) {
      handleMouseUp();
      _onBlur && _onBlur(event);
    },
    py: 3,
    "aria-disabled": isDisabled,
    ref: ref,
    css: {
      touchAction: "none"
    }
  }, rootStyle, rest), children, (0, _core.jsx)("input", {
    type: "hidden",
    value: actualValue,
    name: name,
    id: id
  })));
});
Slider.displayName = "Slider";
var _default = Slider;
exports["default"] = _default;