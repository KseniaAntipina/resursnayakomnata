let burger = document.getElementById('dropdownMenu');

dropdownMenu.onclick = function myFunction() {
    let nameMenu = document.getElementById('nameMenu');
    let krestik = document.querySelector('fa-bars');

    let x = document.getElementById('myTopnav');
	if (x.className === "header__menu-top") {
        x.className += " responsive";
        
        burger.classList.toggle('burger_active');
       
	} else {
        x.className = "header__menu-top";
         
        burger.classList.toggle('burger_active');
    }
}


$(document).mouseup(function (e) {
    var container = $("myTopnav");
    if (container.has(e.target).length === 0){
        container.hide();
    }
});