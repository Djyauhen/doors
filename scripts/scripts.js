// Анимация для плюсиков на картинке Двери
const doorAdvantages = document.getElementsByClassName("door-advantage");
for (let item of doorAdvantages) {
    item.onclick = () => {
        actionClass(item);
    }
}

function actionClass(item) {
    item.children.item(1).classList.add('door-action');
    item.addEventListener("animationend", AnimationHandler, false);

    function AnimationHandler() {
        item.children.item(1).classList.remove('door-action');
    }
}

// Анимация для всплытия заголовков

function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('element-show');
        }
    });
}

let options = {threshold: [0.5]};
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.title-animation');
for (let elm of elements) {
    observer.observe(elm);
}

//Слайдер и его автозапуск при достижении элемента

const swiper = new Swiper('.photos', {
    // Optional parameters
    direction: 'horizontal',
    slidesPerView: 1,
    loop: true,
    autoplay: {delay: 5000},

    // If we need pagination
    pagination: {
        el: '.photos-pagination',
    },
});
let swiperObserver = new IntersectionObserver(onEntrySwiper, options);

function onEntrySwiper(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            swiper.autoplay.start();
        } else {
            swiper.autoplay.stop();
        }
    });
}

let swiperContainer = document.querySelectorAll('.photos');

for (let elm of swiperContainer) {
    swiperObserver.observe(elm);
}

//Переключаем стоимость дверей

let doors = [
    {
        name: 'LORUA DEAM',
        credit: {
            sixMounts: '100 руб',
            twelveMounts: '50 руб'
        }
    },
    {
        name: 'SIDNEY LOFT',
        credit: {
            sixMounts: '117 руб',
            twelveMounts: '59 руб'
        }
    },
    {
        name: 'SEVER GREY',
        credit: {
            sixMounts: '75 руб',
            twelveMounts: '38 руб'
        }
    },
    {
        name: 'WAVE EDGE',
        credit: {
            sixMounts: '134 руб',
            twelveMounts: '67 руб'
        }
    },
    {
        name: 'METAL GRAY',
        credit: {
            sixMounts: '200 руб',
            twelveMounts: '100 руб'
        }
    },
    {
        name: 'HOME STYLE',
        credit: {
            sixMounts: '125 руб',
            twelveMounts: '63 руб'
        }
    },
    {
        name: 'MOON',
        credit: {
            sixMounts: '141 руб',
            twelveMounts: '71 руб'
        }
    },
    {
        name: 'ANTARCTICA',
        credit: {
            sixMounts: '158 руб',
            twelveMounts: '80 руб'
        }
    }
]

let creditsButtons = document.querySelectorAll('.credit-button');
creditsButtons.forEach(creditButton => {
    creditButton.onchange = () => {
        let creditButtonLabel = creditButton.previousElementSibling; // Получаем label для select
        let doorElementName = creditButton.parentElement.parentElement.getElementsByClassName('door-name')[0].getAttribute('data-name'); //Получаем имя двери
        let door = doors.find(door => door.name.toUpperCase() === doorElementName.toUpperCase()); // Ищем дверь в массиве

        if (creditButton.value === '6') {
            creditButtonLabel.innerText = door.credit.sixMounts; //Подставляем значение для 6 месяцев
        }
        if (creditButton.value === '12') {
            creditButtonLabel.innerText = door.credit.twelveMounts; //Подставляем значение для 12 месяцев
        }
    }
})

//Слайдер дверей и его автозапуск при достижении элемента

const doorSwiper = new Swiper('.doors-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    breakpoints: {
        // when window width is >= 320px
        340: {
            slidesPerView: 1,
            navigation: false
        },
        1170: {
            slidesPerView: 2,
            spaceBetween: 10,
            navigation: {
                nextEl: '.arrow-next',
                prevEl: '.arrow-prev',
            },
        }
    }
});

//Кнопки Telegram и Viber

let telegramButton = document.getElementById('telegram-button');
let telegramInput = document.getElementById('telegram-input');

let viberButton = document.getElementById('viber-button');
let viberInput = document.getElementById('viber-input');

let telegramButtonDialog = document.getElementById('telegram-button-dialog');
let telegramInputDialog = document.getElementById('telegram-input-dialog');

let viberButtonDialog = document.getElementById('viber-button-dialog');
let viberInputDialog = document.getElementById('viber-input-dialog');

let telegram = {
    button: telegramButton,
    input: telegramInput
}
let viber = {
    button: viberButton,
    input: viberInput
}

let telegramDialog = {
    button: telegramButtonDialog,
    input: telegramInputDialog
}
let viberDialog = {
    button: viberButtonDialog,
    input: viberInputDialog
}

telegramButton.onclick = () => clickMessageButton(telegram, viber);
viberButton.onclick = () => clickMessageButton(viber, telegram);

telegramButtonDialog.onclick = () => clickMessageButton(telegramDialog, viberDialog);
viberButtonDialog.onclick = () => clickMessageButton(viberDialog, telegramDialog);

function clickMessageButton(first, second) {
    first.button.classList.add('active');
    first.input.classList.add('active');

    second.button.classList.remove('active');
    second.input.classList.remove('active');
    second.input.classList.remove('error');
    second.input.nextElementSibling.classList.remove('visible');
}

// Анимация отзыва

const reviews = document.getElementsByClassName("door-review-button");
for (let review of reviews) {
    review.onclick = () => {
        actionClassReview(review.parentElement.parentElement.childNodes.item(5));
    }
}

function actionClassReview(reviewItem) {
    reviewItem.style.opacity = 1;
    reviewItem.classList.add('review-action');
    reviewItem.addEventListener("animationend", AnimationHandler, false);

    function AnimationHandler() {
        reviewItem.style.opacity = 0;
        reviewItem.classList.remove('review-action');
    }
}

//Открываем и закрываем POPUP
function openDialogs() {
    let openDialogs = document.querySelectorAll('dialog');
    openDialogs.forEach(openDialogItem => {
        let atr = openDialogItem.getAttribute('open');
        if (atr !== null) {
            openDialogItem.close();
        }
    })
}

function playWithDialog(open, close, dialog) {
    open.addEventListener('click', () => {
        openDialogs();
        dialog.showModal()
    });
    close.addEventListener('click', () => dialog.close());
}


//"Перезвоним" popup

const dialogCallBack = document.querySelector('#call-back-dialog');
const openCallBack = document.querySelector('#open-call-back');
const closeCallBack = document.querySelector('#close-call-back');

playWithDialog(openCallBack, closeCallBack, dialogCallBack);


//"Каталог" popup

const dialogCatalog = document.querySelector('#dialog-catalog');
const openCatalog = document.querySelector('#open-catalog');
const closeCatalog = document.querySelector('#close-catalog');

playWithDialog(openCatalog, closeCatalog, dialogCatalog);

//"Консультация" popup


const dialogConsultation = document.querySelector('#dialog-consultation');
const openConsultation = document.querySelector('#open-consultation');
const closeConsultation = document.querySelector('#close-consultation');

playWithDialog(openConsultation, closeConsultation, dialogConsultation);

//"Купить дверь" popup

const dialogOrder = document.querySelector('#dialog-order');
const openButtonsOrder = document.querySelectorAll('.door-actions .button');
const closeOrder = document.querySelector('#close-order');

openButtonsOrder.forEach(openOrder => {
    playWithDialog(openOrder, closeOrder, dialogOrder);
})


//"Замеры" popup

const dialogSizes = document.querySelector('#dialog-sizes');
const openSizes = document.querySelector('#open-sizes');
const closeSizes = document.querySelector('#close-sizes');

playWithDialog(openSizes, closeSizes, dialogSizes);

//"Успех" popup

const dialogCheck = document.querySelector('#dialog-check');
const closeCheck = document.querySelector('#close-check');


//Функция для валидации

function validation(inputItem) {
    if (inputItem && inputItem.value && inputItem.value !== '') {
        if (inputItem.classList.contains('error') &&
            inputItem.nextElementSibling.classList.contains('visible')) {
            inputItem.classList.remove('error');
            inputItem.nextElementSibling.classList.remove('visible');
        }
        return true
    } else {
        inputItem.classList.add('error');
        inputItem.nextElementSibling.classList.add('visible');
        return false;
    }
}

// Получаем связку input для catalog
let catalogButton = document.getElementById('catalog-button');
catalogButton.addEventListener('click', () => {
    let catalogInput = document.querySelector('.four-screen-action-block  .action-block-inputs .tel.active');
    if (validation(catalogInput)) {
        openDialogs();
        dialogCheck.showModal();
        closeCheck.addEventListener('click', () => dialogCheck.close());
    }
});

// Получаем связку input для questions
let questionsButton = document.getElementById('questions-button');
questionsButton.addEventListener('click', () => {
    let questionsNameInput = document.querySelector('.contact-input.name');
    let questionsTelInput = document.querySelector('.contact-input.tel');
    let nameAns = validation(questionsNameInput);
    let telAns = validation(questionsTelInput);
    if (nameAns && telAns) {
        openDialogs();
        dialogCheck.showModal();
        closeCheck.addEventListener('click', () => dialogCheck.close());
    }
});

// Получаем связку input для call-back
let callBackButton = document.getElementById('form-call-back-button');
callBackButton.addEventListener('click', () => {
    let nameInput = document.getElementById('form-input-name');
    let telInput = document.getElementById('form-input-phone');
    let nameAns = validation(nameInput);
    let telAns = validation(telInput);
    if (nameAns && telAns) {
        openDialogs();
        dialogCheck.showModal();
        closeCheck.addEventListener('click', () => dialogCheck.close());
    }
});


// Получаем связку input для catalog-dialog
let catalogDialogButton = document.getElementById('catalog-dialog-button');
catalogDialogButton.addEventListener('click', () => {
    let catalogInput = document.querySelector('.dialog-form .action-block-inputs .tel.active');
    if (validation(catalogInput)) {
        openDialogs();
        dialogCheck.showModal();
        closeCheck.addEventListener('click', () => dialogCheck.close());
    }
});


// Получаем связку input для call-back
let consultationButton = document.getElementById('form-consultation-button');
consultationButton.addEventListener('click', () => {
    let nameInput = document.getElementById('consultation-form-input-name');
    let telInput = document.getElementById('consultation-form-input-phone');
    let nameAns = validation(nameInput);
    let telAns = validation(telInput);
    if (nameAns && telAns) {
        openDialogs();
        dialogCheck.showModal();
        closeCheck.addEventListener('click', () => dialogCheck.close());
    }
});

// Получаем связку input для order
let orderButton = document.getElementById('form-order-button');
orderButton.addEventListener('click', () => {
    let nameInput = document.getElementById('order-form-input-name');
    let telInput = document.getElementById('order-form-input-phone');
    let nameAns = validation(nameInput);
    let telAns = validation(telInput);
    if (nameAns && telAns) {
        openDialogs();
        dialogCheck.showModal();
        closeCheck.addEventListener('click', () => dialogCheck.close());
    }
});

// Получаем связку input для order
let sizesButton = document.getElementById('form-sizes-button');
sizesButton.addEventListener('click', () => {
    let nameInput = document.getElementById('sizes-form-input-name');
    let telInput = document.getElementById('sizes-form-input-phone');
    let nameAns = validation(nameInput);
    let telAns = validation(telInput);
    if (nameAns && telAns) {
        openDialogs();
        dialogCheck.showModal();
        closeCheck.addEventListener('click', () => dialogCheck.close());
    }
});

// Получаем значения checkbox для политики

let agreeButtons = document.querySelectorAll('.agree input[type="checkbox"]')

agreeButtons.forEach(btn => {
    let formBtn = btn.parentElement.parentElement.querySelector('.button.check-popup-open');
    let formBtnSpan = formBtn.querySelector('span.flare');

    btn.onclick = () => {
        if (btn.checked === false) {
            formBtn.disabled = true;
            formBtnSpan.style.display = 'none';
        }
        if (btn.checked === true) {
            formBtn.disabled = false;
            formBtnSpan.style.display = 'block';
        }
    }
})

//Делаем слайдер для блока с достоинствами при разрешении экрана меньше 1170px

let screenWidth = window.innerWidth;

if (screenWidth < 1170) {
    adaptiveScreenWidth();
}
function adaptiveScreenWidth() {
    let slides = document.querySelectorAll('.small-slider-slide');
    slides.forEach(slide => {
        slide.classList.add('swiper-slide');
    })
    let slidesContainer = document.querySelectorAll('.small-slider');
    slidesContainer.forEach(container => {
        container.classList.add('swiper');
    })

    let slidesWrapper = document.querySelectorAll('.small-slider-wrapper');
    slidesWrapper.forEach(wrapper => {
        wrapper.classList.add('swiper-wrapper');
    })


    let mainScreenSlidesContainer = document.querySelector('.main-screen-advantages');
    let feedbackSlidesContainer = document.querySelector('.feedbacks');

    const mainSlider = new Swiper(mainScreenSlidesContainer, {
        slidesPerView: 1,
        loop: true,
        autoplay: {delay: 5000},
        navigation: {
            nextEl: '.main-screen-advantages-right',
            prevEl: '.main-screen-advantages-left',
        }
    });
    const reviewSlider = new Swiper(feedbackSlidesContainer, {
        slidesPerView: 1,
        loop: true,
        autoplay: {delay: 5000},
        navigation: {
            nextEl: '.feedback-right',
            prevEl: '.feedback-left',
        },
        pagination: {
            el: '.feedback-pagination',
        },
    });
}