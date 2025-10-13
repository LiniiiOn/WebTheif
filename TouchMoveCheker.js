export function touchMoveChecher() {
    var moveObject = document.querySelectorAll(".move");

    moveObject.forEach(function (obj) {
        var minusX = 0;
        var minusY = 0;

        function listener(e) {
            // Берем первое касание
            var touch = e.touches[0];
            obj.style.left = touch.pageX - minusX + "px";
            obj.style.top = touch.pageY - minusY + "px";
        };

        function allEvent(e) {
            listener(e);
        }

        obj.addEventListener("touchstart", function(e) {
            document.addEventListener("touchmove", allEvent);
            
            var touch = e.touches[0];
            minusX = touch.clientX - obj.getBoundingClientRect().left;
            minusY = touch.clientY - obj.getBoundingClientRect().top;
            
            // Предотвращаем скролл страницы
            e.preventDefault();
        });
        
        document.addEventListener("touchend", function () {
            document.removeEventListener("touchmove", allEvent);
        });

        // Предотвращаем контекстное меню при долгом нажатии
        obj.addEventListener("contextmenu", function(e) {
            e.preventDefault();
        });
    });
}