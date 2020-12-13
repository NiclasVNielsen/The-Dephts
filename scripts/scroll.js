let height = document.documentElement.clientHeight;
window.addEventListener('resize', function () {
    height = document.documentElement.clientHeight;
});

function fadeChanger (element, option){
    const classes = ['fadeoutdelayed', 'fadeindelayed', 'fadeout', 'fadein'];

    classes.forEach(classe => {
        element.classList.remove(classe);
    });

    if(option == 3){
        element.classList.add('fadeindelayed');
    }else if(option == 2){
        element.classList.add('fadeoutdelayed');
    }else if(option == 1){
        element.classList.add('fadein');
    }else if(option == 0){
        element.classList.add('fadeout');
    }
}

const html = document.querySelector('html');
const imagegalleryfade = [document.querySelector('#image-gallery > .fade'), document.querySelector('#info-page-1')];
let boble = document.querySelectorAll('.bobble');

/* Scroll Style Switch --------------------------------------------- */
document.addEventListener('scroll', function () {
    /* 
        3 fade in delayed
        2 fade out delayed
        1 fade in
        0 fade out    
    */




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