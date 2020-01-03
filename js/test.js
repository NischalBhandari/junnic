var a = [[1, 2],[3,4]];
var b = [[4,5],[6,7]];
var c = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
var toggler = document.getElementsByClassName('navbar-toggler');
var collapser = document.getElementById('navbarSupportedContent');
var dropdowns = document.getElementsByClassName('dropdown');
var dropMenu = document.getElementsByClassName('dropdown-menu');
toggler[0].onclick = function () {
    collapser.classList.toggle('show');
}
for (var i = 0; i < dropdowns.length; i++) {
    console.log(dropdowns);
    console.log(dropdowns.length);
    dropdowns[i].onclick = function () {
        var drops = document.getElementsByClassName('dropdown');
        var dropMenu = document.getElementsByClassName('dropdown-menu');
        for (var j = 0; j < drops.length; j++) {
            drops[j].classList.toggle('show');
            dropMenu[j].classList.toggle('show');
        }
    }
}
function matrixMultiply(a, b) {
        for (var i = 0; i < a.length; i++) {
            for (var j = 0; j < b[0].length; j++) {
                for (var k = 0; k < b.length; k++) {
                    c[i][j]+=( a[i][k] * b[k][j]);
                    console.log(c[i][j]);
                    console.log(i, j,k);
                }
            }
        }
    }
matrixMultiply(a, b);
console.log(c);