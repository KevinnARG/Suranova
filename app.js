window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 75) {
        header.classList.add('header-scroll');
    } else {
        header.classList.remove('header-scroll');
    }
});

// document.querySelector("#menu").addEventListener("click", () => {
//     if (menuAbierto == false) {
//         document.querySelector("#menu").classList.remove("bi-list")
//         document.querySelector("#menu").classList.add("bi-x-lg")
        
//         document.querySelector(".menu").style.marginLeft = '0'
//         document.querySelector(".sombra").style.display = 'flex'

//         menuAbierto = true
//         console.log("click")
//     } else {
//         menuAbierto = false
//         document.querySelector("#menu").classList.remove("bi-x-lg")
//         document.querySelector("#menu").classList.add("bi-list")
//         document.querySelector(".menu").style.marginLeft = '-20rem'
//         document.querySelector(".sombra").style.display = 'none'
//     }
// })

document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById('menu-btn');
    const menu = document.getElementById('menu');

    menuBtn.addEventListener('click', function() {
        menu.classList.toggle('active');
        menuBtn.classList.toggle('active');
    });
});



