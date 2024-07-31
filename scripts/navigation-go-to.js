var currentRoute = 'home'
var freezedHomePage = document.querySelector('.freezed')
var scrollableContent = document.querySelector('.scrollable')


function goToProjects() {
    removeForm();
    removeSubProjectsScreens()
    swapFreezeWithScrollable();
    document.querySelector('.content-div-projects').scrollIntoView({
        behavior: isHomeCurrentRoute() ? 'auto' : 'smooth',
        block: 'start',
        inline: 'nearest'

    })
    currentRoute = 'projects';
    closeMobileNavigation()
}

function goToHome() {
    removeForm();
    swapScrollableWithFreeze()
    removeSubProjectsScreens()
    freezedHomePage.classList.add('a-section');
    freezedHomePage.classList.remove('display-none');
    scrollableContent.classList.add('display-none');
    currentRoute = 'home'
    window.scrollTo({
        top: 0,
        left: 0,
    });
}

function goToAbout() {
    removeForm();
    swapFreezeWithScrollable();
    removeSubProjectsScreens();
    document.querySelector('.trademark').scrollIntoView({
        behavior: isHomeCurrentRoute() ? 'auto' : 'smooth',
        block: 'start',
        inline: 'nearest'

    });
    currentRoute = 'about'
    closeMobileNavigation()
}

function goToOfferings() {
    removeForm();
    swapFreezeWithScrollable();
    removeSubProjectsScreens();
    document.querySelector('.content-div-offerings').scrollIntoView({
        behavior: isHomeCurrentRoute() ? 'auto' : 'smooth',
        block: 'start',
        inline: 'nearest'
    })
    currentRoute = 'offerings'
    closeMobileNavigation()
}

function goToContact() {
    removeForm();
    swapFreezeWithScrollable();
    removeSubProjectsScreens();
    document.querySelector('.contact-div').scrollIntoView({
        behavior: isHomeCurrentRoute() ? 'auto' : 'smooth',
        block: 'start',
        inline: 'nearest'
    })
    currentRoute = 'contact'
    closeMobileNavigation()
}

function goToInitialSketches() {
    document.querySelector('.initial-sketches').classList.remove('display-none')
    scrollableContent.classList.add('display-none');
}

function goToInteriorProjects() {
    document.querySelector('.interior-projects').classList.remove('display-none')
    scrollableContent.classList.add('display-none');
}

function goToHousing() {
    document.querySelector('.housing').classList.remove('display-none')
    scrollableContent.classList.add('display-none');
}

function goToText() {
    document.querySelector('.digital-sketches-details').classList.remove('display-none')
    scrollableContent.classList.add('display-none');
}

function goToContactForm() {
    document.querySelector('.backdrop').classList.remove('display-none')
}

function removeForm() {
    document.querySelector('.form-container').addEventListener('click', function (event) {
        event.stopPropagation();
    });
    document.querySelector('.backdrop').classList.add('display-none')
}

function removeSubProjectsScreens() {
    document.querySelector('.initial-sketches').classList.add('display-none')
    document.querySelector('.housing').classList.add('display-none')
    document.querySelector('.interior-projects').classList.add('display-none')
    document.querySelector('.digital-sketches-details').classList.add('display-none')

}

//This function removes Home and makes Scrollable content visible
function swapFreezeWithScrollable() {
    freezedHomePage.classList.remove('a-section');
    freezedHomePage.classList.add('display-none');
    scrollableContent.classList.remove('display-none');

}
//This function removes Scrollable content and makes Home visible
function swapScrollableWithFreeze() {
    freezedHomePage.classList.add('a-section');
    freezedHomePage.classList.remove('display-none');
    scrollableContent.classList.add('display-none');

}

function isHomeCurrentRoute() {
    return currentRoute == 'home';
}

function openMobileNavigation() {
    document.querySelector('.backdrop-navigation').classList.remove('display-none')
}

function closeMobileNavigation() {
    document.querySelector('.backdrop-navigation').classList.add('display-none')
}


