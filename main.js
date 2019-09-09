
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