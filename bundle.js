/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/functions.js":
/*!**************************!*\
  !*** ./src/functions.js ***!
  \**************************/
/*! exports provided: sumTest, sub */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sumTest\", function() { return sumTest; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"sub\", function() { return sub; });\nfunction sumTest(a, b) {\n  return a + b;\n}\nfunction sub(c, d) {\n  return c - d;\n}\n\n//# sourceURL=webpack:///./src/functions.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions */ \"./src/functions.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nalert('Opa'); //Working with classes\n\nvar TodoList =\n/*#__PURE__*/\nfunction () {\n  function TodoList() {\n    _classCallCheck(this, TodoList);\n\n    this.data = [];\n  }\n\n  _createClass(TodoList, [{\n    key: \"add\",\n    value: function add(data) {\n      this.data.push(data);\n      console.log(this.data);\n    }\n  }]);\n\n  return TodoList;\n}();\n\nvar NewList =\n/*#__PURE__*/\nfunction (_TodoList) {\n  _inherits(NewList, _TodoList);\n\n  function NewList() {\n    var _this;\n\n    _classCallCheck(this, NewList);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(NewList).call(this));\n    _this.usuario = 'Diego';\n    return _this;\n  }\n\n  _createClass(NewList, [{\n    key: \"mostraUsuario\",\n    value: function mostraUsuario() {\n      console.log(this.usuario);\n    }\n  }]);\n\n  return NewList;\n}(TodoList);\n\nvar MinhaLista = new NewList();\n\ndocument.getElementById('novo-todo').onclick = function () {\n  MinhaLista.add('novo todo');\n};\n\nvar Math =\n/*#__PURE__*/\nfunction () {\n  function Math() {\n    _classCallCheck(this, Math);\n  }\n\n  _createClass(Math, null, [{\n    key: \"soma\",\n    value: function soma(a, b) {\n      return a + b;\n    }\n  }]);\n\n  return Math;\n}();\n\nconsole.log(Math.soma(10, 10)); //WorkingWithArrays\n//Map\n//To run all the itens of the vector, quite similar to \"FOR\".\n\nvar arr = [1, 2, 3, 4, 5, 6, 7, 8];\nvar newArr = arr.map(function (item, index) {\n  return item + index;\n});\nconsole.log(newArr); //Reduce\n//You consume your array and reduce to a number for example, like soma = soma + value1;\n\nvar sum = arr.reduce(function (item, next) {\n  return item + next;\n});\nconsole.log(sum); //Filter \n//Used to filter a condition from the array\n\nvar filter = arr.filter(function (item) {\n  return item % 2 === 0;\n});\nconsole.log(filter); //Find\n//Used to find a information in the array\n//Case of not find, the return is undefined.\n\nvar find = arr.find(function (item) {\n  return item === 4;\n});\nconsole.log(find); //Arrow function is a short form to express a function, usually not named, very commmom after ES.\n\nvar array = [100, 200, 250, 345, 500]; //Convencional Way to MAP ***\n\nvar arrayMap = array.map(function (item) {\n  return item * 2;\n});\nconsole.log(arrayMap); //Same using Arrow Function ***\n\nvar arrayMapArrowF = array.map(function (item) {\n  return item * 2;\n});\nconsole.log(arrayMapArrowF);\n\nvar soma1 = function soma1() {\n  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;\n  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;\n  return a + b;\n}; //very commomm in callbacks and simple functions.\n//Another commomm aplication is with functions as a const:\n\n\nfunction test1() {\n  return '1,2,3,4,5,6';\n}\n\nconsole.log(test1);\n\nvar test2 = function test2() {\n  return [1, 2, 3, 4, 5, 6];\n};\n\nconsole.log(test2());\n\nfunction soma(a) {\n  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;\n  return a + b;\n}\n\nconsole.log(soma(2)); //Unstructuring ES\n\nvar user = {\n  name: 'Fernando',\n  age: 36,\n  address: {\n    street: 291,\n    number: 121,\n    zone: 'one'\n  }\n};\nvar name = user.name,\n    zone = user.address.zone;\nconsole.log(name);\nconsole.log(zone);\n\nfunction showName(_ref) {\n  var name = _ref.name,\n      age = _ref.age;\n  console.log(name, age);\n}\n\nshowName(user);\nvar number = user.address.number;\nconsole.log(number); //Rest and Spread ES, to take the rest of a unstructuring for example.\n//REST (... )\n\nvar numbers = [1, 2, 3, 4, 5, 6, 7, 8];\nvar a = numbers[0],\n    b = numbers[1],\n    c = numbers[2],\n    resto = numbers.slice(3);\nconsole.log(a);\nconsole.log(b);\nconsole.log(c);\nconsole.log(resto);\n\nfunction sum1() {\n  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {\n    params[_key] = arguments[_key];\n  }\n\n  return params.reduce(function (total, next) {\n    return total + next;\n  });\n}\n\nconsole.log(sum1(1, 2, 3, 4, 5, 6, 100));\n\nfunction sum2(a, b) {\n  for (var _len2 = arguments.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {\n    params[_key2 - 2] = arguments[_key2];\n  }\n\n  console.log(params.reduce(function (total, next) {\n    return total + next;\n  }));\n  console.log(a, b);\n}\n\nsum2(10, 20, 1, 2, 3, 4, 56, 7); //Spread , to join different arrays for example\n\nvar arra10 = [1, 2, 3, 4, 5];\nvar arra11 = [6, 7, 8, 9, 10];\nvar arrJoined = [].concat(arra10, arra11);\nconsole.log(arrJoined); //using a existing user to create a new one similar\n\nvar user2 = _objectSpread({}, user, {\n  name: 'David'\n});\n\nconsole.log(user2); //Template Literals ` ` \n\nvar nameLiterals = 'Robert';\nvar ageLiterals = 25;\nconsole.log(\"Meu nome \\xE9 \".concat(nameLiterals, \"  e tenho \").concat(ageLiterals, \" anos\")); //Short Sintax, used when the name of the variable is the same of the name of the value.\n// const userShort = {\n//     name, //name: name,\n//     age1, //age1: age1,\n//     empresa: 'Rockeseat'\n// };\n//Using Export And Import From Webpack\n\n\nconsole.log(Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"sumTest\"])(23, 14));\n\nconsole.log(Object(_functions__WEBPACK_IMPORTED_MODULE_0__[\"sub\"])(20, 10)); //You can rename using \"as\"\n//You can import all function using for example:\n// import * as functions from functions.js\n//Working with promises and async and await\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });