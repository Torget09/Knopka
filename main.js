let box = document.querySelector ('.box');
let btn = document.querySelector ('.btn');
let oq = document.querySelector ('.oq');
let ya = document.querySelector ('.ya');
let a = document.querySelector ('.a');

btn.addEventListener('click', function(){
    if(btn.classList.contains('btn1')){
        btn.classList.remove('btn1');
        oq.classList.remove('oqq');
        box.classList.remove('box1');
        a.classList.remove('a1');
    }else{
        btn.classList.add('btn1');
        oq.classList.add('oqq');
        box.classList.add('box1');
        a.classList.add('a1');
    }
});