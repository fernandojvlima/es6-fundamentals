"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

//Working with classes
var TodoList =
/*#__PURE__*/
function () {
  function TodoList() {
    _classCallCheck(this, TodoList);

    this.data = [];
  }

  _createClass(TodoList, [{
    key: "add",
    value: function add(data) {
      this.data.push(data);
      console.log(this.data);
    }
  }]);

  return TodoList;
}();

var NewList =
/*#__PURE__*/
function (_TodoList) {
  _inherits(NewList, _TodoList);

  function NewList() {
    var _this;

    _classCallCheck(this, NewList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NewList).call(this));
    _this.usuario = 'Diego';
    return _this;
  }

  _createClass(NewList, [{
    key: "mostraUsuario",
    value: function mostraUsuario() {
      console.log(this.usuario);
    }
  }]);

  return NewList;
}(TodoList);

var MinhaLista = new NewList();

document.getElementById('novo-todo').onclick = function () {
  MinhaLista.add('novo todo');
};

var Math =
/*#__PURE__*/
function () {
  function Math() {
    _classCallCheck(this, Math);
  }

  _createClass(Math, null, [{
    key: "soma",
    value: function soma(a, b) {
      return a + b;
    }
  }]);

  return Math;
}();

console.log(Math.soma(10, 10)); //WorkingWithArrays
//Map
//To run all the itens of the vector, quite similar to "FOR".

var arr = [1, 2, 3, 4, 5, 6, 7, 8];
var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr); //Reduce
//You consume your array and reduce to a number for example, like soma = soma + value1;

var sum = arr.reduce(function (item, next) {
  return item + next;
});
console.log(sum); //Filter 
//Used to filter a condition from the array

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); //Find
//Used to find a information in the array
//Case of not find, the return is undefined.

var find = arr.find(function (item) {
  return item === 4;
});
console.log(find); //Arrow function is a short form to express a function, usually not named, very commmom after ES.

var array = [100, 200, 250, 345, 500]; //Convencional Way to MAP ***

var arrayMap = array.map(function (item) {
  return item * 2;
});
console.log(arrayMap); //Same using Arrow Function ***

var arrayMapArrowF = array.map(function (item) {
  return item * 2;
});
console.log(arrayMapArrowF);

var soma1 = function soma1() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 8;
  return a + b;
}; //very commomm in callbacks and simple functions.
//Another commomm aplication is with functions as a const:


function test1() {
  return '1,2,3,4,5,6';
}

console.log(test1);

var test2 = function test2() {
  return [1, 2, 3, 4, 5, 6];
};

console.log(test2());

function soma(a) {
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 6;
  return a + b;
}

console.log(soma(2)); //Unstructuring ES

var user = {
  name: 'Fernando',
  age: 36,
  address: {
    street: 291,
    number: 121,
    zone: 'one'
  }
};
var name = user.name,
    zone = user.address.zone;
console.log(name);
console.log(zone);

function showName(_ref) {
  var name = _ref.name,
      age = _ref.age;
  console.log(name, age);
}

showName(user);
var number = user.address.number;
console.log(number); //Rest and Spread ES, to take the rest of a unstructuring for example.
//REST (... )

var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var a = numbers[0],
    b = numbers[1],
    c = numbers[2],
    resto = numbers.slice(3);
console.log(a);
console.log(b);
console.log(c);
console.log(resto);

function sum1() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(sum1(1, 2, 3, 4, 5, 6, 100));

function sum2(a, b) {
  for (var _len2 = arguments.length, params = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    params[_key2 - 2] = arguments[_key2];
  }

  console.log(params.reduce(function (total, next) {
    return total + next;
  }));
  console.log(a, b);
}

sum2(10, 20, 1, 2, 3, 4, 56, 7); //Spread , to join different arrays for example

var arra10 = [1, 2, 3, 4, 5];
var arra11 = [6, 7, 8, 9, 10];
var arrJoined = [].concat(arra10, arra11);
console.log(arrJoined); //using a existing user to create a new one similar

var user2 = _objectSpread({}, user, {
  name: 'David'
});

console.log(user2);
