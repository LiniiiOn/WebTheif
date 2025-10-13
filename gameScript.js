
var trueKeyObject = document.querySelectorAll(".keyTrue");
var castleObject = document.querySelectorAll(".castle");
var gameCompleted = false;

export function isColliding (element1, element2) {
    var rect1 = element1.getBoundingClientRect();
    var rect2 = element2.getBoundingClientRect();

    return !(rect1.right < rect2.left || 
        rect1.left > rect2.right || 
        rect1.bottom < rect2.top || 
        rect1.top > rect2.bottom)
}

export function checkKeyInCastle(key) {
    if (gameCompleted) return;
    
    if (key.classList.contains('keyTrue') && isColliding(key, castle)) {
        // Правильный ключ в замке - УСПЕХ!
        gameCompleted = true;
        console.log("Yes!")
    }};