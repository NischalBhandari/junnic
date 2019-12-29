var x = document.getElementById('show-search');
var y = document.getElementById('search-bar');
var closeSearch = document.getElementById('close-search');
var mobileMenu = document.getElementsByClassName('mobile-menu');
var navBar = document.getElementById('my-nav');
var searchBar = document.getElementById('search-bar');
var addToCart = document.getElementById('add-to-cart');
var myCart = document.getElementById('my-cart');
var myCartTable = document.getElementById('my-cart-table');
var closeCart = document.getElementById('close-cart');
var showCart = false;
var show = true;
var boolmobMenu = true;

function openCity(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
myCart.onclick = function () {
        myCartTable.style.display = 'block';
    showCart = !showCart;
}

x.onclick = function () {
    if (show) {
        y.style.display = 'block';
        show = !show;
    }
    else {
        y.style.display = 'none';
        show = !show;
    }
}
closeCart.onclick = function () {
    myCartTable.style.display = 'none';
    showCart = !showCart;
}
closeSearch.onclick = function () {
   searchBar.style.display = 'none';
    show = !show;
}
console.log(mobileMenu[0]);
mobileMenu[0].onclick = function () {
    if (boolmobMenu) {
        navBar.style.display = 'block';

        boolmobMenu = !boolmobMenu;
    }
    else {
        navBar.style.display = 'none';
        boolmobMenu = !boolmobMenu;
    }
}
addToCart.onclick = function () {
    console.log('cart clicked');
}