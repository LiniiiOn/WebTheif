export function mouseMoveCheker() {
    var moveObject = document.querySelectorAll(".move");
    
    moveObject.forEach(function (obj) {
        var minusX = 0;
        var minusY = 0;
        
        function listener(e) {
            obj.style.left = e.pageX - minusX + "px";
            obj.style.top = e.pageY - minusY + "px";
        };
    
        function allEvent(e) {
            listener(e);
        }
        
        obj.addEventListener('mousedown', function(e) {
            document.addEventListener('mousemove', allEvent);
            obj.style.cursor = "grabbing";
            console.log(obj.classList)
            minusX = e.clientX - obj.getBoundingClientRect().left;
            minusY = e.clientY - obj.getBoundingClientRect().top;
        });

        
        document.addEventListener('mouseup', function () {
            document.removeEventListener('mousemove', allEvent);
            obj.style.cursor = "grab";
        });
        
    });
}
