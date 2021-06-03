'use strict'

const input = document.querySelector('#taskInput');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');

btn.addEventListener('click', (e) => {
if (input.value === ' ' ) return 
createDeleteElements(input.value)
input.value = ' '
})

function createDeleteElements(value) {
  console.log(value);

const li = document.createElement('li');
const btn = document.createElement('button');
li.className= 'li'
li.textContent = value

btn.className= 'btn'
btn.textContent = 'Delete'
li.appendChild(btn)

btn.addEventListener('click', (e) => {
  result.removeChild(li)
})

result.appendChild(li)
}
















// document.getElementById('todolist').addEventListener('click' , clickHandler);

// function clickHandler() {
// const input = document.createElement('input');
// input.textContent = 'hello';

// document.getElementById('myBtn').append(input);
// }

