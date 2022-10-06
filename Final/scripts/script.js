let myform = document.querySelector('#myform');

let todoText = document.querySelector('.todo');

let number = 0 ;

myform.addEventListener('submit',function(){
    if(todoText.value == '' ){
        alert('pls typing ...')
    }else{
        let listItem =document.createElement('li');
        listItem.innerHTML = todoText.value;

        let myul= document.querySelector('#myul');
        myul.appendChild(listItem);};

        todoText.value = '';
        number++;
        document.querySelector('#total-count').innerHTML = number;
});