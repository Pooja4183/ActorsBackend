import axios from 'axios';
import { response } from 'express/lib/express';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((response) => {
  const todo = response.data as Todo;

  logTodo(todo);
});

const logTodo = (todo: Todo) => {
  console.log(`
  The todo with ID:${todo.id}
  has a title of: ${todo.title}
  is it finished:${todo.completed}
  `);
};

let numbers: boolean;
numbers = true;

const fun = (a: number, b: number): number => {
  console.log(`First number: ${a}
  Second Number: ${b}`);
  a = a + 10;
  b = b * 2;
  return a + b;
};

let pqr = fun(2, 3);
let p = fun(5, 6);
let x = fun(6, 8);

console.log(`Resultant: ${pqr}`);



// interface around functions 

const add = (a:number, b:number):number => {
return a +b;
};

// Void and Never




  

