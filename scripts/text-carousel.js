var placeHolder = document.querySelector('.text-placeholder')
var imagePlaceholder = document.querySelector('.digital-sketches-carousel-details-img');
var index = 0;
var textBook = [
    {
        src: 'offeringsDigital-sketches.jpg',
        text: 'as we know, all ideas must start from scratch, therefore we like to  start with handmade sketches and migrate them to digital ones. as we noticed through communication with clients  that most  important thing is to  decide in which way together we want to go.'
    },
    {
        src: 'offeringsProjects.jpg',
        text: 'making projects can be based upon level of required details. depending on level detail  atelierKARLA will make :1. Conceptual, primary, and implementation project in architecture2. Preliminary, main, and execution project in architecture 3. Schematic, design development, and construction documents in architecture'
    },
    {
        src: 'offeringsConsulting.jpg',
        text: 'through consulting phase we get to know which parts of projects require which amount of time and  investments. consulting phase is  usually  done before project start and it is extremly important to set  goals for future development.'
    },



]
function goToTextRegardingPhoto(imgSrc) {
    var lastIndex = imgSrc.lastIndexOf('/');
    console.log(lastIndex);
    var imageName = imgSrc.substring(lastIndex + 1);
    switch (imageName) {
        case 'offeringsDigital-sketches.jpg':
            placeHolder.innerText = textBook[0].text;
            imagePlaceholder.src = "./images/" + textBook[0].src
            break;
        case 'offeringsProjects.jpg':
            placeHolder.innerText = textBook[1].text;
            imagePlaceholder.src = "./images/" + textBook[1].src
            break;
        case 'offeringsConsulting.jpg':
            placeHolder.innerText = textBook[2].text;
            imagePlaceholder.src = "./images/" + textBook[2].src
            break;
        default:
            placeHolder.innerText = textBook[0].text;
            imagePlaceholder.src = "./images/" + textBook[0].src
    }
}

function moveTextCarouselLeft() {
    index--
    if (index == -1) {
        index = textBook.length - 1;
    }
    placeHolder.innerText = textBook[index].text
    imagePlaceholder.src = "./images/" + textBook[index].src
}

function moveTextCarouselRight() {
    index++
    if (index == textBook.length) {
        index = 0;
    }
    placeHolder.innerText = textBook[index].text
    imagePlaceholder.src = "./images/" + textBook[index].src
}


