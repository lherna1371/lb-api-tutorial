import { getCharacter } from 'rickmortyapi'

let aliveCounter = 0;
let deadCounter = 0;


document.querySelector('button').addEventListener('click', function(){
    callAPI(); 
})


async function callAPI() {
    // 826 characters we can use in the API
    let characterID = Math.ceil(Math.random() * 826);
    let characterData = await getCharacter(characterID);

    console.log(characterData);

    let name = characterData.data.name; 
    let image = characterData.data.image;
    let status = characterData.data.status; // dead/alive 

    document.querySelector('img').src = image;
    document.querySelector('.character-status').textContent = name;

    if (status === 'Alive') {
        aliveCounter++;
        document.querySelector('#alive-count').textContent = aliveCounter;
    } else if (status === 'Dead') {
        deadCounter++; 
        document.querySelector('#dead-count').textContent = deadCounter;
    } else {
        console.log('Character Status is Unkown!!!')
    }

}




