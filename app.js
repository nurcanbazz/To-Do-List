let fasFaBtn = document.querySelector('i');
let toDoContainer = document.getElementById('toDoContainer');
let item = document.getElementById('item');
let btnClear = document.getElementById('btn-clear');





fasFaBtn.addEventListener('click',() => {

    let  li = document.createElement('li');
    li.classList.add('li-style');
    toDoContainer.appendChild(li);
    li.innerHTML = item.value;
    item.value = "";

    li.addEventListener('click',()=>{
        li.style.textDecoration = 'line-through';
        li.style.color = "red";
    })

    btnClear.addEventListener('click', () =>{
    toDoContainer.removeChild(li); 
    })
    


});  

