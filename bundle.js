"use strict";

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
console.log(arrayMapArrowF); //very commomm in callbacks and simple functions.
//Another commomm aplication is with functions as a const:

function test1() {
  return '1,2,3,4,5,6';
}

console.log(test1);

var test2 = function test2() {
  return [1, 2, 3, 4, 5, 6];
};

console.log(test2());
