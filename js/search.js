var x = document.getElementById('show-search');
var y = document.getElementById('search-bar');
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