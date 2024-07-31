var albumInteriorProjects = ['psych.jpg', 'vkhouseint.jpg', 'khousekitchen.jpg']
var index = 0;
var centralImageInteriorProjects = document.querySelector('.interior-projects-carousel-img');


function moveInteriorProjectsCarouselLeft() {
    index--
    if (index == -1) {
        index = albumInteriorProjects.length - 1;
    }
    centralImageInteriorProjects.src = './images/' + albumInteriorProjects[index]
}

function moveInteriorProjectsCarouselRight() {
    index++
    if (index == albumInteriorProjects.length) {
        index = 0;
    }
    centralImageInteriorProjects.src = './images/' + albumInteriorProjects[index]
}


