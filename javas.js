// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }
function handleKey(event){
    const player = event.key;

    const alpha = document.getElementById('y')
    const user = alpha.innerText;
    const word = user.toLocaleLowerCase();
    if(player === word){
        const score = textById('score')
        const updateScore = score + 1;
        setTextById('score',updateScore)





    //   const point = document.getElementById('score');
    //   const scoreText = point.innerText;
    //   const currentScore = parseInt(scoreText)
    //  const newScore = currentScore + 1;
    //   point.innerText = newScore
   
        removeBg(word)
        game()
    }
    else{
        const life = textById('life')
        const update = life - 1;
        setTextById('life',update)
        if(update === 0){
            over()
        }




    //    const lifes = document.getElementById('life')
    //    const text = lifes.innerText;
    //    const currentLife = parseInt(text);
    //    const newLife = currentLife - 1;
    //    lifes.innerText = newLife
    }

}
document.addEventListener('keyup', handleKey)
function game(){
    const alphabet = alpha();
    const y = document.getElementById('y');
    y.innerText = alphabet;
    addBg(alphabet);

}
function play(){
    hidden('home-screen');
    hidden('finish');
    show('play-ground');
    setTextById('life',5);
    setTextById('score',0)
    game();
}
function over(){
    hidden('play-ground');
    show('finish');
    const res = textById('score');

}