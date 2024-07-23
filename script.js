let input_box= document.getElementById('input-box');
let task_container= document.getElementById('task_container')

function addTask(){
    if (input_box.value==='') {
        alert("You must write something !!!");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML= input_box.value;
        task_container.appendChild(li);

        let span= document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    input_box.value='';
}

task_container.addEventListener('click',function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
},false);