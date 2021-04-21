// let add=document.querySelector('#add');
// let subtract=document.querySelector('#subtract');
// let input=document.querySelector('input').value;
// console.log(input);

// add.addEventListener('click',function(){
//     input.value=parseInt(input.value)+1;
// });

// subtract.addEventListener('click',function(){
//     if(input.value>0){
//     input.value=parseInt(input.value)-1;
//     }
// });


let add=document.getElementById('add');
let sub=document.getElementById('subtract');

let value=0;

document.getElementById('num').innerText=value;

add.addEventListener('click',function(){
    value=value+1;
    document.getElementById('num').innerText=value;
});

sub.addEventListener('click',function(){
    value=value-1;
    document.getElementById('num').innerText=value;
});