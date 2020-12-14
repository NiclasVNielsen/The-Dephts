const gallery = document.querySelectorAll('.gallery-items');

function switchImage (chosen) {
    let collapse = 0;
    if(chosen.classList[1] == 'chosen-gallery-item'){
        collapse = 1;
    }

    gallery.forEach(element => {
        element.classList.remove('chosen-gallery-item');
    });

    if(collapse == 0){
        chosen.classList.add('chosen-gallery-item');
    }
}

gallery.forEach(element => {
    element.addEventListener('click', function () {
        switchImage(element);
    })
});