console.log('-index.js-')

//-------------------------------------
// using DOM Api
//-------------------------------------


let box = document.querySelector('.alert')
let showBtn = document.querySelector('.btn-primary')
let hideBtn = document.querySelector('.btn-danger')
let greetBtn = document.querySelector('.btn-success')


showBtn.addEventListener('click', e => {
    box.style.display = 'block'
})
hideBtn.addEventListener('click', e => {
    box.style.display = 'none'
})

greetBtn.addEventListener('click', e => {
    box.innerHTML = "greetings"
})


//-------------------------------------
// XHR/Fetch Api
//-------------------------------------

let todosBtn = document.querySelector('.btn-dark');
todosBtn.addEventListener('click', e => {
    let url = 'https://jsonplaceholder.typicode.com/todos?_limit=5';
    let promise = fetch(url)
    promise
        .then(response => response.json())
        .then(todos => {
            let todosEle = document.getElementById('todos');
            let arr = [];
            todos.forEach(todo => {
                let liTemplate = `
                <li class="list-group-item">${todo.id} - ${todo.title}  - <span class="badge ${todo.completed ? 'badge-success' : 'badge-danger'}">${todo.completed}<span></li>
                `
                arr.push(liTemplate);
            });
            todosEle.innerHTML = arr.join("")
        })
})


//-------------------------------------
// TImer API
//-------------------------------------

let timeEle = document.getElementById('time');

setInterval(() => {
    timeEle.innerHTML = new Date().toLocaleTimeString()
}, 1000)