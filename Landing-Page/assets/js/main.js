//Menu Area

const menu = () =>{
    const closeMenu = document.querySelector('#closeMenu')
    const openMenu = document.querySelector('#openMenu')
    const menu = document.querySelector('#menu') 
    openMenu.addEventListener('click', () => {
        menu.classList.add('menuShow') 
    })
    closeMenu.addEventListener('click', () => {
        menu.classList.remove('menuShow') 
    })
}
menu()