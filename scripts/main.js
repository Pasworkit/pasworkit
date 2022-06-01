const divCollections = document.querySelectorAll('.our-service-tabs-title');
divCollections.forEach(div => {
    div.addEventListener('click', (e) => {
        document.querySelector('.active')?.classList.remove('active');
        e.target.classList.add('active');
        document.querySelector('.active-item')?.classList.remove('active-item');
        document.querySelectorAll('.hidden-block').forEach(div => {

            if (div.dataset.item === e.target.dataset.item) {
                div.classList.add('active-item');
            }
        })
    })
})


const tabTitleCollections = document.querySelectorAll('.our-work-tabs-title');
const hiddenCollections = document.querySelectorAll('.our-work-contents-hidden');
btnOurWork = document.querySelector('.our-work-btn')

tabTitleCollections.forEach(tab => {
    tab.addEventListener('click', (e) => {
        btnOurWork.hidden = false;
        document.querySelector('.active2')?.classList.remove('active2');
        e.target.classList.add('active2');

        document.querySelectorAll('.active-index').forEach(elm => {
            elm.classList.remove('active-index')
        })
        hiddenCollections.forEach(div => {
            div?.classList.remove('active-index');
            if (div.dataset.index === e.target.dataset.index) {
                for (let i = 0; i <= 12; i++) {
                    if (i <= 12) {
                        btnOurWork.hidden = true;
                    }
                }
                div.classList.add('active-index');
            } else if (e.target.dataset.index === 'all') {
                div.classList.remove('active-index');
                for (let i = 0; i <= hiddenCollections.length; i++) {
                    if (i % 3 === 0) {

                        hiddenCollections[i].classList.add('active-index');
                    }
                }
            }
        })
    })
})


const loaderOur = document.querySelector('.loader');

function settingHidden() {
    loaderOur.classList.add('loader-hidden')
}

let i = 0;
btnOurWork.addEventListener("click", () => {


    loaderOur.classList.remove('loader-hidden')
    setTimeout(settingHidden, 2000);


    setTimeout(uploadPictures, 2000);
    i++;

    if (i > 2) {
        i = 1;
    }
})


function uploadPictures() {
    hiddenCollections.forEach(div => {
        div.classList.remove('active-index');
        if (i === 1) {
            for (let i = 0; i < 24; i++) {
                hiddenCollections[i].classList.add('active-index');
            }
            btnOurWork.hidden = false;
        } else if (i === 2) {
            for (let i = 0; i < 32; i++) {
                hiddenCollections[i].classList.add('active-index');
            }
            btnOurWork.hidden = true;
        }
    })
}


/*----------------------------What People Say About theHam------------------------------*/
const mainCollection = document.querySelectorAll(".about-hidden");
const carouselCollection = document.querySelectorAll(".about-carousel-item-img");
const previousBtn = document.querySelector(".previous-btn");
const nextBtn = document.querySelector(".next-btn");

const removeActiveClassInMainCollection = () => {
    mainCollection.forEach(div => {
        div?.classList.remove('about-active');
    })
}

const removeActiveClassInCarouselCollection = () => {
    carouselCollection.forEach(block => {
        block?.classList.remove('about-carousel-active');
    })
}

carouselCollection.forEach(block => {
    block.addEventListener('click', (event) => {
        removeActiveClassInCarouselCollection();
        block.classList.add('about-carousel-active')
        mainCollection.forEach(div => {
            div?.classList.remove('about-active');
            if (div.dataset.user === event.target.dataset.user) {
                div.classList.add('about-active')
            }
        })
    })
})
let currentImg = 2;

const changeImage = () => {
    removeActiveClassInMainCollection();
    removeActiveClassInCarouselCollection();
    mainCollection[currentImg].classList.add('about-active');
    carouselCollection[currentImg].classList.add('about-carousel-active')
}

previousBtn.addEventListener("click", () => {
    if (currentImg < 1) {
        currentImg = mainCollection.length;
    }
    currentImg--;
    changeImage();
})

nextBtn.addEventListener("click", () => {
    currentImg++;
    if (currentImg === mainCollection.length) {
        currentImg = 0;
    }
    changeImage();
})


