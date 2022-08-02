
const board = document.querySelector('#coloringboard');
for(let i =0; i< 16; i++){
    const row = document.createElement('div');
    row.classList.add('gridrow');
    board.appendChild(row);
  for(let j=0; j<16; j++){
        let square = document.createElement('div');
        square.classList.add('square');
        square.addEventListener('mouseover',function(e){
            if(e.buttons){
            square.style.backgroundColor = 'black';
            square.style.border = 'solid black';
            }
        });
        row.appendChild(square);
 }
} 