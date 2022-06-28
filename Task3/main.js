//get elements
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const todocomplete = document.querySelector('.todo-complete');
// console.log(todoInput);

//add event listeners
todoButton.addEventListener('click', addtodo);

//function 
function addtodo(event) {
    // console.log(event);
    // it prevent form from submitting
    event.preventDefault();
    // console.log("hello ")
    const todoDive = document.createElement('div');
    todoDive.classList.add('todo');
    //making the todo list item
    const newtodo = document.createElement('li');
    const newtodotext = todoInput.value;
    if (newtodotext === "") {
        alert('Please enter something');
    }
    else {
        newtodo.innerHTML = newtodotext;
        newtodo.classList.add("todo-item");
        todoDive.appendChild(newtodo);
        newtodo.addEventListener('click',createtextinput);
        //making seperate button for delete 
        const editButton = document.createElement('button');
        editButton.innerText = "Edit";
        editButton.classList.add("edit-button");
        todoDive.appendChild(editButton);
        // editButton.addEventListener('click', edittodo);
        const deleteButton = document.createElement('button');
        deleteButton.innerText = "Delete";
        deleteButton.classList.add("delete-button");
        todoDive.appendChild(deleteButton);
        deleteButton.addEventListener('click', deletetodo); //addEventListener to delete
        //making seperate button for complete
        const completeButton = document.createElement('button');
        completeButton.innerText = "Complete";
        completeButton.classList.add("complete-button");
        todoDive.appendChild(completeButton);
        completeButton.addEventListener("click", completetodo); //addEventListener to complete
        //now we are going to add seperate button for edit
        //append whole div to the ul
        todoList.appendChild(todoDive);

        //cleat todo value
        todoInput.value = "";
    }
}

//this function will delete items
function deletetodo(e) {
    let todotempdiv = e.target.parentElement;
    // console.log(todotempdiv.parentElement);
    // console.log(e.target.parentElement);
    let todocomplete = document.querySelector(".todo-complete");
    let childrencount = todocomplete.childElementCount;
    // console.log(childrencount);
    if (todotempdiv.parentElement == todocomplete && childrencount==1) {
        let todocomlettitle = document.querySelectorAll('.todocomplete-title')[1];
        todocomlettitle.innerHTML = "";

    }
    
    // console.log(complete);
    todotempdiv.parentElement.removeChild(todotempdiv);
    

}

function completetodo(e){

    let todotempdiv = e.target.parentElement;
    let todocomlettitle = document.querySelectorAll('.todocomplete-title')[1];
    // console.log(todocomlettitle);
    if (todotempdiv.parentElement.hasChildNodes()) {
        todocomlettitle.innerHTML = "Completed";
    }
    let complete = todotempdiv.children[3];
    todotempdiv.removeChild(complete);
    let edit = todotempdiv.children[1];
    todotempdiv.removeChild(edit);
    // console.log(todotempdiv.children);
    todocomplete.appendChild(todotempdiv);
}

function createtextinput(e){
    let temp = e.target.parentElement.children[0].innerHTML;
    // let inputtext = document.createElement('input');
    // inputtext.setAttribute('type', 'text');
    // inputtext.classList.add("edit-text");
    // e.target.parentElement.children[0].appendChild(inputtext);
    e.target.parentElement.children[0].innerHTML = '<input type="text" placeholder="enter text" class="edit-text" autofocus>'; //this is an li's innerHTML
    try {
        e.target.parentElement.children[1].onclick=function(){  //this is an edit button click
            // console.log("hi")
            try {
                if(e.target.parentElement.children[0].children[0].value == ""){ //input text's value
                    e.target.parentElement.children[0].innerHTML=temp; //setting older value
                }
                else{
                    e.target.parentElement.children[0].innerHTML=e.target.parentElement.children[0].children[0].value ; //setting inputed value
                }
            } catch (error) {
                
            }
            
            
        }
        let ignoreclickonme = e.target.parentElement;
        try {
            document.onclick = function(event){
                let isclick = ignoreclickonme.contains(event.target);
                if (!isclick) {
                    e.target.parentElement.children[0].innerHTML=temp;
                }
            }
        } catch (error) {
            
        }


    } catch (TypeError) {
        e.target.parentElement.children[0].innerHTML=temp;
    }
    // e.target.parentElement.children[0].innerHTML.change = function(){
        
    // }
    console.log("click");
}
