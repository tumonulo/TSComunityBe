//MAIN
function headerTsComunityBrawlOnclick() {
    if (window.location.pathname != '/') {
        window.location.href = `${window.location.protocl}//${window.location.hostname}`
    }
}

function scrollToSection(section) {
    if (!window.location.pathname.endsWith('/')) {
        window.location.href = `${window.location.protocl}//${window.location.hostname}`
    }
    const main = document.getElementById(`main${section}`);
    const mainPosition = main.getBoundingClientRect().top;
    const mainPositionToScroll = window.scrollY + mainPosition - 100;
    window.scrollTo({
        top: mainPositionToScroll,
        behavior: 'smooth'
    });
}