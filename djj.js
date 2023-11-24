window.onload = function() {
    shuffleList();
};

function shuffleList() {
    var ul = document.getElementByClassName('b');
    for (var i = ul.children.length; i >= 0; i--) {
        ul.appendChild(ul.children[Math.random() * i | 0]);
    }
}
