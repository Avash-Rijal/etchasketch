const grid = document.querySelector('#grid');

for(let i = 0; i < 256; i++){
    const box = document.createElement('div');
    box.classList.add('box');
    box.addEventListener('mouseover' , function(event){
        event.target.style.backgroundColor = 'black';
    })
    grid.appendChild(box);
    
}
function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}
function randomColor(){
    let letters = '0123456789ABCDEF';
    let hash = '#';
    for (let i = 0 ; i < 6 ; i++){
        hash += letters[Math.floor(Math.random()*16)];
    }
    return hash;
}
let userInput = prompt('How many squares would you like to use in each column and rows?');
removeAllChildNodes(grid);
if(userInput<=100){
    grid.setAttribute('style' , `grid-template-columns: repeat(${userInput}, 2fr);
        grid-template-rows: repeat(${userInput}, 2fr);`);
    for(let i = 0; i < userInput*userInput; i++){
        const box = document.createElement('div');
        box.classList.add('box');
        box.addEventListener('mouseover', function(event){
             event.target.style.backgroundColor = `${randomColor()}`;
            });
        grid.appendChild(box);
}
}else if(userInput>100) {
    alert("I am afraid your browser may crash, Please use lower value");
}
