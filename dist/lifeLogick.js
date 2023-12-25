let gameLife = 3;
let lifeImage = document.getElementById('image-life');
let buttonFalseGame = document.querySelectorAll('.false-button');
let buttonTrueGame = document.querySelectorAll('.true-button');
let refreshButton = document.getElementById('quiz-next-btn'); 

buttonFalseGame.forEach(function(button) {
    button.addEventListener('click', clickButton);
});

buttonTrueGame.forEach(function(button) {
    button.addEventListener('click', clickTrueButton);
});

function clickTrueButton () {
    let buttons = document.querySelectorAll('.false-button');
    buttons.forEach(function(button) {
        button.classList.add('disabled');
    });
}

function handleClick() {
    let buttons = document.querySelectorAll('.false-button');
    buttons.forEach(function(button) {
        button.classList.remove('disabled');
    });
}

function clickButton() {
    gameLife = gameLife - 1;
    if (gameLife == 2) {
        lifeImage.src = 'img/2-life.png';
    } else if ( gameLife == 1 ) {
        lifeImage.src = 'img/1-life.png';
    } else if ( gameLife == 0 ) {
        location.href=`page_0.html`
    }

    let buttons = document.querySelectorAll('.false-button');
    buttons.forEach(function(button) {
        button.classList.add('disabled');
    });

    // Убираем обработчик событий первой кнопки
    buttonFalseGame.removeEventListener('click', clickButton);
}  

refreshButton.addEventListener("click", handleClick); 

