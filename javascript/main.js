
window.addEventListener("scroll", function () {
    var navBar = this.document.querySelector(".navbar");
    var scrollValue = window.scrollY;

    if (scrollValue < 300) {
        navBar.setAttribute("class", "navbar navbar-expand-lg navbar-light bg-light");

    }
    else {
        navBar.setAttribute("class", "navbar navbar-expand-lg navbar-dark bg-danger")
    }

});