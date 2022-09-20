const API_KEY_CAT = '018317f4-74a5-4a08-aa39-ce04f764943a';
const API_KEY_DOG = 'live_29tqgKCvhrWj9DJq54TIUPPkf6xoZ8joE0YE5bzDz0e0UnSPbSTVcnqFET3Ym1wE'
const catCard = document.querySelector('.cat');
const dogCard = document.querySelector('.dog');
const backBtn = document.querySelectorAll('.back-btn');
const nextBtnCat = document.querySelector('.next-img-cat');
const nextBtnDog = document.querySelector('.next-img-dog');

catCard.addEventListener('click', () => {
    function styleChange () {
        document.querySelector('.main-screen').style.display = 'none';
        document.querySelector('.screen-cat').style.display = 'flex';
    }

    setTimeout(styleChange, 550);

    catCard.classList.add('card-mobile');
    function removeHover() {
        catCard.classList.remove('card-mobile');
    }
    setTimeout(removeHover, 500);
    fetchHandlerCat();
});

dogCard.addEventListener('click', () => {
    
    function styleChange () {
        document.querySelector('.main-screen').style.display = 'none';
        document.querySelector('.screen-dog').style.display = 'flex';
    }

    setTimeout(styleChange, 550);

    dogCard.classList.add('card-mobile');
    function removeHover() {
        dogCard.classList.remove('card-mobile');
    }
    setTimeout(removeHover, 500);
    fetchHandlerDog();
});

backBtn.forEach((el) => {
    el.addEventListener('click', () => {
       

        function styleChange () {
            document.querySelector('.main-screen').style.display = 'block';
            document.querySelector('.screen-cat').style.display = 'none';
            document.querySelector('.screen-dog').style.display = 'none';
            const img = document.querySelector('.cat-img');
            const img2 = document.querySelector('.dog-img')
            if(img.src !== '#' || img2.src !== '#') {
                img.src = '#';
                img2.src = '#';
            }
        }
    
        setTimeout(styleChange, 550);

        el.classList.add('back-mobile');
        function removeHover() {
            el.classList.remove('back-mobile');
        }
        setTimeout(removeHover, 400)


    });
})


async function fetchHandlerCat () {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search', {
            headers: {
                'Content-type': 'application/json',
                'X-API-KEY': API_KEY_CAT,
            }    
        })
        const data = await response.json();
        const img = document.querySelector('.cat-img');
        img.src = `${data[0].url}`;
    } catch(error) {
        console.log(error);
    }
};

async function fetchHandlerDog () {
    try {
        const response = await fetch('https://api.thedogapi.com/v1/images/search', {
            method: 'Get',
            headers: {
                'Content-type': 'application/json',
                'X-API-KEY': API_KEY_DOG,
            }    
        })
        const data = await response.json();
        console.log(data);
        const img = document.querySelector('.dog-img');
        img.src = `${data[0].url}`;
    } catch(error) {
        console.log(error);
    }
};

nextBtnCat.addEventListener('click', () => {
    fetchHandlerCat();
    nextBtnCat.classList.add('hover-mobile');
    function removeHover() {
        nextBtnCat.classList.remove('hover-mobile');
    }
    setTimeout(removeHover, 400)
    
});

nextBtnDog.addEventListener('click', () => {
    fetchHandlerDog();
    nextBtnDog.classList.add('hover-mobile');
    function removeHover() {
        nextBtnDog.classList.remove('hover-mobile');
    }
    setTimeout(removeHover, 400)
});







