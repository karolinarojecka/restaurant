const menu = document.querySelector('.hamburger__icon--js');
menu.addEventListener('click', () => {
    const navigation = document.querySelector('.navigation--js');
    navigation.classList.toggle(`navigation--open`);
})