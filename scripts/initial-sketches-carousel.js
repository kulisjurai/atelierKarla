var albumInitialSketches = ['chairs.jpg', 'kitchen.jpg', 'urban.jpg']
var index = 0;
var centralImageInitialSketches = document.querySelector('.projects-carousel-img');


function moveProjectsCarouselLeft() {
    index--
    if (index == -1) {
        index = albumInitialSketches.length - 1;
    }
    centralImageInitialSketches.src = './images/' + albumInitialSketches[index]
}

function moveProjectsCarouselRight() {
    index++
    if (index == albumInitialSketches.length) {
        index = 0;
    }
    centralImageInitialSketches.src = './images/' + albumInitialSketches[index]
}


