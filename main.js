
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