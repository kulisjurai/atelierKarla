var mainSketchesCarousel = ['offeringsDigital-sketches.jpg', 'offeringsProjects.jpg', 'offeringsConsulting.jpg']
var index = 0;
var centralImageMain = document.querySelector('.carlousel-img');


function moveCarouselLeft() {
    index--
    if (index == -1) {
        index = mainSketchesCarousel.length - 1;
    }
    centralImageMain.src = './images/' + mainSketchesCarousel[index]
}

function moveCarouselRight() {
    index++
    if (index == mainSketchesCarousel.length) {
        index = 0;
    }
    centralImageMain.src = './images/' + mainSketchesCarousel[index]
}







