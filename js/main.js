function showMenu() {
    let menu = document.getElementsByClassName('menu')[0];
    if (menu.className == 'menu') {
        menu.className = 'menu menu_active';
    }
    else{
        menu.className = 'menu'
    }
}