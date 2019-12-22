var x = document.getElementById('show-search');
var y = document.getElementById('search-bar');
var closeSearch = document.getElementById('close-search');
var show = true;

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
    y.style.display = 'none';
    show = !show;
}