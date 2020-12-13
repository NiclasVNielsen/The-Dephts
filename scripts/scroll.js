let height = document.documentElement.clientHeight;
window.addEventListener('resize', function () {
    height = document.documentElement.clientHeight;
});

const html = document.querySelector('html');
const imagegalleryfade = [document.querySelector('#image-gallery > .fade'), document.querySelector('#info-page-1')];
let boble = document.querySelectorAll('.bobble');

const sections = [
    [document.querySelector('#front-page h1'), document.querySelector('#front-page p')],
    [document.querySelector('#info-page-1 h3'), document.querySelector('#info-page-1 p')],
    [document.querySelector('#image-gallery h4'), document.querySelector('#image-gallery p')],
    [document.querySelector('#info-page-2 h4'), document.querySelector('#info-page-2 p')],
    [document.querySelector('#info-page-3 h4'), document.querySelector('#info-page-3 p'), document.querySelector('#info-page-3 p:last-of-type')],
    [document.querySelector('#info-page-4 h4'), document.querySelector('#info-page-4 p')]
];

function erase(selected) {
    const cssFadeInClasses = ['fadeindelayed', 'fadein'];
    const cssFadeoutClasses = ['fadeoutdelayed', 'fadeout'];
    sections.forEach((section, index) => {
        if(selected != index){
            section.forEach(text => {
                cssFadeInClasses.forEach(cssClass => {
                    text.classList.remove(`${cssClass}`);
                })
                text.classList.add('fadeout');
            });
        } else {
            section.forEach((text, secondIndex) => {
                cssFadeoutClasses.forEach(cssClass => {
                    text.classList.remove(`${cssClass}`);
                })
                if(secondIndex == 0){
                    text.classList.add('fadein');
                }else{
                    text.classList.add('fadeindelayed');
                }
            });
        }
    });
}

let reactivateBlock = 0;

/* Scroll Style Switch --------------------------------------------- */
document.addEventListener('scroll', function () {

    if(html.scrollTop < height){
        if(reactivateBlock != 1){
            reactivateBlock = 1;
            erase(0);
        }
    }else if(html.scrollTop >= height && html.scrollTop < height * 2){
        if(reactivateBlock != 2){
            reactivateBlock = 2;
            erase(1);
        }
    }else if(html.scrollTop >= height * 2 && html.scrollTop < height * 3){
        if(reactivateBlock != 3){
            reactivateBlock = 3;
            erase(2);
        }
    }else if(html.scrollTop >= height * 3 && html.scrollTop < height * 4){
        if(reactivateBlock != 4){
            reactivateBlock = 4;
            erase(3);
        }
    }else if(html.scrollTop >= height * 4 && html.scrollTop < height * 5){
        if(reactivateBlock != 5){
            reactivateBlock = 5;
            erase(4);
        }
    }else if(html.scrollTop >= height * 5 && html.scrollTop < height * 6){
        if(reactivateBlock != 6){
            reactivateBlock = 6;
            erase(5);
        }
    }


    /* Bobler ---------------------------------------------------------- */
    const bobleposition = [0, 160, 230, 345, 465];

    for(let i = 0; i < boble.length; i++){
        boble[i].style.top=`calc(${bobleposition[i] - (html.scrollTop / 2)}px + ${i * (html.scrollTop / 14)}px + 45vh)`;
    }
    
    
    /* Deep Fade Effect ------------------------------------------------ */
    let x = html.scrollTop / height;
    if(x < 1){
        x = 1;
    } else if(x > 1){
        x = x - (x * 2 - 2);
    }

    if(imagegalleryfade){
        if((height * 1.1) < html.scrollTop){
            imagegalleryfade[0].style.opacity=`${x}`;
            imagegalleryfade[1].style.opacity=`${x}`;
        }else{
            imagegalleryfade[0].style.opacity=`${x}`;
            imagegalleryfade[1].style.opacity=`${x}`;
        }
    }
})