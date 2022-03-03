//Importanto dados

const todo_list = document.querySelector('.to_do')

const todoButton = document.getElementById('button')

//Eventos


todoButton.addEventListener('click', addTodo) 






//functions 

//Cancela o evento padrão do Form
function addTodo(event){
    event.preventDefault()
    console.log('funciona')
}
//Cria uma task


function create_task(){
   
    const data_text = document.getElementById('data_import').value
   
    if(data_text === '' ){
        alert('Digite Algo')
    }else if(data_text == ' '){
        alert('Digite Algo')
    }else{
        const todo_div = document.createElement('div')
        todo_div.classList.add('to_do_div')

        const todo_li = document.createElement('li')
        todo_li.classList.add('to_do_li')

        todo_li.innerText = data_text // Escrevendo a task


        todo_div.appendChild(todo_li) // Adicionando o Li a DIV


       const complet_button = document.createElement('button')// Criando um botão de check
       complet_button.innerHTML= ' <img src="./img/check (1).png" alt="" width="15px">'
       complet_button.classList.add('complet-btn')
       todo_div.appendChild(complet_button)

       const delete_button = document.createElement('button')
       delete_button.innerHTML= '<img src="./img/trash.png" alt="" width="15px">'
       delete_button.classList.add('delete-btn')
       todo_div.appendChild(delete_button)
       

       todo_list.appendChild(todo_div) //Adicionando uma task no App



        



        data_import.value= " " // Apagando o input
    }


}



//delete and Check
todo_list.addEventListener('click',delete_check) 
 
function delete_check(e){
     console.log(e.target)
     
    const item = e.target
    
    if(item.classList[0] ==='delete-btn'){
        const todo = item.parentElement
        todo.remove()
    }

    else if(item.classList[0] === 'complet-btn'){
        const todo = item.parentElement
        todo.classList.add('check')
    }
    else if(item.classList[0] === 'to_do_li'){
        const todo = item.parentElement
        todo.classList.add('focus')
    }
 }


 function active(){
     const only_acive = document.querySelector('.check')
     only_acive.classList.add('display_off')
 }
 
 