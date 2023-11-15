const menu = document.querySelector('.item');
const openBtn = document.querySelector('.openMenu');
const closeBtn = document.querySelector('.closeMenu');

openBtn.addEventListener('click', ()=>{
    menu.style.display ='flex';
    menu.style.top = '0';
})

// close navbar menu

const closeNav = () => {
    menu.style.top = '-100%';
}

closeBtn.addEventListener('click', closeNav);