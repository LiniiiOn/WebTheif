import { chekerKey } from "./chekerKey.js";
import { mouseMoveCheker } from "./mouseMoveCheker.js";
import { touchMoveChecher } from "./TouchMoveCheker.js";

export function mainScene(){
        let castleImg = document.createElement('img');
        castleImg.src = "lock.png"
        castleImg.classList.add('castle');
        castleImg.classList.add('firstPart');
        castleImg.draggable = false;
    
        let div = document.createElement('div');
        div.classList.add('wrapper');
        div.classList.add('firstPart');
    
        let keyTrueImg = document.createElement('img');
        keyTrueImg.src = "masterKey.png";
        keyTrueImg.classList.add('move');
        keyTrueImg.classList.add('keyTrue');
        keyTrueImg.classList.add('firstPart');
        keyTrueImg.draggable = false;
    
        let keyImg1 = document.createElement('img');
        keyImg1.src = "masterKey.png";
        keyImg1.classList.add('move');
        keyImg1.classList.add('key1');
        keyImg1.classList.add('firstPart');
        keyImg1.draggable = false;
    
        let keyImg2 = document.createElement('img');
        keyImg2.src = "masterKey.png";
        keyImg2.classList.add('move');
        keyImg2.classList.add('key2');
        keyImg2.classList.add('firstPart');
        keyImg2.draggable = false;
    
        
        div.appendChild(keyImg1);
        div.appendChild(keyTrueImg);
        div.appendChild(keyImg2);
        
        document.body.append(castleImg);
        document.body.append(div);
        
        mouseMoveCheker();
        touchMoveChecher();
        chekerKey();
    
}
