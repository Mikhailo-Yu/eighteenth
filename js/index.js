let imgEl = document.querySelector('.js-img');
let btnEl = document.querySelector('.form__button');

btnEl.addEventListener('click', () => {
    imgEl.setAttribute('src', `images/` + Math.ceil(Math.random() * 8)  + `.jpg`);
})



console.log(Math.ceil(Math.random() * 9));