alert('Opa');
//Working with classes
class TodoList {
    constructor(){
        this.data = [];
    }

    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class NewList extends TodoList {
    constructor(){
        super();
        this.usuario = 'Diego';
    }

    mostraUsuario(){
        console.log(this.usuario);
    }
}

const MinhaLista = new NewList();

document.getElementById('novo-todo').onclick = function() {
    MinhaLista.add('novo todo');
}


class Math {
    static soma(a,b){
        return a+b;
    } 
}

console.log(Math.soma(10,10));

//WorkingWithArrays


//Map
//To run all the itens of the vector, quite similar to "FOR".
const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const newArr = arr.map(function (item, index) {
    return item + index;
});

console.log(newArr);

//Reduce
//You consume your array and reduce to a number for example, like soma = soma + value1;
const sum = arr.reduce(function(item,next){
    return item + next;
});
console.log(sum);

//Filter 
//Used to filter a condition from the array

const filter = arr.filter(function(item){
   return item % 2 === 0;
});

console.log(filter);


//Find
//Used to find a information in the array
//Case of not find, the return is undefined.

const find = arr.find(function(item){
    return item === 4;
});

console.log(find);

//Arrow function is a short form to express a function, usually not named, very commmom after ES.

const array = [100,200,250,345, 500];

//Convencional Way to MAP ***
const arrayMap = array.map(function(item){
    return item * 2;
});
console.log(arrayMap);

//Same using Arrow Function ***
const arrayMapArrowF = array.map(item => item*2);
console.log(arrayMapArrowF);

const soma1 = (a=10, b=8) => a + b;
//very commomm in callbacks and simple functions.

//Another commomm aplication is with functions as a const:
function test1(){
    return '1,2,3,4,5,6';
}
console.log(test1);

const test2 = () => [1,2,3,4,5,6];

console.log(test2());

function soma(a,b=6){
    return a+b;
}

console.log(soma(2));

//Unstructuring ES
const user = {
    name: 'Fernando',
    age: 36,
    address: {
        street: 291,
        number: 121,
        zone: 'one' 
    },
};

const {name, address: {zone} } = user;
console.log(name);
console.log(zone);


function showName( {name, age }) {
    console.log(name, age);
}

showName(user);


const { address: { number } } = user;
console.log(number); 


//Rest and Spread ES, to take the rest of a unstructuring for example.


//REST (... )
const numbers = [1,2,3,4,5,6,7,8];

const [a,b,c, ...resto] = numbers;
console.log(a);
console.log(b);
console.log(c); 
console.log(resto);

function sum1(...params) {
    return params.reduce((total, next)  => total+next);
}

console.log(sum1(1,2,3,4,5,6,100));

function sum2(a,b,...params) {
    console.log(params.reduce((total,next) => total + next));
    console.log(a,b);

}

sum2(10,20,1,2,3,4,56,7);

//Spread , to join different arrays for example

const arra10 = [1,2,3,4,5];
const arra11 = [6,7,8,9,10];

const arrJoined = [...arra10, ...arra11];
console.log(arrJoined);

//using a existing user to create a new one similar

const user2 = {...user, name:'David'};
console.log(user2);

//Template Literals ` ` 


const nameLiterals = 'Robert';
const ageLiterals = 25;
console.log(`Meu nome é ${nameLiterals}  e tenho ${ageLiterals} anos`);

//Short Sintax, used when the name of the variable is the same of the name of the value.
// const userShort = {
//     name, //name: name,
//     age1, //age1: age1,
//     empresa: 'Rockeseat'
// };

//Using Export And Import From Webpack
import {sumTest} from './functions';
console.log(sumTest(23,14));

import {sub} from './functions';
console.log(sub(20,10));

//You can rename using "as"
//You can import all function using for example:
// import * as functions from functions.js

//Working with promises and async and await


import axios from 'axios';

class Api {

    static async getUserInfo(username) {
        try{
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch (err) {
            console.warn('Erro na requisição');
        }     
    }
}

Api.getUserInfo('fernandojvlima');
Api.getUserInfo('fernandojvlima4444');
