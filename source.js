
const board = document.querySelector('#coloringboard');
for(let i =0; i< 16; i++){
    const row = document.createElement('div');
    board.appendChild(row);
  for(let j=0; j<16; j++){
        let square = document.createElement('div');
        square.classList.add('square');
       square.style.top = 20*i+`px`;
        square.style.left = 100*j+`px`;
        square.textContent = "yo?";
        row.appendChild(square);
 }
} 