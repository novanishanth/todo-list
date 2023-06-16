let button=document.getElementById('add')//addbutton
let todoList=document.getElementById('todoList')//fordiv
let input=document.getElementById('input')//forinputtext

let todos=[];//add each input to the array

button.addEventListener('click',()=>{
    todos.push(input.value)//push the value of input to the array
    addtodo(input.value)//after click display addtodo function
    input.value=''//empty for next text
})

function addtodo(todo){
    let para=document.createElement('p')
    para.innerText=todo;//list would be displayed as a paragraph
    todoList.appendChild(para)

    para.addEventListener('click',()=>{
        para.style.textDecoration = 'line-through'
        remove(todo)
    })
    para.addEventListener('dblclick',()=>{
        todoList.removeChild(para)
        remove(todo)
    })

}

function remove(todo){
    let index = todos.indexOf(todo)
    if (index > -1) {
        todos.splice(index, 1);
      }
    localStorage.setItem('todos',JSON.stringify(todos))
}