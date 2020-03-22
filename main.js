// Get a quote
const FORM = document.getElementById('form');
const SUBMIT = document.getElementById('main-submit');
const CLOSE_BUTTON = document.getElementById('close-btn');

FORM.addEventListener('submit', (el) => {
    el.preventDefault();

    // const NAME = document.getElementById('name').value;
    // document.getElementById('result-name').innerHTML = 'Имя: ' + NAME;
    // const EMAIL = document.getElementById('email').value;
    // document.getElementById('result-email').innerHTML = 'Почта: ' + EMAIL;

    const SUBJECT = document.getElementById('subject').value;
    if (SUBJECT == ""){
        document.getElementById('result-object').innerHTML = 'Без темы';
    } else {
        document.getElementById('result-object').innerHTML = 'Тема: ' + SUBJECT;
    }
    const DESCRIBE = document.getElementById('describe').value;
    if (DESCRIBE ==  ""){
        document.getElementById('result-describe').innerHTML = 'Без описания';
    } else {
        document.getElementById('result-describe').innerHTML = 'Описание: ' + DESCRIBE;
    }
   
    document.getElementById('massage-block').classList.remove('massage-block-hidden');
}); 


CLOSE_BUTTON.addEventListener('click', () => {
    document.getElementById('massage-block').classList.add('massage-block-hidden');
    document.getElementById('form').reset();
});

// Header
let menu = document.getElementById('menu');

menu.addEventListener('click', (event) => {
    menu.querySelectorAll('li > a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

// Slider. Активация экранов телефонов
let displayBlockVertical = document.querySelector('.vertical');
let displayNoneVertical = document.querySelector('.phone_vertical_hidden');

displayBlockVertical.onclick = function() {
    if (displayNoneVertical.style.display == 'none'){ 
        displayNoneVertical.style.display = 'block';
        displayBlockVertical.style.display = 'none';
    } else { 
        displayNoneVertical.style.display = 'block';
        displayBlockVertical.style.display = 'none';
    }
}

displayNoneVertical.onclick = function() {
    if (displayBlockVertical.style.display == 'none'){ 
        displayBlockVertical.style.display = 'block';
        displayNoneVertical.style.display = 'none';
    } else {
        displayBlockVertical.style.display = 'block';
        displayNoneVertical.style.display = 'none';
    }
}

let displayBlockHorizontal = document.querySelector('.horizontal');
let displayNoneHorizontal = document.querySelector('.phone_horizontal_hidden');

displayBlockHorizontal.onclick = function() {
    if (displayNoneHorizontal.style.display == 'none'){ 
        displayNoneHorizontal.style.display = 'block';
        displayBlockHorizontal.style.display = 'none';
    } else {
        displayNoneHorizontal.style.display = 'block';
        displayBlockHorizontal.style.display = 'none';
    }
}

displayNoneHorizontal.onclick = function() {
    if (displayBlockHorizontal.style.display == 'none'){ 
        displayBlockHorizontal.style.display = 'block';
        displayNoneHorizontal.style.display = 'none';
    } else {
        displayBlockHorizontal.style.display = 'block';
        displayNoneHorizontal.style.display = 'none';
    }
}

// Portfolio. Взаимодействие с картинками
let border = document.querySelector('.portfolio_img');

border.addEventListener('click', (event) => {
    border.querySelectorAll('.portfolio_img>img').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

// Portfolio. Переключение табов
const FILTERS = document.querySelector('.tag')
const WORK_EXAMPLES = document.querySelector('.portfolio_img')

FILTERS.addEventListener('click', (event) =>{
    FILTERS.querySelectorAll('span').forEach(el => el.classList.remove('active_tag'));
    if (event.target.textContent === "All"){
        WORK_EXAMPLES.innerHTML = 
            `
            <img src="assets/img/Img1.png" alt="img">
            <img src="assets/img/Img2.png" alt="img">
            <img src="assets/img/Img3.png" alt="img">
            <img src="assets/img/Img4.png" alt="img">
            <img src="assets/img/Img5.png" alt="img">
            <img src="assets/img/Img6.png" alt="img">
            <img src="assets/img/Img7.png" alt="img">
            <img src="assets/img/Img8.png" alt="img">
            <img src="assets/img/Img9.png" alt="img">
            <img src="assets/img/Img10.png" alt="img">
            <img src="assets/img/Img11.png" alt="img">
            <img src="assets/img/Img12.png" alt="img">
            `
    } else if (event.target.textContent === "Web Design"){
        WORK_EXAMPLES.innerHTML = 
            `
            <img src="assets/img/Img2.png" alt="img">
            <img src="assets/img/Img1.png" alt="img">
            <img src="assets/img/Img4.png" alt="img">
            <img src="assets/img/Img3.png" alt="img">
            <img src="assets/img/Img6.png" alt="img">
            <img src="assets/img/Img5.png" alt="img">
            <img src="assets/img/Img9.png" alt="img">
            <img src="assets/img/Img12.png" alt="img">
            <img src="assets/img/Img7.png" alt="img">
            <img src="assets/img/Img8.png" alt="img">
            <img src="assets/img/Img10.png" alt="img">
            <img src="assets/img/Img11.png" alt="img">
            `
    } else if (event.target.textContent === "Graphic Design"){
        WORK_EXAMPLES.innerHTML = 
            `
            <img src="assets/img/Img12.png" alt="img">
            <img src="assets/img/Img11.png" alt="img">
            <img src="assets/img/Img10.png" alt="img">
            <img src="assets/img/Img9.png" alt="img">
            <img src="assets/img/Img8.png" alt="img">
            <img src="assets/img/Img7.png" alt="img">
            <img src="assets/img/Img6.png" alt="img">
            <img src="assets/img/Img5.png" alt="img">
            <img src="assets/img/Img4.png" alt="img">
            <img src="assets/img/Img3.png" alt="img">
            <img src="assets/img/Img2.png" alt="img">
            <img src="assets/img/Img1.png" alt="img">
            `
    } else if (event.target.textContent === "Artwork"){
        WORK_EXAMPLES.innerHTML = 
            `
            <img src="assets/img/Img6.png" alt="img">
            <img src="assets/img/Img5.png" alt="img">
            <img src="assets/img/Img4.png" alt="img">
            <img src="assets/img/Img3.png" alt="img">
            <img src="assets/img/Img2.png" alt="img">
            <img src="assets/img/Img1.png" alt="img">
            <img src="assets/img/Img12.png" alt="img">
            <img src="assets/img/Img11.png" alt="img">
            <img src="assets/img/Img10.png" alt="img">
            <img src="assets/img/Img9.png" alt="img">
            <img src="assets/img/Img8.png" alt="img">
            <img src="assets/img/Img7.png" alt="img">
            `
    } 

    event.target.classList.add('active_tag');
});

const mainSlider = document.querySelector('.slider');
const leftNav = document.querySelector('.left');
const righttNav = document.querySelector('.right');
const sliderImg = document.querySelector('.sloder-img')

leftNav.onclick = function() {
    
}