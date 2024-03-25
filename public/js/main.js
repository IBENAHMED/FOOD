const icon = document.querySelector("#burger");
const active = document.querySelector(".active");

icon.addEventListener('click', (e) => {
    active.classList.toggle('hidden')
})