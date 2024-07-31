function changeColorOnHover(name) {
    var nav = document.getElementsByClassName("list")
    Array.from(nav).forEach(it => {
        if (name != it.innerHTML) {
            it.style.color = "transparent";
        } else {
            it.style.color = "#4f4b42";
        }
    });
}

function resetToDefault() {
    var nav = document.getElementsByClassName("list")
    Array.from(nav).forEach(it => {
        it.style.color = "#4f4b42";

    });
}
