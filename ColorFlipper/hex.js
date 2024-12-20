const hex = [0,1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D', 'E', 'F'];
// # f15025

const button = document.getElementById('btn');

const color = document.querySelector('.color');

button.addEventListener('click', function() {
    // get the hex color randomly when the button is clicked
    let hexColor = '#';
    // let randomNumber = Math.floor(Math.random() * hex.length);
    for( i=0; i<6; i++ ){
        hexColor += hex[getRandomNumber()];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}

// #EAC2DF = violet