window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 75) {
        header.classList.add('header-scroll');
    } else {
        header.classList.remove('header-scroll');
    }
});

document.querySelector("#pincelButton").addEventListener("click", () => {

    document.querySelector("#pincel").style.height = "25rem"

})