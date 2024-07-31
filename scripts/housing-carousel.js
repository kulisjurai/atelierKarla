var albumHousing = ['vienna.jpg', 'vk2house.jpg', 'vkhouse.jpg']
var index = 0;
var centralImageHousing = document.querySelector('.housing-carousel-img');


function moveHousingCarouselLeft() {
    index--
    if (index == -1) {
        index = albumHousing.length - 1;
    }
    centralImageHousing.src = './images/' + albumHousing[index]
}

function moveHousingCarouselRight() {
    index++
    if (index == albumHousing.length) {
        index = 0;
    }
    centralImageHousing.src = './images/' + albumHousing[index]
}


