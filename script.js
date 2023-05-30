let entered_task=document.querySelector('.entered-task');
let add=document.querySelector('.add');
let tasks=document.querySelector('.tasks');

entered_task.addEventListener('keyup',()=>{
    if(entered_task.value.trim()!=0){
        add.classList.add('active')
    }else{
        add.classList.remove('active')
    }
})

add.addEventListener('click',()=>{
    if(entered_task.value.trim()!=0){
        let newtask=document.createElement('div');
        newtask.classList.add('item');
        newtask.innerHTML=`
        <p>${entered_task.value}</p>
        <div class="item-btn">
        <i class="fa-solid fa-xmark"></i></div>`
        tasks.appendChild(newtask);
        entered_task.value="";
    }else{
        alert("Please enter a task")
    }
})
tasks.addEventListener('click',(e)=>{
    if(e.target.classList.contains('fa-xmark'))
    e.target.parentElement.parentElement.remove();
})