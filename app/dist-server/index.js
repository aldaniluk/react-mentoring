module.exports =
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pages/404/Page404.jsx":
/*!***********************************!*\
  !*** ./src/pages/404/Page404.jsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page404": () => (/* binding */ Page404)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/VARIABLES */ "./src/styles/VARIABLES.js");
/* harmony import */ var _globalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @globalComponents */ "./src/pages/components/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    background-color: ", ";\n    text-align: center;\n    padding: 350px 0;\n"])), _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__.VARIABLES.darkgrey);
var Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    color: ", ";\n    font-size: 40px;\n    padding: 50px;\n"])), _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__.VARIABLES.red);

function Page404() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Text, {
      children: "Page not found."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.NavLink, {
      to: "/",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_2__.TransparentButton, {
        children: "GO BACK HOME"
      })
    })]
  });
}



/***/ }),

/***/ "./src/pages/App.jsx":
/*!***************************!*\
  !*** ./src/pages/App.jsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "App": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/AppContainer */ "./src/pages/components/AppContainer.jsx");
/* harmony import */ var _components_NavigationMap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/NavigationMap */ "./src/pages/components/NavigationMap.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




function App() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_AppContainer__WEBPACK_IMPORTED_MODULE_0__.AppContainer, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_NavigationMap__WEBPACK_IMPORTED_MODULE_1__.NavigationMap, {})
  });
}



/***/ }),

/***/ "./src/pages/components/AppContainer.jsx":
/*!***********************************************!*\
  !*** ./src/pages/components/AppContainer.jsx ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppContainer": () => (/* binding */ AppContainer)
/* harmony export */ });
/* harmony import */ var _globalComponents__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @globalComponents */ "./src/pages/components/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/store */ "./src/store/store.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function AppContainer(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_0__.ErrorBoundary, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {
      store: _store_store__WEBPACK_IMPORTED_MODULE_2__.store,
      children: props.children
    })
  });
}



/***/ }),

/***/ "./src/pages/components/ColoredButton.jsx":
/*!************************************************!*\
  !*** ./src/pages/components/ColoredButton.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColoredButton": () => (/* binding */ ColoredButton)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/VARIABLES */ "./src/styles/VARIABLES.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var ColoredButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    border: none;\n    border-radius: 5px;\n    color: white;\n    background: ", "; \n    width: 150px;\n    height: 40px;\n"])), _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__.VARIABLES.red);


/***/ }),

/***/ "./src/pages/components/ErrorBoundary.jsx":
/*!************************************************!*\
  !*** ./src/pages/components/ErrorBoundary.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorBoundary": () => (/* binding */ ErrorBoundary)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }



var _templateObject;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var ErrorText = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    margin-top: 100px;\n    font-size: 40px;\n    text-align: center;\n"])));

var ErrorBoundary = /*#__PURE__*/function (_React$Component) {
  _inherits(ErrorBoundary, _React$Component);

  var _super = _createSuper(ErrorBoundary);

  function ErrorBoundary() {
    var _this;

    _classCallCheck(this, ErrorBoundary);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      hasError: false
    });

    return _this;
  }

  _createClass(ErrorBoundary, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, errorInfo) {
      console.log(error, errorInfo);
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
        children: this.state.hasError ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(ErrorText, {
          children: "Ooops! Something went wrong, we are working on it!"
        }) : this.props.children
      });
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        hasError: true
      };
    }
  }]);

  return ErrorBoundary;
}((react__WEBPACK_IMPORTED_MODULE_2___default().Component));



/***/ }),

/***/ "./src/pages/components/FormComponent.jsx":
/*!************************************************!*\
  !*** ./src/pages/components/FormComponent.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormComponent": () => (/* binding */ FormComponent)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/VARIABLES */ "./src/styles/VARIABLES.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background: rgba(0, 0, 0, 0.8);\n    backdrop-filter: blur(10px);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 100;\n"])));
var Form = styled_components__WEBPACK_IMPORTED_MODULE_0___default().form(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 40%;\n    background: ", ";\n    padding: 40px;\n"])), _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__.VARIABLES.darkgrey);

function FormComponent(props) {
  var submitHandler = function submitHandler(event) {
    event.preventDefault();
    props.onSubmit && props.onSubmit(event);
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Container, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Form, {
      onSubmit: submitHandler,
      children: props.children
    })
  });
}



/***/ }),

/***/ "./src/pages/components/FormOptionDropdown.jsx":
/*!*****************************************************!*\
  !*** ./src/pages/components/FormOptionDropdown.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormOptionDropdown": () => (/* binding */ FormOptionDropdown)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/VARIABLES */ "./src/styles/VARIABLES.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var FormOptionDropdown = styled_components__WEBPACK_IMPORTED_MODULE_0___default().select(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 40px;\n    background: ", ";\n    border: none;\n    border-radius: 5px;\n    color: ", ";\n"])), _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__.VARIABLES.grey, _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__.VARIABLES.lightgrey);


/***/ }),

/***/ "./src/pages/components/FormOptionInput.jsx":
/*!**************************************************!*\
  !*** ./src/pages/components/FormOptionInput.jsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormOptionInput": () => (/* binding */ FormOptionInput)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/VARIABLES */ "./src/styles/VARIABLES.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var FormOptionInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 100%;\n    background: ", ";\n    color: ", ";\n    border: none;\n    border-radius: 5px;\n    height: 40px;\n"])), _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__.VARIABLES.grey, _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__.VARIABLES.lightgrey);


/***/ }),

/***/ "./src/pages/components/FormOptionName.jsx":
/*!*************************************************!*\
  !*** ./src/pages/components/FormOptionName.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FormOptionName": () => (/* binding */ FormOptionName)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/VARIABLES */ "./src/styles/VARIABLES.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var FormOptionName = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    margin-top: 20px;\n    color: ", ";\n"])), _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__.VARIABLES.red);


/***/ }),

/***/ "./src/pages/components/GlobalWidthComponent.jsx":
/*!*******************************************************!*\
  !*** ./src/pages/components/GlobalWidthComponent.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalWidthComponent": () => (/* binding */ GlobalWidthComponent)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var GlobalWidthComponent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    width: 70%;\n    margin-left: auto;\n    margin-right: auto;\n"])));


/***/ }),

/***/ "./src/pages/components/Logo.jsx":
/*!***************************************!*\
  !*** ./src/pages/components/Logo.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Logo": () => (/* binding */ Logo)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/VARIABLES */ "./src/styles/VARIABLES.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var LogoText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n"])), _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__.VARIABLES.red);
var BoldText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().span(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    font-weight: bold;\n"])));

function Logo() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(LogoText, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(BoldText, {
      children: "netflix"
    }), "roulette"]
  });
}



/***/ }),

/***/ "./src/pages/components/NavigationMap.jsx":
/*!************************************************!*\
  !*** ./src/pages/components/NavigationMap.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavigationMap": () => (/* binding */ NavigationMap)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../header */ "./src/pages/header/index.js");
/* harmony import */ var _movies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../movies */ "./src/pages/movies/index.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../footer */ "./src/pages/footer/index.js");
/* harmony import */ var _404__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../404 */ "./src/pages/404/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);









function NavigationMap() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Switch, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
        path: "/film/:movieId",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_header__WEBPACK_IMPORTED_MODULE_0__.MovieHeader, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_movies__WEBPACK_IMPORTED_MODULE_1__.Movies, {})]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
        exact: true,
        path: "/film",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_header__WEBPACK_IMPORTED_MODULE_0__.Header, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_movies__WEBPACK_IMPORTED_MODULE_1__.Movies, {})]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
        exact: true,
        path: "/",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_header__WEBPACK_IMPORTED_MODULE_0__.Header, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_movies__WEBPACK_IMPORTED_MODULE_1__.Movies, {})]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Route, {
        path: "*",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_404__WEBPACK_IMPORTED_MODULE_3__.Page404, {})
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_footer__WEBPACK_IMPORTED_MODULE_2__.Footer, {})]
  });
}



/***/ }),

/***/ "./src/pages/components/SemitransparentButton.jsx":
/*!********************************************************!*\
  !*** ./src/pages/components/SemitransparentButton.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SemitransparentButton": () => (/* binding */ SemitransparentButton)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/VARIABLES */ "./src/styles/VARIABLES.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var SemitransparentButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    border: none;\n    border-radius: 5px;\n    color: ", ";\n    background: rgba(255, 255, 255, 0.2);     \n    width: 150px;\n    height: 40px;\n"])), _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__.VARIABLES.red);


/***/ }),

/***/ "./src/pages/components/TransparentButton.jsx":
/*!****************************************************!*\
  !*** ./src/pages/components/TransparentButton.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransparentButton": () => (/* binding */ TransparentButton)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/VARIABLES */ "./src/styles/VARIABLES.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var TransparentButton = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    border: 2px solid ", ";\n    border-radius: 5px;\n    color: ", ";\n    background: none; \n    width: 150px;\n    height: 40px;\n"])), _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__.VARIABLES.red, _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__.VARIABLES.red);


/***/ }),

/***/ "./src/pages/components/ValidationFormText.jsx":
/*!*****************************************************!*\
  !*** ./src/pages/components/ValidationFormText.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidationFormText": () => (/* binding */ ValidationFormText)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/VARIABLES */ "./src/styles/VARIABLES.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var ValidationFormText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    margin-top: 5px;\n    color: ", ";\n"])), _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__.VARIABLES.red);


/***/ }),

/***/ "./src/pages/footer/Footer.jsx":
/*!*************************************!*\
  !*** ./src/pages/footer/Footer.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _globalComponents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @globalComponents */ "./src/pages/components/index.js");
/* harmony import */ var _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styles/VARIABLES */ "./src/styles/VARIABLES.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    background-color: ", ";\n    text-align: center;\n    padding: 20px 0px;\n"])), _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_2__.VARIABLES.grey);

function Footer() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Container, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_1__.Logo, {})
  });
}



/***/ }),

/***/ "./src/pages/header/Header.jsx":
/*!*************************************!*\
  !*** ./src/pages/header/Header.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var _pages_header_components_layouts_HeaderComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pages/header/components/layouts/HeaderComponent */ "./src/pages/header/components/layouts/HeaderComponent.jsx");
/* harmony import */ var _pages_header_components_layouts_TopPanelComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pages/header/components/layouts/TopPanelComponent */ "./src/pages/header/components/layouts/TopPanelComponent.jsx");
/* harmony import */ var _globalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @globalComponents */ "./src/pages/components/index.js");
/* harmony import */ var _pages_header_components_AddMovieForm_Connect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/header/components/AddMovieForm.Connect */ "./src/pages/header/components/AddMovieForm.Connect.jsx");
/* harmony import */ var _pages_header_components_layouts_SearchPanelComponent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pages/header/components/layouts/SearchPanelComponent */ "./src/pages/header/components/layouts/SearchPanelComponent.jsx");
/* harmony import */ var _pages_header_components_SearchText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pages/header/components/SearchText */ "./src/pages/header/components/SearchText.jsx");
/* harmony import */ var _pages_header_components_SearchInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pages/header/components/SearchInput */ "./src/pages/header/components/SearchInput.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }















function Header(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      addMovieFormOpened = _useState2[0],
      setAddMovieFormOpened = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      search = _useState4[0],
      setSearch = _useState4[1];

  var handleAddMovieForm = (0,react__WEBPACK_IMPORTED_MODULE_7__.useCallback)(function () {
    return setAddMovieFormOpened(function (flag) {
      return !flag;
    });
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
    children: [addMovieFormOpened && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_pages_header_components_AddMovieForm_Connect__WEBPACK_IMPORTED_MODULE_3__.default, {
      close: handleAddMovieForm
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_pages_header_components_layouts_HeaderComponent__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_globalComponents__WEBPACK_IMPORTED_MODULE_2__.GlobalWidthComponent, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_pages_header_components_layouts_TopPanelComponent__WEBPACK_IMPORTED_MODULE_1__.TopPanelComponent, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_2__.Logo, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_2__.SemitransparentButton, {
            onClick: handleAddMovieForm,
            children: "+ ADD MOVIE"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_pages_header_components_layouts_SearchPanelComponent__WEBPACK_IMPORTED_MODULE_4__.SearchPanelComponent, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_pages_header_components_SearchText__WEBPACK_IMPORTED_MODULE_5__.SearchText, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_pages_header_components_SearchInput__WEBPACK_IMPORTED_MODULE_6__.SearchInput, {
            placeholder: "What do you want to watch?",
            onChange: function onChange(event) {
              return setSearch(event.target.value);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Link, {
            to: search ? "/film?search=".concat(search) : '/',
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_2__.ColoredButton, {
              children: "SEARCH"
            })
          })]
        })]
      })
    })]
  });
}



/***/ }),

/***/ "./src/pages/header/MovieHeader.jsx":
/*!******************************************!*\
  !*** ./src/pages/header/MovieHeader.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieHeader": () => (/* binding */ MovieHeader)
/* harmony export */ });
/* harmony import */ var _pages_header_components_layouts_HeaderComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pages/header/components/layouts/HeaderComponent */ "./src/pages/header/components/layouts/HeaderComponent.jsx");
/* harmony import */ var _pages_header_components_layouts_TopPanelComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pages/header/components/layouts/TopPanelComponent */ "./src/pages/header/components/layouts/TopPanelComponent.jsx");
/* harmony import */ var _globalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @globalComponents */ "./src/pages/components/index.js");
/* harmony import */ var _pages_header_movieDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/header/movieDetails */ "./src/pages/header/movieDetails/index.js");
/* harmony import */ var _pages_header_components_ReturnToSearchPanel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pages/header/components/ReturnToSearchPanel */ "./src/pages/header/components/ReturnToSearchPanel.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);











function MovieHeader(props) {
  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useParams)(),
      movieId = _useParams.movieId;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_pages_header_components_layouts_HeaderComponent__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_globalComponents__WEBPACK_IMPORTED_MODULE_2__.GlobalWidthComponent, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_pages_header_components_layouts_TopPanelComponent__WEBPACK_IMPORTED_MODULE_1__.TopPanelComponent, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_2__.Logo, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.NavLink, {
          to: "/",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_pages_header_components_ReturnToSearchPanel__WEBPACK_IMPORTED_MODULE_4__.ReturnToSearchPanel, {})
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_pages_header_movieDetails__WEBPACK_IMPORTED_MODULE_3__.MovieDetails, {
        id: movieId
      })]
    })
  });
}



/***/ }),

/***/ "./src/pages/header/components/AddMovieForm.Connect.jsx":
/*!**************************************************************!*\
  !*** ./src/pages/header/components/AddMovieForm.Connect.jsx ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AddMovieForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddMovieForm */ "./src/pages/header/components/AddMovieForm.jsx");
/* harmony import */ var _store_actionCreators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/actionCreators */ "./src/store/actionCreators.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_0__.connect)(null, {
  addMovie: _store_actionCreators__WEBPACK_IMPORTED_MODULE_2__.addMovie
})(_AddMovieForm__WEBPACK_IMPORTED_MODULE_1__.AddMovieForm));

/***/ }),

/***/ "./src/pages/header/components/AddMovieForm.jsx":
/*!******************************************************!*\
  !*** ./src/pages/header/components/AddMovieForm.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddMovieForm": () => (/* binding */ AddMovieForm)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.parse-int.js */ "core-js/modules/es.number.parse-int.js");
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _globalComponents__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @globalComponents */ "./src/pages/components/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _services_formValidator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/formValidator */ "./src/services/formValidator.jsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @models */ "./src/models/index.js");
/* harmony import */ var _assets_data_FilterOptions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @assets/data/FilterOptions */ "./src/assets/data/FilterOptions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);








var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var Title = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: white;\n    font-size: 30px;\n"])));
var ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_7___default().div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    margin-top: 40px;\n    text-align: right;\n"])));
var ColoredButtonWrapper = styled_components__WEBPACK_IMPORTED_MODULE_7___default()(_globalComponents__WEBPACK_IMPORTED_MODULE_8__.ColoredButton)(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin-left: 10px;\n"])));

function AddMovieForm(props) {
  var validate = function validate(values) {
    return (0,_services_formValidator__WEBPACK_IMPORTED_MODULE_11__.formValidator)(values, _assets_data_FilterOptions__WEBPACK_IMPORTED_MODULE_13__.default);
  };

  var formik = (0,formik__WEBPACK_IMPORTED_MODULE_10__.useFormik)({
    initialValues: {
      title: '',
      release_date: '',
      poster_path: '',
      genres: '',
      overview: '',
      runtime: ''
    },
    validate: validate,
    onSubmit: function onSubmit(values) {
      var movie = new _models__WEBPACK_IMPORTED_MODULE_12__.Movie(values.title, values.release_date, values.poster_path, values.genres.split(','), values.overview, Number.parseInt(values.runtime));
      props.addMovie(movie);
      props.close();
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(_globalComponents__WEBPACK_IMPORTED_MODULE_8__.FormComponent, {
    onSubmit: formik.handleSubmit,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(Title, {
      children: "ADD MOVIE"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_8__.FormOptionName, {
      children: "TITLE"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_8__.FormOptionInput, {
      id: "title",
      name: "title",
      title: "title",
      placeholder: "Title here",
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      value: formik.values.title
    }), formik.touched.title && formik.errors.title ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_8__.ValidationFormText, {
      children: formik.errors.title
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_8__.FormOptionName, {
      children: "RELEASE DATE"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_8__.FormOptionInput, {
      id: "release_date",
      name: "release_date",
      title: "release_date",
      placeholder: "Release date here",
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      value: formik.values.release_date
    }), formik.touched.release_date && formik.errors.release_date ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_8__.ValidationFormText, {
      children: formik.errors.release_date
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_8__.FormOptionName, {
      children: "MOVIE URL"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_8__.FormOptionInput, {
      id: "poster_path",
      name: "poster_path",
      title: "poster_path",
      placeholder: "Url here",
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      value: formik.values.poster_path
    }), formik.touched.poster_path && formik.errors.poster_path ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_8__.ValidationFormText, {
      children: formik.errors.poster_path
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_8__.FormOptionName, {
      children: "GENRES"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_8__.FormOptionInput, {
      id: "genres",
      name: "genres",
      title: "genres",
      placeholder: "Genres here",
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      value: formik.values.genres
    }), formik.touched.genres && formik.errors.genres ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_8__.ValidationFormText, {
      children: formik.errors.genres
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_8__.FormOptionName, {
      children: "OVERVIEW"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_8__.FormOptionInput, {
      id: "overview",
      name: "overview",
      title: "overview",
      placeholder: "Overview here",
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      value: formik.values.overview
    }), formik.touched.overview && formik.errors.overview ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_8__.ValidationFormText, {
      children: formik.errors.overview
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_8__.FormOptionName, {
      children: "RUNTIME"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_8__.FormOptionInput, {
      id: "runtime",
      name: "runtime",
      title: "runtime",
      placeholder: "Runtime here",
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      value: formik.values.runtime
    }), formik.touched.runtime && formik.errors.runtime ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_8__.ValidationFormText, {
      children: formik.errors.runtime
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsxs)(ButtonContainer, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_8__.TransparentButton, {
        onClick: props.close,
        children: "RESET"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__.jsx)(ColoredButtonWrapper, {
        type: "submit",
        children: "SUBMIT"
      })]
    })]
  });
}



/***/ }),

/***/ "./src/pages/header/components/ReturnToSearchPanel.jsx":
/*!*************************************************************!*\
  !*** ./src/pages/header/components/ReturnToSearchPanel.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReturnToSearchPanel": () => (/* binding */ ReturnToSearchPanel)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_imgs_zoom_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @assets/imgs/zoom.png */ "./src/assets/imgs/zoom.png");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var ReturnToSearchPanel = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    height: 20px;\n    width: 20px;\n    background: black;\n    background-image: url(", ");\n    background-size: cover;\n    background-position: center center;\n    background-color: transparent;\n    cursor: pointer;\n"])), _assets_imgs_zoom_png__WEBPACK_IMPORTED_MODULE_1__.default);


/***/ }),

/***/ "./src/pages/header/components/SearchInput.jsx":
/*!*****************************************************!*\
  !*** ./src/pages/header/components/SearchInput.jsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchInput": () => (/* binding */ SearchInput)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var SearchInput = styled_components__WEBPACK_IMPORTED_MODULE_0___default().input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    background: rgba(255, 255, 255, 0.2); \n    border: none;\n    border-radius: 4px;\n    height: 40px;\n    flex-grow: 1;\n    margin-right: 10px;\n"])));


/***/ }),

/***/ "./src/pages/header/components/SearchText.jsx":
/*!****************************************************!*\
  !*** ./src/pages/header/components/SearchText.jsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchText": () => (/* binding */ SearchText)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: white;\n    font-size: 35px;\n    flex-basis: 100%;\n    margin-bottom: 40px;\n"])));

function SearchText() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Text, {
    children: "FIND YOUR MOVIE"
  });
}



/***/ }),

/***/ "./src/pages/header/components/layouts/HeaderComponent.jsx":
/*!*****************************************************************!*\
  !*** ./src/pages/header/components/layouts/HeaderComponent.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_imgs_movies_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @assets/imgs/movies.png */ "./src/assets/imgs/movies.png");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var HeaderComponent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    padding: 30px 0px;\n    background: black;\n    background-image:linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9)), url(", ");\n    background-size: cover;\n    background-position: center center;\n"])), _assets_imgs_movies_png__WEBPACK_IMPORTED_MODULE_1__.default);


/***/ }),

/***/ "./src/pages/header/components/layouts/SearchPanelComponent.jsx":
/*!**********************************************************************!*\
  !*** ./src/pages/header/components/layouts/SearchPanelComponent.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchPanelComponent": () => (/* binding */ SearchPanelComponent)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var SearchPanelComponent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    flex-wrap: wrap;\n    padding: 100px 60px;\n"])));


/***/ }),

/***/ "./src/pages/header/components/layouts/TopPanelComponent.jsx":
/*!*******************************************************************!*\
  !*** ./src/pages/header/components/layouts/TopPanelComponent.jsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TopPanelComponent": () => (/* binding */ TopPanelComponent)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var TopPanelComponent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n"])));


/***/ }),

/***/ "./src/pages/header/movieDetails/MovieDetails.jsx":
/*!********************************************************!*\
  !*** ./src/pages/header/movieDetails/MovieDetails.jsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_header_movieDetails_components_MovieDetailsImg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pages/header/movieDetails/components/MovieDetailsImg */ "./src/pages/header/movieDetails/components/MovieDetailsImg.jsx");
/* harmony import */ var _pages_header_movieDetails_components_layouts_MovieDetailsComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/header/movieDetails/components/layouts/MovieDetailsComponent */ "./src/pages/header/movieDetails/components/layouts/MovieDetailsComponent.jsx");
/* harmony import */ var _pages_header_movieDetails_components_MovieDetailsName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pages/header/movieDetails/components/MovieDetailsName */ "./src/pages/header/movieDetails/components/MovieDetailsName.jsx");
/* harmony import */ var _pages_header_movieDetails_components_MovieDetailsText__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pages/header/movieDetails/components/MovieDetailsText */ "./src/pages/header/movieDetails/components/MovieDetailsText.jsx");
/* harmony import */ var _pages_header_movieDetails_components_MovieDetailsAccentText__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pages/header/movieDetails/components/MovieDetailsAccentText */ "./src/pages/header/movieDetails/components/MovieDetailsAccentText.jsx");
/* harmony import */ var _pages_header_movieDetails_components_layouts_AgeTimeContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @pages/header/movieDetails/components/layouts/AgeTimeContainer */ "./src/pages/header/movieDetails/components/layouts/AgeTimeContainer.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @store/selectors */ "./src/store/selectors.js");
/* harmony import */ var _store_actionCreators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @store/actionCreators */ "./src/store/actionCreators.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__);














function MovieDetails(props) {
  var movie = (0,react_redux__WEBPACK_IMPORTED_MODULE_8__.useSelector)(_store_selectors__WEBPACK_IMPORTED_MODULE_9__.movieSelector);
  var id = parseInt(props.id);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    props.getMovie(id);
  }, [id]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_pages_header_movieDetails_components_layouts_MovieDetailsComponent__WEBPACK_IMPORTED_MODULE_3__.MovieDetailsComponent, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_pages_header_movieDetails_components_MovieDetailsImg__WEBPACK_IMPORTED_MODULE_2__.MovieDetailsImg, {
      poster_path: movie.poster_path
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_pages_header_movieDetails_components_MovieDetailsName__WEBPACK_IMPORTED_MODULE_4__.MovieDetailsName, {
        title: movie.title,
        vote_average: movie.vote_average
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_pages_header_movieDetails_components_layouts_AgeTimeContainer__WEBPACK_IMPORTED_MODULE_7__.AgeTimeContainer, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_pages_header_movieDetails_components_MovieDetailsAccentText__WEBPACK_IMPORTED_MODULE_6__.MovieDetailsAccentText, {
          children: movie.release_date
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsxs)(_pages_header_movieDetails_components_MovieDetailsAccentText__WEBPACK_IMPORTED_MODULE_6__.MovieDetailsAccentText, {
          children: [movie.runtime, " min"]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_11__.jsx)(_pages_header_movieDetails_components_MovieDetailsText__WEBPACK_IMPORTED_MODULE_5__.MovieDetailsText, {
        children: movie.overview
      })]
    })]
  });
}

MovieDetails.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_8__.connect)(null, {
  getMovie: _store_actionCreators__WEBPACK_IMPORTED_MODULE_10__.getMovie
})(MovieDetails));

/***/ }),

/***/ "./src/pages/header/movieDetails/components/MovieDetailsAccentText.jsx":
/*!*****************************************************************************!*\
  !*** ./src/pages/header/movieDetails/components/MovieDetailsAccentText.jsx ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieDetailsAccentText": () => (/* binding */ MovieDetailsAccentText)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/VARIABLES */ "./src/styles/VARIABLES.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var MovieDetailsAccentText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    margin: 20px 30px 20px 0;\n    color: ", ";\n    font-size: 25px;\n"])), _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__.VARIABLES.red);


/***/ }),

/***/ "./src/pages/header/movieDetails/components/MovieDetailsImg.jsx":
/*!**********************************************************************!*\
  !*** ./src/pages/header/movieDetails/components/MovieDetailsImg.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieDetailsImg": () => (/* binding */ MovieDetailsImg)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var Img = styled_components__WEBPACK_IMPORTED_MODULE_0___default().img(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    height: 400px;\n    margin-right: 30px;\n"])));

function MovieDetailsImg(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Img, {
    src: props.poster_path
  });
}



/***/ }),

/***/ "./src/pages/header/movieDetails/components/MovieDetailsName.jsx":
/*!***********************************************************************!*\
  !*** ./src/pages/header/movieDetails/components/MovieDetailsName.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieDetailsName": () => (/* binding */ MovieDetailsName)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n"])));
var Name = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    font-size: 45px;\n    padding-right: 15px;\n"])));
var Rating = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    font-size: 30px;\n    padding: 10px;\n    border: 1px solid white;\n    border-radius: 100%;\n"])));

function MovieDetailsName(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Container, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Name, {
      children: props.title
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Rating, {
      children: props.vote_average
    })]
  });
}



/***/ }),

/***/ "./src/pages/header/movieDetails/components/MovieDetailsText.jsx":
/*!***********************************************************************!*\
  !*** ./src/pages/header/movieDetails/components/MovieDetailsText.jsx ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieDetailsText": () => (/* binding */ MovieDetailsText)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var MovieDetailsText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    margin-top: 20px;\n"])));


/***/ }),

/***/ "./src/pages/header/movieDetails/components/layouts/AgeTimeContainer.jsx":
/*!*******************************************************************************!*\
  !*** ./src/pages/header/movieDetails/components/layouts/AgeTimeContainer.jsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AgeTimeContainer": () => (/* binding */ AgeTimeContainer)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var AgeTimeContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    padding-top: 20px;\n    display: flex;\n"])));


/***/ }),

/***/ "./src/pages/header/movieDetails/components/layouts/MovieDetailsComponent.jsx":
/*!************************************************************************************!*\
  !*** ./src/pages/header/movieDetails/components/layouts/MovieDetailsComponent.jsx ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieDetailsComponent": () => (/* binding */ MovieDetailsComponent)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var MovieDetailsComponent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    padding: 40px 0;\n    display: flex;\n    color: white;\n"])));


/***/ }),

/***/ "./src/pages/movies/Movies.jsx":
/*!*************************************!*\
  !*** ./src/pages/movies/Movies.jsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.url.js */ "core-js/modules/web.url.js");
/* harmony import */ var core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_url_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _pages_movies_movie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @pages/movies/movie */ "./src/pages/movies/movie/index.js");
/* harmony import */ var _pages_movies_filter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @pages/movies/filter */ "./src/pages/movies/filter/index.js");
/* harmony import */ var _pages_movies_sorter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @pages/movies/sorter */ "./src/pages/movies/sorter/index.js");
/* harmony import */ var _pages_movies_components_layouts_MoviesComponent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @pages/movies/components/layouts/MoviesComponent */ "./src/pages/movies/components/layouts/MoviesComponent.jsx");
/* harmony import */ var _pages_movies_components_layouts_FilterSorterTopPanelComponent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @pages/movies/components/layouts/FilterSorterTopPanelComponent */ "./src/pages/movies/components/layouts/FilterSorterTopPanelComponent.jsx");
/* harmony import */ var _pages_movies_components_layouts_MoviesListComponent__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @pages/movies/components/layouts/MoviesListComponent */ "./src/pages/movies/components/layouts/MoviesListComponent.jsx");
/* harmony import */ var _pages_movies_components_MoviesCounter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @pages/movies/components/MoviesCounter */ "./src/pages/movies/components/MoviesCounter.jsx");
/* harmony import */ var _pages_movies_components_NoMovieFound__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @pages/movies/components/NoMovieFound */ "./src/pages/movies/components/NoMovieFound.jsx");
/* harmony import */ var _globalComponents__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @globalComponents */ "./src/pages/components/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _store_actionCreators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @store/actionCreators */ "./src/store/actionCreators.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @store/selectors */ "./src/store/selectors.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__);


























var useQuery = function useQuery() {
  return new URLSearchParams((0,react_router_dom__WEBPACK_IMPORTED_MODULE_19__.useLocation)().search);
};

function Movies(props) {
  var movies = (0,react_redux__WEBPACK_IMPORTED_MODULE_20__.useSelector)(_store_selectors__WEBPACK_IMPORTED_MODULE_21__.moviesSelector);
  var selectedFilterOption = (0,react_redux__WEBPACK_IMPORTED_MODULE_20__.useSelector)(_store_selectors__WEBPACK_IMPORTED_MODULE_21__.selectedFilterSelector);
  var selectedSorterOption = (0,react_redux__WEBPACK_IMPORTED_MODULE_20__.useSelector)(_store_selectors__WEBPACK_IMPORTED_MODULE_21__.selectedSorterSelector);
  var selectedSorterAsc = (0,react_redux__WEBPACK_IMPORTED_MODULE_20__.useSelector)(_store_selectors__WEBPACK_IMPORTED_MODULE_21__.selectedSorterAscSelector);
  var search = useQuery().get('search');
  (0,react__WEBPACK_IMPORTED_MODULE_17__.useEffect)(function () {
    props.dispatch((0,_store_actionCreators__WEBPACK_IMPORTED_MODULE_18__.getMovies)(search));
  }, [selectedFilterOption, selectedSorterOption, selectedSorterAsc, search]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_pages_movies_components_layouts_MoviesComponent__WEBPACK_IMPORTED_MODULE_11__.MoviesComponent, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_globalComponents__WEBPACK_IMPORTED_MODULE_16__.GlobalWidthComponent, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(_pages_movies_components_layouts_FilterSorterTopPanelComponent__WEBPACK_IMPORTED_MODULE_12__.FilterSorterTopPanelComponent, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_pages_movies_filter__WEBPACK_IMPORTED_MODULE_9__.Filter, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_pages_movies_sorter__WEBPACK_IMPORTED_MODULE_10__.Sorter, {})]
      }), movies.length === 0 ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_pages_movies_components_NoMovieFound__WEBPACK_IMPORTED_MODULE_15__.NoMovieFound, {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_pages_movies_components_MoviesCounter__WEBPACK_IMPORTED_MODULE_14__.MoviesCounter, {
          count: movies.length
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_pages_movies_components_layouts_MoviesListComponent__WEBPACK_IMPORTED_MODULE_13__.MoviesListComponent, {
          children: movies.map(function (movie) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_22__.jsx)(_pages_movies_movie__WEBPACK_IMPORTED_MODULE_8__.Movie, {
              movie: movie
            }, movie.id);
          })
        })]
      })]
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_20__.connect)()(Movies));

/***/ }),

/***/ "./src/pages/movies/components/MoviesCounter.jsx":
/*!*******************************************************!*\
  !*** ./src/pages/movies/components/MoviesCounter.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoviesCounter": () => (/* binding */ MoviesCounter)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: white;\n    margin-top: 35px;\n    font-size: 25px;\n"])));

function MoviesCounter(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(Text, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("strong", {
      children: props.count
    }), " movies found"]
  });
}

MoviesCounter.propTypes = {
  count: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired)
};


/***/ }),

/***/ "./src/pages/movies/components/NoMovieFound.jsx":
/*!******************************************************!*\
  !*** ./src/pages/movies/components/NoMovieFound.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoMovieFound": () => (/* binding */ NoMovieFound)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/VARIABLES */ "./src/styles/VARIABLES.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Container = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    text-align: center;\n    padding: 120px 0;\n"])));
var Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    color: ", ";\n    font-size: 40px;\n    padding: 50px;\n"])), _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__.VARIABLES.red);

function NoMovieFound() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Container, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
      children: "No movie found."
    })
  });
}



/***/ }),

/***/ "./src/pages/movies/components/layouts/FilterSorterTopPanelComponent.jsx":
/*!*******************************************************************************!*\
  !*** ./src/pages/movies/components/layouts/FilterSorterTopPanelComponent.jsx ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterSorterTopPanelComponent": () => (/* binding */ FilterSorterTopPanelComponent)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/VARIABLES */ "./src/styles/VARIABLES.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var FilterSorterTopPanelComponent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: space-between;\n    align-items: baseline;\n    border-bottom: 3px solid ", ";\n"])), _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__.VARIABLES.lightgrey);


/***/ }),

/***/ "./src/pages/movies/components/layouts/MoviesComponent.jsx":
/*!*****************************************************************!*\
  !*** ./src/pages/movies/components/layouts/MoviesComponent.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoviesComponent": () => (/* binding */ MoviesComponent)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/VARIABLES */ "./src/styles/VARIABLES.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var MoviesComponent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    background: ", ";\n    padding: 20px 0;\n"])), _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__.VARIABLES.darkgrey);


/***/ }),

/***/ "./src/pages/movies/components/layouts/MoviesListComponent.jsx":
/*!*********************************************************************!*\
  !*** ./src/pages/movies/components/layouts/MoviesListComponent.jsx ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MoviesListComponent": () => (/* binding */ MoviesListComponent)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var MoviesListComponent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: grid;\n    grid-template-columns: 1fr 1fr 1fr;\n    row-gap: 50px;\n    column-gap: 50px;\n    padding: 20px 0; \n"])));


/***/ }),

/***/ "./src/pages/movies/filter/Filter.jsx":
/*!********************************************!*\
  !*** ./src/pages/movies/filter/Filter.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_movies_filter_components_layouts_FilterListComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @pages/movies/filter/components/layouts/FilterListComponent */ "./src/pages/movies/filter/components/layouts/FilterListComponent.jsx");
/* harmony import */ var _pages_movies_filter_components_FilterOption__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pages/movies/filter/components/FilterOption */ "./src/pages/movies/filter/components/FilterOption.jsx");
/* harmony import */ var _store_actionCreators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/actionCreators */ "./src/store/actionCreators.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_data_FilterOptions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @assets/data/FilterOptions */ "./src/assets/data/FilterOptions.js");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @store/selectors */ "./src/store/selectors.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);









function Filter(props) {
  var selectedOption = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)(_store_selectors__WEBPACK_IMPORTED_MODULE_6__.selectedFilterSelector);

  function setSelectedOption(option) {
    props.dispatch((0,_store_actionCreators__WEBPACK_IMPORTED_MODULE_3__.setFilterOption)(option));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_pages_movies_filter_components_layouts_FilterListComponent__WEBPACK_IMPORTED_MODULE_1__.FilterListComponent, {
    children: _assets_data_FilterOptions__WEBPACK_IMPORTED_MODULE_5__.default.map(function (option) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_pages_movies_filter_components_FilterOption__WEBPACK_IMPORTED_MODULE_2__.FilterOption, {
        option: option,
        isSelected: option === selectedOption,
        changeSelected: function changeSelected() {
          return setSelectedOption(option);
        }
      }, option.id);
    })
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)()(Filter));

/***/ }),

/***/ "./src/pages/movies/filter/components/FilterOption.jsx":
/*!*************************************************************!*\
  !*** ./src/pages/movies/filter/components/FilterOption.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterOption": () => (/* binding */ FilterOption)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styles/VARIABLES */ "./src/styles/VARIABLES.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);


var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var Option = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    padding: 10px 0;\n    margin: 0 10px -3px;\n    cursor: pointer;\n    border-bottom: ", ";\n    &:nth-child(1) {\n        margin-left: 0;\n    }\n"])), function (props) {
  return props.isSelected ? '3px solid ' + _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_3__.VARIABLES.red : 'none';
});

function FilterOption(props) {
  var handleChangeSelected = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(function () {
    return props.changeSelected(props.option);
  }, [props.changeSelected, props.option]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Option, {
    isSelected: props.isSelected,
    onClick: handleChangeSelected,
    children: props.option.name
  });
}

FilterOption.propTypes = {
  option: prop_types__WEBPACK_IMPORTED_MODULE_2___default().shape({
    name: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired)
  }).isRequired,
  isSelected: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool.isRequired)
};


/***/ }),

/***/ "./src/pages/movies/filter/components/layouts/FilterListComponent.jsx":
/*!****************************************************************************!*\
  !*** ./src/pages/movies/filter/components/layouts/FilterListComponent.jsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FilterListComponent": () => (/* binding */ FilterListComponent)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var FilterListComponent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    color: white;\n"])));


/***/ }),

/***/ "./src/pages/movies/movie/Movie.jsx":
/*!******************************************!*\
  !*** ./src/pages/movies/movie/Movie.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Movie": () => (/* binding */ Movie)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_movies_movie_components_EditMovieForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @pages/movies/movie/components/EditMovieForm */ "./src/pages/movies/movie/components/EditMovieForm.jsx");
/* harmony import */ var _pages_movies_movie_components_DeleteMovieForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/movies/movie/components/DeleteMovieForm */ "./src/pages/movies/movie/components/DeleteMovieForm.jsx");
/* harmony import */ var _pages_movies_movie_components_MovieDescription__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pages/movies/movie/components/MovieDescription */ "./src/pages/movies/movie/components/MovieDescription.jsx");
/* harmony import */ var _pages_movies_movie_components_layouts_MovieComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @pages/movies/movie/components/layouts/MovieComponent */ "./src/pages/movies/movie/components/layouts/MovieComponent.jsx");
/* harmony import */ var _pages_movies_movie_components_EditDeleteOptions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @pages/movies/movie/components/EditDeleteOptions */ "./src/pages/movies/movie/components/EditDeleteOptions.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function Movie(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      editDeleteShown = _useState2[0],
      setEditDeleteShown = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      editMovieFormOpened = _useState4[0],
      setEditMovieFormOpened = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      deleteMovieFormOpened = _useState6[0],
      setDeleteMovieFormOpened = _useState6[1];

  var handleEditMovieForm = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    return setEditMovieFormOpened(function (flag) {
      return !flag;
    });
  }, []);
  var handleDeleteMovieForm = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    return setDeleteMovieFormOpened(function (flag) {
      return !flag;
    });
  }, []);
  var showEditDelete = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    return setEditDeleteShown(true);
  }, []);
  var hideEditDelete = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function () {
    return setEditDeleteShown(false);
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [editMovieFormOpened && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_pages_movies_movie_components_EditMovieForm__WEBPACK_IMPORTED_MODULE_2__.default, {
      close: handleEditMovieForm,
      movie: props.movie
    }), deleteMovieFormOpened && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_pages_movies_movie_components_DeleteMovieForm__WEBPACK_IMPORTED_MODULE_3__.default, {
      id: props.movie.id,
      close: handleDeleteMovieForm
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.NavLink, {
      to: "/film/".concat(props.movie.id),
      style: {
        textDecoration: 'none'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_pages_movies_movie_components_layouts_MovieComponent__WEBPACK_IMPORTED_MODULE_5__.MovieComponent, {
        onMouseOver: showEditDelete,
        onMouseLeave: hideEditDelete,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("img", {
          src: props.movie.poster_path
        }), editDeleteShown && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_pages_movies_movie_components_EditDeleteOptions__WEBPACK_IMPORTED_MODULE_6__.EditDeleteOptions, {
          openEditMovie: handleEditMovieForm,
          openDeleteMovie: handleDeleteMovieForm
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_pages_movies_movie_components_MovieDescription__WEBPACK_IMPORTED_MODULE_4__.MovieDescription, {
          title: props.movie.title,
          release_date: props.movie.release_date,
          genres: props.movie.genres
        })]
      })
    })]
  });
}

Movie.propTypes = {
  movie: prop_types__WEBPACK_IMPORTED_MODULE_0___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().number.isRequired),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
    release_date: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired),
    genres: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().array.isRequired),
    poster_path: (prop_types__WEBPACK_IMPORTED_MODULE_0___default().string.isRequired)
  }).isRequired
};


/***/ }),

/***/ "./src/pages/movies/movie/components/DeleteMovieForm.jsx":
/*!***************************************************************!*\
  !*** ./src/pages/movies/movie/components/DeleteMovieForm.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globalComponents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @globalComponents */ "./src/pages/components/index.js");
/* harmony import */ var _store_actionCreators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/actionCreators */ "./src/store/actionCreators.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var TitleText = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: white;\n    font-size: 30px;\n"])));
var Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    margin-top: 20px;\n    color: white;\n"])));
var ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin-top: 40px;\n    text-align: right;\n    * {\n        margin-left: 10px;\n    }\n"])));

function DeleteMovieForm(props) {
  function confirmDelete() {
    props.dispatch((0,_store_actionCreators__WEBPACK_IMPORTED_MODULE_3__.deleteMovie)(props.id));
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(_globalComponents__WEBPACK_IMPORTED_MODULE_2__.FormComponent, {
    onSubmit: confirmDelete,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(TitleText, {
      children: "DELETE MOVIE"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(Text, {
      children: "Are you sure you want to delete this movie?"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(ButtonContainer, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_2__.TransparentButton, {
        onClick: props.close,
        children: "RESET"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_2__.ColoredButton, {
        children: "Confirm"
      })]
    })]
  });
}

DeleteMovieForm.propTypes = {
  id: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().number.isRequired),
  close: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_4__.connect)()(DeleteMovieForm));

/***/ }),

/***/ "./src/pages/movies/movie/components/EditDeleteOptions.jsx":
/*!*****************************************************************!*\
  !*** ./src/pages/movies/movie/components/EditDeleteOptions.jsx ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditDeleteOptions": () => (/* binding */ EditDeleteOptions)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @styles/VARIABLES */ "./src/styles/VARIABLES.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _templateObject, _templateObject2;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var Options = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    position: absolute;\n    right: 5px;\n    top: 5px;\n"])));
var Option = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    padding: 5px;\n    margin: 5px;\n    background: ", ";\n    color: white;\n    border: none;\n    border-radius: 5px;\n"])), _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_2__.VARIABLES.red); // temporarily instead of 3 dots icon

function EditDeleteOptions(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(Options, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Option, {
      onClick: props.openEditMovie,
      children: "Edit"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(Option, {
      onClick: props.openDeleteMovie,
      children: "Delete"
    })]
  });
}

EditDeleteOptions.propTypes = {
  openEditMovie: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired),
  openDeleteMovie: (prop_types__WEBPACK_IMPORTED_MODULE_1___default().func.isRequired)
};


/***/ }),

/***/ "./src/pages/movies/movie/components/EditMovieForm.jsx":
/*!*************************************************************!*\
  !*** ./src/pages/movies/movie/components/EditMovieForm.jsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.parse-int.js */ "core-js/modules/es.number.parse-int.js");
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _globalComponents__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @globalComponents */ "./src/pages/components/index.js");
/* harmony import */ var _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @styles/VARIABLES */ "./src/styles/VARIABLES.js");
/* harmony import */ var _store_actionCreators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @store/actionCreators */ "./src/store/actionCreators.js");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! formik */ "formik");
/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(formik__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _services_formValidator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @services/formValidator */ "./src/services/formValidator.jsx");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @models */ "./src/models/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _assets_data_FilterOptions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @assets/data/FilterOptions */ "./src/assets/data/FilterOptions.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__);










var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }













var TitleText = styled_components__WEBPACK_IMPORTED_MODULE_9___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: white;\n    font-size: 30px;\n"])));
var OptionValue = styled_components__WEBPACK_IMPORTED_MODULE_9___default().div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    width: 100%;\n    height: 40px;\n    color: ", ";\n    display: flex;\n    align-items: center;\n"])), _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_12__.VARIABLES.lightgrey);
var ButtonContainer = styled_components__WEBPACK_IMPORTED_MODULE_9___default().div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    margin-top: 40px;\n    text-align: right;\n    * {\n        margin-left: 10px;\n    }\n"])));

function EditMovieForm(props) {
  var validate = function validate(values) {
    return (0,_services_formValidator__WEBPACK_IMPORTED_MODULE_15__.formValidator)(values, _assets_data_FilterOptions__WEBPACK_IMPORTED_MODULE_18__.default);
  };

  var formik = (0,formik__WEBPACK_IMPORTED_MODULE_14__.useFormik)({
    initialValues: {
      title: props.movie.title,
      release_date: props.movie.release_date,
      poster_path: props.movie.poster_path,
      genres: props.movie.genres.join(','),
      overview: props.movie.overview,
      runtime: props.movie.runtime.toString()
    },
    validate: validate,
    onSubmit: function onSubmit(values) {
      var movie = new _models__WEBPACK_IMPORTED_MODULE_16__.Movie(values.title, values.release_date, values.poster_path, values.genres.split(','), values.overview, Number.parseInt(values.runtime));
      movie.id = props.movie.id;
      props.dispatch((0,_store_actionCreators__WEBPACK_IMPORTED_MODULE_13__.updateMovie)(movie));
      props.close();
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(_globalComponents__WEBPACK_IMPORTED_MODULE_11__.FormComponent, {
    onSubmit: formik.handleSubmit,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(TitleText, {
      children: "EDIT MOVIE"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_11__.FormOptionName, {
      children: "MOVIE ID"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(OptionValue, {
      children: props.movie.id
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_11__.FormOptionName, {
      children: "TITLE"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_11__.FormOptionInput, {
      id: "title",
      name: "title",
      placeholder: "Title here",
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      value: formik.values.title
    }), formik.touched.title && formik.errors.title ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_11__.ValidationFormText, {
      children: formik.errors.title
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_11__.FormOptionName, {
      children: "RELEASE DATE"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_11__.FormOptionInput, {
      id: "release_date",
      name: "release_date",
      placeholder: "Release date here",
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      value: formik.values.release_date
    }), formik.touched.release_date && formik.errors.release_date ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_11__.ValidationFormText, {
      children: formik.errors.release_date
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_11__.FormOptionName, {
      children: "MOVIE URL"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_11__.FormOptionInput, {
      id: "poster_path",
      name: "poster_path",
      placeholder: "Url here",
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      value: formik.values.poster_path
    }), formik.touched.poster_path && formik.errors.poster_path ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_11__.ValidationFormText, {
      children: formik.errors.poster_path
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_11__.FormOptionName, {
      children: "GENRE"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_11__.FormOptionInput, {
      id: "genres",
      name: "genres",
      placeholder: "Genres here",
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      value: formik.values.genres
    }), formik.touched.genres && formik.errors.genres ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_11__.ValidationFormText, {
      children: formik.errors.genres
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_11__.FormOptionName, {
      children: "OVERVIEW"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_11__.FormOptionInput, {
      id: "overview",
      name: "overview",
      placeholder: "Overview here",
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      value: formik.values.overview
    }), formik.touched.overview && formik.errors.overview ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_11__.ValidationFormText, {
      children: formik.errors.overview
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_11__.FormOptionName, {
      children: "RUNTIME"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_11__.FormOptionInput, {
      id: "runtime",
      name: "runtime",
      placeholder: "Runtime here",
      onChange: formik.handleChange,
      onBlur: formik.handleBlur,
      value: formik.values.runtime
    }), formik.touched.runtime && formik.errors.runtime ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_11__.ValidationFormText, {
      children: formik.errors.runtime
    }) : null, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsxs)(ButtonContainer, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_11__.TransparentButton, {
        onClick: props.close,
        children: "RESET"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_globalComponents__WEBPACK_IMPORTED_MODULE_11__.ColoredButton, {
        type: "submit",
        children: "Save"
      })]
    })]
  });
}

EditMovieForm.propTypes = {
  close: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().func.isRequired),
  movie: prop_types__WEBPACK_IMPORTED_MODULE_10___default().shape({
    id: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number.isRequired),
    title: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string.isRequired),
    release_date: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string.isRequired),
    genres: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().array.isRequired),
    poster_path: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string.isRequired),
    overview: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().string.isRequired),
    runtime: (prop_types__WEBPACK_IMPORTED_MODULE_10___default().number.isRequired)
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_17__.connect)()(EditMovieForm));

/***/ }),

/***/ "./src/pages/movies/movie/components/MovieDescription.jsx":
/*!****************************************************************!*\
  !*** ./src/pages/movies/movie/components/MovieDescription.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieDescription": () => (/* binding */ MovieDescription)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styles/VARIABLES */ "./src/styles/VARIABLES.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);


var _templateObject, _templateObject2, _templateObject3;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var NameAgeComponent = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    padding: 5px 0;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n"])));
var Name = styled_components__WEBPACK_IMPORTED_MODULE_1___default().p(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n    font-size: 25px;\n"])));
var Age = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n    border: 1px solid ", ";\n    border-radius: 3px;\n    padding: 3px 5px;\n"])), _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_3__.VARIABLES.lightgrey);

function MovieDescription(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(NameAgeComponent, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Name, {
        children: props.title
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Age, {
        children: props.release_date.substring(0, 4)
      })]
    }), props.genres.join()]
  });
}

MovieDescription.propTypes = {
  title: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  release_date: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().string.isRequired),
  genres: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().array.isRequired)
};


/***/ }),

/***/ "./src/pages/movies/movie/components/layouts/MovieComponent.jsx":
/*!**********************************************************************!*\
  !*** ./src/pages/movies/movie/components/layouts/MovieComponent.jsx ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieComponent": () => (/* binding */ MovieComponent)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/VARIABLES */ "./src/styles/VARIABLES.js");
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var MovieComponent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n    position: relative;\n"])), _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__.VARIABLES.lightgrey);


/***/ }),

/***/ "./src/pages/movies/sorter/Sorter.jsx":
/*!********************************************!*\
  !*** ./src/pages/movies/sorter/Sorter.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_movies_sorter_components_layouts_SorterListComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @pages/movies/sorter/components/layouts/SorterListComponent */ "./src/pages/movies/sorter/components/layouts/SorterListComponent.jsx");
/* harmony import */ var _pages_movies_sorter_components_SortByText__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @pages/movies/sorter/components/SortByText */ "./src/pages/movies/sorter/components/SortByText.jsx");
/* harmony import */ var _components_SorterDropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/SorterDropdown */ "./src/pages/movies/sorter/components/SorterDropdown.jsx");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store_actionCreators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @store/actionCreators */ "./src/store/actionCreators.js");
/* harmony import */ var _assets_data_SorterOptions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @assets/data/SorterOptions */ "./src/assets/data/SorterOptions.js");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @store/selectors */ "./src/store/selectors.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);













function Sorter(props) {
  var selectedOption = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(_store_selectors__WEBPACK_IMPORTED_MODULE_9__.selectedSorterSelector);
  var asc = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)(_store_selectors__WEBPACK_IMPORTED_MODULE_9__.selectedSorterAscSelector);

  function setSelectedOption(event) {
    if (event.clientX == 0 && event.clientY == 0) {
      //HACK: click is raised twice, when you select option from dropdown. The second click has specified condition 
      var ascNew = selectedOption.id == event.target.value ? !asc : true;
      props.dispatch((0,_store_actionCreators__WEBPACK_IMPORTED_MODULE_7__.setSorterOption)(_assets_data_SorterOptions__WEBPACK_IMPORTED_MODULE_8__.default.find(function (o) {
        return o.id == event.target.value;
      }), ascNew));
    }
  }

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_pages_movies_sorter_components_layouts_SorterListComponent__WEBPACK_IMPORTED_MODULE_3__.SorterListComponent, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_pages_movies_sorter_components_SortByText__WEBPACK_IMPORTED_MODULE_4__.SortByText, {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_components_SorterDropdown__WEBPACK_IMPORTED_MODULE_5__.SorterDropdown, {
      selectedOption: selectedOption,
      changeSelected: setSelectedOption,
      children: _assets_data_SorterOptions__WEBPACK_IMPORTED_MODULE_8__.default.map(function (option) {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("option", {
          value: option.id,
          children: option.name
        }, option.id);
      })
    })]
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,react_redux__WEBPACK_IMPORTED_MODULE_6__.connect)()(Sorter));

/***/ }),

/***/ "./src/pages/movies/sorter/components/SortByText.jsx":
/*!***********************************************************!*\
  !*** ./src/pages/movies/sorter/components/SortByText.jsx ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SortByText": () => (/* binding */ SortByText)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @styles/VARIABLES */ "./src/styles/VARIABLES.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var Text = styled_components__WEBPACK_IMPORTED_MODULE_0___default().p(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    color: ", ";\n"])), _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_1__.VARIABLES.lightgrey);

function SortByText() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Text, {
    children: "SORT BY"
  });
}



/***/ }),

/***/ "./src/pages/movies/sorter/components/SorterDropdown.jsx":
/*!***************************************************************!*\
  !*** ./src/pages/movies/sorter/components/SorterDropdown.jsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SorterDropdown": () => (/* binding */ SorterDropdown)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_imgs_arrow_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @assets/imgs/arrow.png */ "./src/assets/imgs/arrow.png");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @styles/VARIABLES */ "./src/styles/VARIABLES.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var Dropdown = styled_components__WEBPACK_IMPORTED_MODULE_0___default().select(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    border: none;\n    background: ", ";\n    border: none;\n    color: white;\n    padding: 0 10px;\n    appearance: none;\n    background-image: url(", ");\n    background-repeat: no-repeat;\n    background-position-x: 100%;\n    background-position-y: 30%;\n    padding-right: 20px;\n    outline: none;\n    cursor: pointer;\n"])), _styles_VARIABLES__WEBPACK_IMPORTED_MODULE_3__.VARIABLES.darkgrey, _assets_imgs_arrow_png__WEBPACK_IMPORTED_MODULE_1__.default);

function SorterDropdown(props) {
  var _props$selectedOption;

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(Dropdown, {
    defaultValue: (_props$selectedOption = props.selectedOption) === null || _props$selectedOption === void 0 ? void 0 : _props$selectedOption.id,
    onClick: props.changeSelected,
    children: props.children
  });
}

SorterDropdown.propTypes = {
  selectedOption: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().object)
};


/***/ }),

/***/ "./src/pages/movies/sorter/components/layouts/SorterListComponent.jsx":
/*!****************************************************************************!*\
  !*** ./src/pages/movies/sorter/components/layouts/SorterListComponent.jsx ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SorterListComponent": () => (/* binding */ SorterListComponent)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var SorterListComponent = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    color: white;\n"])));


/***/ }),

/***/ "./src/server.jsx":
/*!************************!*\
  !*** ./src/server.jsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "serverRenderer": () => (/* binding */ serverRenderer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/App */ "./src/pages/App.jsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "react-router-dom");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






function renderHTML(html) {
  return "\n        <!DOCTYPE html>\n        <html lang=\"en\">\n        <head>\n            <meta charset=\"UTF-8\">\n            <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\">\n            <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n            <link rel=\"icon\" href=\"imgs/favicon.ico\" type=\"image/ico\" />\n            <title>NetflixRoulette</title>\n            <script defer src=\"/dist/vendors-node_modules_core-js_modules_es_array_concat_js-node_modules_core-js_modules_es_array-823a30.bundle.js\"></script>\n            <script defer src=\"/dist/main.bundle.js\"></script>\n            <link href=\"/dist/main.bundle.css\" rel=\"stylesheet\">\n        </head>\n        <body>\n            <div id=\"app\">".concat(html, "</div>\n        </body>\n        </html>\n  ");
}

function serverRenderer() {
  return function (req, res) {
    var htmlString = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_1__.renderToString)( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.StaticRouter, {
      location: req.url,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_pages_App__WEBPACK_IMPORTED_MODULE_2__.App, {})
    })); // const indexFile = path.resolve('../dist/index.html');
    // fs.readFile(indexFile, 'utf8', (err, data) => {
    //   return res.send(
    //     data.replace('<div id="app"></div>', `<div id="app">${htmlString}</div>`)
    //   );
    // })

    res.send(renderHTML(htmlString));
  };
}



/***/ }),

/***/ "./src/services/formValidator.jsx":
/*!****************************************!*\
  !*** ./src/services/formValidator.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "formValidator": () => (/* binding */ formValidator)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_every_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.every.js */ "core-js/modules/es.array.every.js");
/* harmony import */ var core_js_modules_es_array_every_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_every_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.some.js */ "core-js/modules/es.array.some.js");
/* harmony import */ var core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_some_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.number.parse-int.js */ "core-js/modules/es.number.parse-int.js");
/* harmony import */ var core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_parse_int_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.string.includes.js */ "core-js/modules/es.string.includes.js");
/* harmony import */ var core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_includes_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_10__);











var dateRegex = /^\d{4}-\d{2}-\d{2}$/;
var intRegex = /^([0-9]*)$/;
var formValidator = function formValidator(values, genres) {
  var errors = {};
  validateTitle(values.title, errors);
  validateReleaseDate(values.release_date, errors);
  validateUrl(values.poster_path, errors);
  validateGenres(values.genres, genres, errors);
  validateOverview(values.overview, errors);
  validateRuntime(values.runtime, errors);
  return errors;
};

function validateTitle(title, errors) {
  if (!title) {
    errors.title = 'Title is required';
  }
}

function validateReleaseDate(release_date, errors) {
  if (!release_date) {
    errors.release_date = 'Release date is required';
  } else if (!release_date.match(dateRegex)) {
    errors.release_date = 'Release date must be in format yyyy-mm-dd';
  }
}

function validateUrl(poster_path, errors) {
  if (!poster_path) {
    errors.poster_path = 'Url is required';
  } else if (!poster_path.includes('http')) {
    errors.poster_path = 'Url is incorrect';
  }
}

function validateGenres(genres, correctGenres, errors) {
  if (!genres) {
    errors.genres = 'Genres are required';
  } else if (!genres.split(',').map(function (g) {
    return g.toUpperCase();
  }).every(function (g) {
    return correctGenres.some(function (gg) {
      return gg.name == g;
    });
  })) {
    errors.genres = 'Some of genres are incorrect';
  }
}

function validateOverview(overview, errors) {
  if (!overview) {
    errors.overview = 'Overview is required';
  }
}

function validateRuntime(runtime, errors) {
  if (!runtime) {
    errors.runtime = 'Runtime is required';
  } else if (!runtime.match(intRegex)) {
    errors.runtime = 'Runtime must be an integer';
  } else if (Number.parseInt(runtime) === 0) {
    errors.runtime = 'Runtime must be greater that 0';
  }
}

/***/ }),

/***/ "./src/assets/imgs/arrow.png":
/*!***********************************!*\
  !*** ./src/assets/imgs/arrow.png ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ad40365f89e0c4ba7c4d6a2093fc00da.png");

/***/ }),

/***/ "./src/assets/imgs/movies.png":
/*!************************************!*\
  !*** ./src/assets/imgs/movies.png ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "ac1ef038182f3950a1db8e3568542461.png");

/***/ }),

/***/ "./src/assets/imgs/zoom.png":
/*!**********************************!*\
  !*** ./src/assets/imgs/zoom.png ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "43eda43296a65ebe744964fb4155b2b6.png");

/***/ }),

/***/ "./src/assets/data/FilterOptions.js":
/*!******************************************!*\
  !*** ./src/assets/data/FilterOptions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const FilterOptions = [
    {
        "id": 1,
        "name": "ALL"
    },
    {
        "id": 2,
        "name": "DRAMA"
    },
    {
        "id": 3,
        "name": "ADVENTURE"
    },
    {
        "id": 4,
        "name": "HORROR"
    },
    {
        "id": 5,
        "name": "THRILLER"
    },
    {
        "id": 6,
        "name": "CRIME"
    }
]

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FilterOptions);

/***/ }),

/***/ "./src/assets/data/SorterOptions.js":
/*!******************************************!*\
  !*** ./src/assets/data/SorterOptions.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const SorterOptions = [
    {
        "id": 1,
        "name": "RELEASE DATE",
        "field": "release_date"
    }, 
    {
        "id": 2,
        "name": "RATING",
        "field": "vote_average"
    }, 
    {
        "id": 3,
        "name": "TITLE",
        "field": "title"
    }
]

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SorterOptions);

/***/ }),

/***/ "./src/models/Movie.js":
/*!*****************************!*\
  !*** ./src/models/Movie.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Movie)
/* harmony export */ });
class Movie {
    constructor(title, release_date, poster_path, genres, overview, runtime){
        this.title = title;
        this.release_date = release_date;
        this.poster_path = poster_path;
        this.genres = genres;
        this.overview = overview;
        this.runtime = runtime;
    }
}

/***/ }),

/***/ "./src/models/index.js":
/*!*****************************!*\
  !*** ./src/models/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Movie": () => (/* reexport safe */ _Movie__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Movie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Movie */ "./src/models/Movie.js");




/***/ }),

/***/ "./src/pages/404/index.js":
/*!********************************!*\
  !*** ./src/pages/404/index.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Page404": () => (/* reexport safe */ _Page404__WEBPACK_IMPORTED_MODULE_0__.Page404)
/* harmony export */ });
/* harmony import */ var _Page404__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Page404 */ "./src/pages/404/Page404.jsx");




/***/ }),

/***/ "./src/pages/components/index.js":
/*!***************************************!*\
  !*** ./src/pages/components/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ErrorBoundary": () => (/* reexport safe */ _ErrorBoundary__WEBPACK_IMPORTED_MODULE_0__.ErrorBoundary),
/* harmony export */   "Logo": () => (/* reexport safe */ _Logo__WEBPACK_IMPORTED_MODULE_1__.Logo),
/* harmony export */   "GlobalWidthComponent": () => (/* reexport safe */ _GlobalWidthComponent__WEBPACK_IMPORTED_MODULE_2__.GlobalWidthComponent),
/* harmony export */   "FormComponent": () => (/* reexport safe */ _FormComponent__WEBPACK_IMPORTED_MODULE_3__.FormComponent),
/* harmony export */   "FormOptionName": () => (/* reexport safe */ _FormOptionName__WEBPACK_IMPORTED_MODULE_4__.FormOptionName),
/* harmony export */   "FormOptionInput": () => (/* reexport safe */ _FormOptionInput__WEBPACK_IMPORTED_MODULE_5__.FormOptionInput),
/* harmony export */   "FormOptionDropdown": () => (/* reexport safe */ _FormOptionDropdown__WEBPACK_IMPORTED_MODULE_6__.FormOptionDropdown),
/* harmony export */   "TransparentButton": () => (/* reexport safe */ _TransparentButton__WEBPACK_IMPORTED_MODULE_7__.TransparentButton),
/* harmony export */   "ColoredButton": () => (/* reexport safe */ _ColoredButton__WEBPACK_IMPORTED_MODULE_8__.ColoredButton),
/* harmony export */   "SemitransparentButton": () => (/* reexport safe */ _SemitransparentButton__WEBPACK_IMPORTED_MODULE_9__.SemitransparentButton),
/* harmony export */   "ValidationFormText": () => (/* reexport safe */ _ValidationFormText__WEBPACK_IMPORTED_MODULE_10__.ValidationFormText),
/* harmony export */   "AppContainer": () => (/* reexport safe */ _AppContainer__WEBPACK_IMPORTED_MODULE_11__.AppContainer),
/* harmony export */   "NavigationMap": () => (/* reexport safe */ _NavigationMap__WEBPACK_IMPORTED_MODULE_12__.NavigationMap)
/* harmony export */ });
/* harmony import */ var _ErrorBoundary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorBoundary */ "./src/pages/components/ErrorBoundary.jsx");
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Logo */ "./src/pages/components/Logo.jsx");
/* harmony import */ var _GlobalWidthComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GlobalWidthComponent */ "./src/pages/components/GlobalWidthComponent.jsx");
/* harmony import */ var _FormComponent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FormComponent */ "./src/pages/components/FormComponent.jsx");
/* harmony import */ var _FormOptionName__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FormOptionName */ "./src/pages/components/FormOptionName.jsx");
/* harmony import */ var _FormOptionInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FormOptionInput */ "./src/pages/components/FormOptionInput.jsx");
/* harmony import */ var _FormOptionDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FormOptionDropdown */ "./src/pages/components/FormOptionDropdown.jsx");
/* harmony import */ var _TransparentButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TransparentButton */ "./src/pages/components/TransparentButton.jsx");
/* harmony import */ var _ColoredButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ColoredButton */ "./src/pages/components/ColoredButton.jsx");
/* harmony import */ var _SemitransparentButton__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./SemitransparentButton */ "./src/pages/components/SemitransparentButton.jsx");
/* harmony import */ var _ValidationFormText__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ValidationFormText */ "./src/pages/components/ValidationFormText.jsx");
/* harmony import */ var _AppContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./AppContainer */ "./src/pages/components/AppContainer.jsx");
/* harmony import */ var _NavigationMap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./NavigationMap */ "./src/pages/components/NavigationMap.jsx");
















/***/ }),

/***/ "./src/pages/footer/index.js":
/*!***********************************!*\
  !*** ./src/pages/footer/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Footer": () => (/* reexport safe */ _Footer__WEBPACK_IMPORTED_MODULE_0__.Footer)
/* harmony export */ });
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer */ "./src/pages/footer/Footer.jsx");




/***/ }),

/***/ "./src/pages/header/index.js":
/*!***********************************!*\
  !*** ./src/pages/header/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* reexport safe */ _Header__WEBPACK_IMPORTED_MODULE_0__.Header),
/* harmony export */   "MovieHeader": () => (/* reexport safe */ _MovieHeader__WEBPACK_IMPORTED_MODULE_1__.MovieHeader)
/* harmony export */ });
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Header */ "./src/pages/header/Header.jsx");
/* harmony import */ var _MovieHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MovieHeader */ "./src/pages/header/MovieHeader.jsx");





/***/ }),

/***/ "./src/pages/header/movieDetails/index.js":
/*!************************************************!*\
  !*** ./src/pages/header/movieDetails/index.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieDetails": () => (/* reexport safe */ _MovieDetails__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _MovieDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovieDetails */ "./src/pages/header/movieDetails/MovieDetails.jsx");




/***/ }),

/***/ "./src/pages/movies/filter/index.js":
/*!******************************************!*\
  !*** ./src/pages/movies/filter/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Filter": () => (/* reexport safe */ _Filter__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Filter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Filter */ "./src/pages/movies/filter/Filter.jsx");




/***/ }),

/***/ "./src/pages/movies/index.js":
/*!***********************************!*\
  !*** ./src/pages/movies/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Movies": () => (/* reexport safe */ _Movies__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Movies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Movies */ "./src/pages/movies/Movies.jsx");




/***/ }),

/***/ "./src/pages/movies/movie/index.js":
/*!*****************************************!*\
  !*** ./src/pages/movies/movie/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Movie": () => (/* reexport safe */ _Movie__WEBPACK_IMPORTED_MODULE_0__.Movie)
/* harmony export */ });
/* harmony import */ var _Movie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Movie */ "./src/pages/movies/movie/Movie.jsx");




/***/ }),

/***/ "./src/pages/movies/sorter/index.js":
/*!******************************************!*\
  !*** ./src/pages/movies/sorter/index.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Sorter": () => (/* reexport safe */ _Sorter__WEBPACK_IMPORTED_MODULE_0__.default)
/* harmony export */ });
/* harmony import */ var _Sorter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sorter */ "./src/pages/movies/sorter/Sorter.jsx");




/***/ }),

/***/ "./src/store/actionCreators.js":
/*!*************************************!*\
  !*** ./src/store/actionCreators.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMovies": () => (/* binding */ getMovies),
/* harmony export */   "getMovie": () => (/* binding */ getMovie),
/* harmony export */   "deleteMovie": () => (/* binding */ deleteMovie),
/* harmony export */   "addMovie": () => (/* binding */ addMovie),
/* harmony export */   "updateMovie": () => (/* binding */ updateMovie),
/* harmony export */   "setFilterOption": () => (/* binding */ setFilterOption),
/* harmony export */   "setSorterOption": () => (/* binding */ setSorterOption)
/* harmony export */ });
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actionType */ "./src/store/actionType.js");
/* harmony import */ var _store_selectors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/selectors */ "./src/store/selectors.js");
/* harmony import */ var _store_apiMap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/apiMap */ "./src/store/apiMap.js");
/* harmony import */ var _store_apiRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @store/apiRequest */ "./src/store/apiRequest.js");





function getMovies(search) {
    return (dispatch, getState) => {
        let state = getState();
        let filter = (0,_store_selectors__WEBPACK_IMPORTED_MODULE_1__.selectedFilterSelector)(state).name;
        let sorter = (0,_store_selectors__WEBPACK_IMPORTED_MODULE_1__.selectedSorterSelector)(state).field;
        let asc = (0,_store_selectors__WEBPACK_IMPORTED_MODULE_1__.selectedSorterAscSelector)(state);

        let url = (0,_store_apiMap__WEBPACK_IMPORTED_MODULE_2__.getMoviesUrl)(filter, sorter, asc, search);

        return (0,_store_apiRequest__WEBPACK_IMPORTED_MODULE_3__.apiGet)(url)
            .then(res => dispatch({
                type: _actionType__WEBPACK_IMPORTED_MODULE_0__.actionType.SET_MOVIES,
                payload: res.data
            }))
    }
}

function getMovie(id){
    return (dispatch, getState) => {
        let url = (0,_store_apiMap__WEBPACK_IMPORTED_MODULE_2__.getMovieUrl)(id);

        (0,_store_apiRequest__WEBPACK_IMPORTED_MODULE_3__.apiGet)(url)
            .then(res => dispatch({
                type: _actionType__WEBPACK_IMPORTED_MODULE_0__.actionType.SET_MOVIE,
                payload: res
            }))
    }
}

function deleteMovie(id){
    return (dispatch, getState) => {
        return (0,_store_apiRequest__WEBPACK_IMPORTED_MODULE_3__.apiDelete)((0,_store_apiMap__WEBPACK_IMPORTED_MODULE_2__.deleteMovieUrl)(id))
            .then(() => getMovies()(dispatch, getState));
    }
}

function addMovie(movie){
    return (dispatch, getState) => {
        return (0,_store_apiRequest__WEBPACK_IMPORTED_MODULE_3__.apiAdd)((0,_store_apiMap__WEBPACK_IMPORTED_MODULE_2__.addMovieUrl)(), movie)
            .then(() => getMovies()(dispatch, getState));
    }
}

function updateMovie(movie){
    return (dispatch, getState) => {
        return (0,_store_apiRequest__WEBPACK_IMPORTED_MODULE_3__.apiUpdate)((0,_store_apiMap__WEBPACK_IMPORTED_MODULE_2__.updateMovieUrl)(), movie)
            .then(() => getMovies()(dispatch, getState));
    }
}

function setFilterOption(option){
    return {
        type: _actionType__WEBPACK_IMPORTED_MODULE_0__.actionType.SET_FILTER,
        payload: option
    }
}

function setSorterOption(option, asc){
    return {
        type: _actionType__WEBPACK_IMPORTED_MODULE_0__.actionType.SET_SORTER,
        payload: { option, asc }
    }
}



/***/ }),

/***/ "./src/store/actionType.js":
/*!*********************************!*\
  !*** ./src/store/actionType.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "actionType": () => (/* binding */ actionType)
/* harmony export */ });
const actionType = {
    GET_MOVIES: 'GET_MOVIES',
    GET_MOVIE: 'GET_MOVIE',
    SET_MOVIES: 'SET_MOVIES',
    SET_MOVIE: 'SET_MOVIE',
    ADD_MOVIE: 'ADD_MOVIE',
    UPDATE_MOVIE: 'UPDATE_MOVIE',
    DELETE_MOVIE: 'DELETE_MOVIE',
    SET_FILTER: 'SET_FILTER',
    SET_SORTER: 'SET_SORTER',
};

/***/ }),

/***/ "./src/store/apiMap.js":
/*!*****************************!*\
  !*** ./src/store/apiMap.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMoviesUrl": () => (/* binding */ getMoviesUrl),
/* harmony export */   "getMovieUrl": () => (/* binding */ getMovieUrl),
/* harmony export */   "deleteMovieUrl": () => (/* binding */ deleteMovieUrl),
/* harmony export */   "addMovieUrl": () => (/* binding */ addMovieUrl),
/* harmony export */   "updateMovieUrl": () => (/* binding */ updateMovieUrl)
/* harmony export */ });
const globalUrl = 'http://localhost:4000';

let getMoviesUrl = (filter, sorter, asc, search) => {
    let url = globalUrl + '/movies';

    filter = filter.toLowerCase();
    if(filter && filter != 'all'){
        url += getBinder(url) + `filter=${filter}`;
    }

    sorter = sorter.toLowerCase();
    if(sorter){
        let sortOrder = asc ? 'asc' : 'desc';
        url += getBinder(url) + `sortBy=${sorter}&sortOrder=${sortOrder}`;
    }

    if(search){
        url += getBinder(url) + `search=${search}&searchBy=title`;
    }

    return url;
}

let getBinder = url => url.includes('?') ? '&' : '?';

let getMovieUrl = id => globalUrl + `/movies/${id}`;

let deleteMovieUrl = id => globalUrl + `/movies/${id}`;

let addMovieUrl = () => globalUrl + '/movies';

let updateMovieUrl = () => globalUrl + '/movies';



/***/ }),

/***/ "./src/store/apiRequest.js":
/*!*********************************!*\
  !*** ./src/store/apiRequest.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiGet": () => (/* binding */ apiGet),
/* harmony export */   "apiDelete": () => (/* binding */ apiDelete),
/* harmony export */   "apiAdd": () => (/* binding */ apiAdd),
/* harmony export */   "apiUpdate": () => (/* binding */ apiUpdate)
/* harmony export */ });
let apiGet = url => {
    return fetch(url)
        .then(res => res.json());
}

let apiDelete = url => {
    return fetch(url, {
        method: 'DELETE' 
    });
}

let apiAdd = (url, object) => {
    return fetch(url, { 
        method: 'POST', 
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, 
        body: JSON.stringify(object) 
    })
}

let apiUpdate = (url, object) => {
    return fetch(url, { 
        method: 'PUT', 
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' }, 
        body: JSON.stringify(object) 
    })
}



/***/ }),

/***/ "./src/store/initialState.js":
/*!***********************************!*\
  !*** ./src/store/initialState.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialState": () => (/* binding */ initialState)
/* harmony export */ });
/* harmony import */ var _assets_data_FilterOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @assets/data/FilterOptions */ "./src/assets/data/FilterOptions.js");
/* harmony import */ var _assets_data_SorterOptions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @assets/data/SorterOptions */ "./src/assets/data/SorterOptions.js");



const initialState = {
    movies: [],
    movie: null,
    filter: {
        selectedOption: _assets_data_FilterOptions__WEBPACK_IMPORTED_MODULE_0__.default[0]
    },
    sorter: {
        selectedOption: _assets_data_SorterOptions__WEBPACK_IMPORTED_MODULE_1__.default[0], 
        asc: true
    },
};



/***/ }),

/***/ "./src/store/reducers.js":
/*!*******************************!*\
  !*** ./src/store/reducers.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rootReducer": () => (/* binding */ rootReducer),
/* harmony export */   "moviesReducer": () => (/* binding */ moviesReducer)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actionType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actionType */ "./src/store/actionType.js");
/* harmony import */ var _initialState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./initialState */ "./src/store/initialState.js");




function moviesReducer(state = _initialState__WEBPACK_IMPORTED_MODULE_2__.initialState.movies, action){
    switch(action.type){
        case _actionType__WEBPACK_IMPORTED_MODULE_1__.actionType.GET_MOVIES:
            return state;
        case _actionType__WEBPACK_IMPORTED_MODULE_1__.actionType.SET_MOVIES:
            return action.payload;
        case _actionType__WEBPACK_IMPORTED_MODULE_1__.actionType.DELETE_MOVIE:
            return action.payload;
        case _actionType__WEBPACK_IMPORTED_MODULE_1__.actionType.ADD_MOVIE:
            return action.payload;
        case _actionType__WEBPACK_IMPORTED_MODULE_1__.actionType.UPDATE_MOVIE:
            return action.payload;
        default:
            return state;
    }
}

function movieReducer(state = _initialState__WEBPACK_IMPORTED_MODULE_2__.initialState.movies, action){
    switch(action.type){
        case _actionType__WEBPACK_IMPORTED_MODULE_1__.actionType.GET_MOVIE:
            return state;
        case _actionType__WEBPACK_IMPORTED_MODULE_1__.actionType.SET_MOVIE:
            return action.payload;
        default:
            return state;
    }
}

function filterReducer(state = _initialState__WEBPACK_IMPORTED_MODULE_2__.initialState.filter, action){
    switch(action.type){
        case _actionType__WEBPACK_IMPORTED_MODULE_1__.actionType.SET_FILTER:
            return {
                options: state.options,
                selectedOption: action.payload
            }
        default:
            return state;
    }
}  

function sorterReducer(state = _initialState__WEBPACK_IMPORTED_MODULE_2__.initialState.sorter, action){
    switch(action.type){
        case _actionType__WEBPACK_IMPORTED_MODULE_1__.actionType.SET_SORTER:
            return {
                options: state.options,
                selectedOption: action.payload.option,
                asc: action.payload.asc
            }
        default:
            return state;
    }
}  

const rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.combineReducers)({
    'movies': moviesReducer,
    'movie': movieReducer,
    'filter': filterReducer,
    'sorter': sorterReducer,
});



/***/ }),

/***/ "./src/store/selectors.js":
/*!********************************!*\
  !*** ./src/store/selectors.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moviesSelector": () => (/* binding */ moviesSelector),
/* harmony export */   "movieSelector": () => (/* binding */ movieSelector),
/* harmony export */   "selectedFilterSelector": () => (/* binding */ selectedFilterSelector),
/* harmony export */   "selectedSorterSelector": () => (/* binding */ selectedSorterSelector),
/* harmony export */   "selectedSorterAscSelector": () => (/* binding */ selectedSorterAscSelector)
/* harmony export */ });
let moviesSelector = store => store.movies;
let movieSelector = store => store.movie;
let selectedFilterSelector = store => store.filter.selectedOption;
let selectedSorterSelector = store => store.sorter.selectedOption;
let selectedSorterAscSelector = store => store.sorter.asc;



/***/ }),

/***/ "./src/store/store.js":
/*!****************************!*\
  !*** ./src/store/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "store": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ "./src/store/reducers.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);




const composedEnhancer = (0,redux__WEBPACK_IMPORTED_MODULE_0__.applyMiddleware)((redux_thunk__WEBPACK_IMPORTED_MODULE_2___default()));

const store = (0,redux__WEBPACK_IMPORTED_MODULE_0__.createStore)(_reducers__WEBPACK_IMPORTED_MODULE_1__.rootReducer, composedEnhancer);



/***/ }),

/***/ "./src/styles/VARIABLES.js":
/*!*********************************!*\
  !*** ./src/styles/VARIABLES.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VARIABLES": () => (/* binding */ VARIABLES)
/* harmony export */ });
const VARIABLES = {
    red: '#f65261',
    lightgrey: '#5b5b5b',
    grey: '#424242',
    darkgrey: '#232323',
}

/***/ }),

/***/ "core-js/modules/es.array.concat.js":
/*!*****************************************************!*\
  !*** external "core-js/modules/es.array.concat.js" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es.array.concat.js");;

/***/ }),

/***/ "core-js/modules/es.array.every.js":
/*!****************************************************!*\
  !*** external "core-js/modules/es.array.every.js" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es.array.every.js");;

/***/ }),

/***/ "core-js/modules/es.array.find.js":
/*!***************************************************!*\
  !*** external "core-js/modules/es.array.find.js" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es.array.find.js");;

/***/ }),

/***/ "core-js/modules/es.array.includes.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es.array.includes.js" ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es.array.includes.js");;

/***/ }),

/***/ "core-js/modules/es.array.iterator.js":
/*!*******************************************************!*\
  !*** external "core-js/modules/es.array.iterator.js" ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es.array.iterator.js");;

/***/ }),

/***/ "core-js/modules/es.array.join.js":
/*!***************************************************!*\
  !*** external "core-js/modules/es.array.join.js" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es.array.join.js");;

/***/ }),

/***/ "core-js/modules/es.array.map.js":
/*!**************************************************!*\
  !*** external "core-js/modules/es.array.map.js" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es.array.map.js");;

/***/ }),

/***/ "core-js/modules/es.array.some.js":
/*!***************************************************!*\
  !*** external "core-js/modules/es.array.some.js" ***!
  \***************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es.array.some.js");;

/***/ }),

/***/ "core-js/modules/es.function.name.js":
/*!******************************************************!*\
  !*** external "core-js/modules/es.function.name.js" ***!
  \******************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es.function.name.js");;

/***/ }),

/***/ "core-js/modules/es.number.constructor.js":
/*!***********************************************************!*\
  !*** external "core-js/modules/es.number.constructor.js" ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es.number.constructor.js");;

/***/ }),

/***/ "core-js/modules/es.number.parse-int.js":
/*!*********************************************************!*\
  !*** external "core-js/modules/es.number.parse-int.js" ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es.number.parse-int.js");;

/***/ }),

/***/ "core-js/modules/es.object.to-string.js":
/*!*********************************************************!*\
  !*** external "core-js/modules/es.object.to-string.js" ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es.object.to-string.js");;

/***/ }),

/***/ "core-js/modules/es.regexp.exec.js":
/*!****************************************************!*\
  !*** external "core-js/modules/es.regexp.exec.js" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es.regexp.exec.js");;

/***/ }),

/***/ "core-js/modules/es.regexp.to-string.js":
/*!*********************************************************!*\
  !*** external "core-js/modules/es.regexp.to-string.js" ***!
  \*********************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es.regexp.to-string.js");;

/***/ }),

/***/ "core-js/modules/es.string.includes.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es.string.includes.js" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es.string.includes.js");;

/***/ }),

/***/ "core-js/modules/es.string.iterator.js":
/*!********************************************************!*\
  !*** external "core-js/modules/es.string.iterator.js" ***!
  \********************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es.string.iterator.js");;

/***/ }),

/***/ "core-js/modules/es.string.match.js":
/*!*****************************************************!*\
  !*** external "core-js/modules/es.string.match.js" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es.string.match.js");;

/***/ }),

/***/ "core-js/modules/es.string.search.js":
/*!******************************************************!*\
  !*** external "core-js/modules/es.string.search.js" ***!
  \******************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es.string.search.js");;

/***/ }),

/***/ "core-js/modules/es.string.split.js":
/*!*****************************************************!*\
  !*** external "core-js/modules/es.string.split.js" ***!
  \*****************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/es.string.split.js");;

/***/ }),

/***/ "core-js/modules/web.dom-collections.iterator.js":
/*!******************************************************************!*\
  !*** external "core-js/modules/web.dom-collections.iterator.js" ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/web.dom-collections.iterator.js");;

/***/ }),

/***/ "core-js/modules/web.url.js":
/*!*********************************************!*\
  !*** external "core-js/modules/web.url.js" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("core-js/modules/web.url.js");;

/***/ }),

/***/ "formik":
/*!*************************!*\
  !*** external "formik" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("formik");;

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");;

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-dom/server");;

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");;

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");;

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

module.exports = require("redux");;

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("redux-thunk");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/server.jsx");
/******/ })()
;