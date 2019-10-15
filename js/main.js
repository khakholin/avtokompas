let menuButton = document.getElementsByClassName('menu-button')[0];
menuButton.onclick = function() {
    let menu = document.getElementsByClassName('menu')[0];

    if (menu.className == 'menu') {
        menu.className = 'menu menu_active';
    }
    else{
        menu.className = 'menu'
    }
}
for (let i = 0; i < 6; i++) {
    let imageBlock = document.getElementsByClassName('price-card__image')[i];
    let curImage = imageBlock.getElementsByTagName('img')[0];
    imageBlock.onmouseover = imageBlock.onmouseout = handler;

    function handler(event) {
        if (event.type == 'mouseover') {
            curImage.src = 'img/price/'+ (i+1) + '.1.jpg';
        }
        if (event.type == 'mouseout') {
            curImage.src = 'img/price/'+ (i+1) + '.jpg';
        }
    }
}