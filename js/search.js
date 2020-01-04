var x = document.getElementById('show-search');
var closeSearch = document.getElementById('close-search');
var mobileMenu = document.getElementsByClassName('mobile-menu');
var navBar = document.getElementById('my-nav');
var searchBar = document.getElementById('search-bar');
var addToCart = document.getElementById('add-to-cart');
var myCart = document.getElementById('my-cart');
var myCartTable = document.getElementById('my-cart-table');
var closeCart = document.getElementById('close-cart');


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
    myCartTable.classList.toggle('show');
}

x.onclick = function () {
    searchBar.classList.toggle('show');
}
closeCart.onclick = function () {
    myCartTable.classList.toggle('show');
}
closeSearch.onclick = function () {
    searchBar.classList.toggle('show');
}

mobileMenu[0].onclick = function () {
    navBar.classList.toggle('show');
}
addToCart.onclick = function () {
    console.log('cart clicked');
}
