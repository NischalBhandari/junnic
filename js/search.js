var x = document.getElementById('show-search');
var y = document.getElementById('search-bar');
var closeSearch = document.getElementById('close-search');
var mobileMenu = document.getElementsByClassName('mobile-menu');
var navBar = document.getElementById('my-nav');
var searchBar = document.getElementById('search-bar');
var show = true;
var boolmobMenu = true;

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