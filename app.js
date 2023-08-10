const menu = document.querySelector(".liste-menu");
const btnMenu = document.querySelector(".hamburger");

btnMenu.addEventListener('click', () =>
{
        menu.classList.toggle("active");
})


const allLinks = document.querySelectorAll(".item");

allLinks.forEach(item => {
        item.addEventListener('click', () => {

                menu.classList.toggle("active");
})

        })
