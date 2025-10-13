export function chekerKey () {
    var truKeyObject = document.querySelectorAll(".keyTrue"); 
    var castleObject = document.querySelector(".castle");
    
    truKeyObject.forEach(function (obj) {
    
        function checker() {
        var castleRect = castleObject.getBoundingClientRect();
        var trueKey = obj.getBoundingClientRect();
            
        if (trueKey.left < castleRect.right && 
            trueKey.right > castleRect.left && 
            trueKey.top >  castleRect.top && 
            trueKey.bottom < castleRect.bottom)
            {
                var element = document.querySelectorAll(".firstPart");
                element.forEach(function (el) {
                    el.remove();
                });
    
                let div = document.createElement('div');
                div.classList.add("hrefForYoyTube");
    
                let link = document.createElement('a');
                link.href = 'https://t.me/+zBkY8aeSjyIxODVi';
                link.textContent = 'Перейди!';
                div.appendChild(link);
                    
                document.body.append(div)}};
    
        obj.addEventListener('mousedown', function(e) {
            obj.addEventListener("mousemove", checker)
        })
        obj.addEventListener('touchend', function(e) {
            obj.addEventListener("touchmove", checker)
        })
    }); 
}