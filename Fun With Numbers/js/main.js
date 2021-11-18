let heading = document.querySelector('#heading');
const headText = heading.textContent;

heading.textContent = "";
const splitHeading = headText.split("");

for(let i=0;i<splitHeading.length;i++){
    heading.innerHTML += `<span>${splitHeading[i]}</span>`;
}

let j= 0;
let timer = setInterval(animeRight,100);
 
$('span')[0].classList.add('color');

function animeRight(){
    $('span')[j].classList.add('color');
    if(j > 0)
        $('span')[j-1].classList.remove('color');
    j++;
    console.log('right',j);
    if(j === splitHeading.length){
        clearInterval(timer);
        timer = setInterval(animeLeft,150);
        j--;
    }
}

function animeLeft(){
    $('span')[j].classList.remove('color');
    if(j > 0)
        $('span')[j-1].classList.add('color');
    j--;
    console.log('left',j);
    if(j === 0){
        clearInterval(timer);
        timer = setInterval(animeRight,150);
    }  
}

