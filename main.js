const navOpen = document.querySelector('.nav-toggle')
const navClose = document.querySelector('.nav-close')
const sidebar = document.querySelector('.sidebar')


navOpen.addEventListener('click', () => {
    sidebar.classList.add('sidebar-open')
})

navClose.addEventListener('click', () => {
    sidebar.classList.remove('sidebar-open')
})
