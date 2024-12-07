//MAIN
function headerTsComunityBrawlOnclick() {
    if (!window.location.pathname.endsWith('index.js')) {
        window.location.href = "../html/index.html"
    }
}

function scrollToSection(section) {
    // if (!window.location.pathname.endsWith('index.js')) {
    //     window.location.href = "../html/index.html"
    // }
    const main = document.getElementById(`main${section}`);
    const mainPosition = main.getBoundingClientRect().top;
    const mainPositionToScroll = window.scrollY + mainPosition - 100;
    window.scrollTo({
        top: mainPositionToScroll,
        behavior: 'smooth'
    });
}

// function headerInicioOnclick() {
//     if (!window.location.pathname.endsWith('index.js')) {
//         window.location.href = "../html/index.html"
//     }
//     const mainInicio = document.getElementById('mainInicio');
//     mainInicio.scrollIntoView({ behavior: 'smooth' });
// }
// function headerDiscordOnclick() {
//     if (!window.location.pathname.endsWith('index.js')) {
//         window.location.href = "../html/index.html"
//     }
//     const mainDiscord = document.getElementById('mainDiscord');
//     const mainDiscordPosition = mainDiscord.getBoundingClientRect().top;
//     const mainDiscordPositionToScroll = window.scrollY + mainDiscordPosition - 100;
//     window.scrollTo({
//         top: mainDiscordPositionToScroll,
//         behavior: 'smooth'
//     });
// }
// function headerClubesOnclick() {
//     if (!window.location.pathname.endsWith('index.js')) {
//         window.location.href = "/index.html"
//     }
//     const mainClubes = document.getElementById('mainClubes');
//     const mainClubesPosition = mainClubes.getBoundingClientRect().top;
//     const mainClubesPositionToScroll = window.scrollY + mainClubesPosition - 38;
//     window.scrollTo({
//         top: mainClubesPositionToScroll,
//         behavior: 'smooth'
//     });
// }
// function headerBotShopOnclick() {
//     if (!window.location.pathname.endsWith('index.js')) {
//         window.location.href = "/index.html"
//     }
//     const mainEquipoCompetitivo = document.getElementById('mainEquipoCompetitivo');
//     const mainEquipoCompetitivoPosition = mainEquipoCompetitivo.getBoundingClientRect().top;
//     const mainEquipoCompetitivoPositionToScroll = window.scrollY + mainEquipoCompetitivoPosition - 38;
//     window.scrollTo({
//         top: mainEquipoCompetitivoPositionToScroll,
//         behavior: 'smooth'
//     });
// }
// function headerValoracionesOnclick() {
//     if (!window.location.pathname.endsWith('index.js')) {
//         window.location.href = "/index.html"
//     }
//     const mainValoraciones = document.getElementById('mainValoraciones');
//     const mainValoracionesPosition = mainValoraciones.getBoundingClientRect().top;
//     const mainValoracionesPositionToScroll = window.scrollY + mainValoracionesPosition - 38;
//     window.scrollTo({
//         top: mainValoracionesPositionToScroll,
//         behavior: 'smooth'
//     });
// }
// function headerRedesSocialesOnclick() {
//     if (!window.location.pathname.endsWith('index.js')) {
//         window.location.href = "/index.html"
//     }
//     const mainRedesSociales = document.getElementById('mainRedesSociales');
//     const mainRedesSocialesPosition = mainRedesSociales.getBoundingClientRect().top;
//     const mainRedesSocialesPositionToScroll = window.scrollY + mainRedesSocialesPosition - 38;
//     window.scrollTo({
//         top: mainRedesSocialesPositionToScroll,
//         behavior: 'smooth'
//     });
// }
// function headerSoporteOnclick() {
//     if (!window.location.pathname.endsWith('index.js')) {
//         window.location.href = "/index.html"
//     }
//     const mainSoporte = document.getElementById('mainSoporte');
//     const mainSoportePosition = mainSoporte.getBoundingClientRect().top;
//     const mainSoportePositionToScroll = window.scrollY + mainSoportePosition - 38;
//     window.scrollTo({
//         top: mainSoportePositionToScroll,
//         behavior: 'smooth'
//     });
// }
// function headerSobreNosotrosOnclick() {
//     if (!window.location.pathname.endsWith('index.js')) {
//         window.location.href = "/index.html"
//     }
//     const mainSobreNosotros = document.getElementById('mainSobreNosotros');
//     const mainSobreNosotrosPosition = mainSobreNosotros.getBoundingClientRect().top;
//     const mainSobreNosotrosPositionToScroll = window.scrollY + mainSobreNosotrosPosition - 38;
//     window.scrollTo({
//         top: mainSobreNosotrosPositionToScroll,
//         behavior: 'smooth'
//     });
// }


//MAININICIO
function mainInicioDiscordOnclick() {
    window.open("https://discord.gg/8nu3ZdDkp7", "_blank");
}
function mainInicioClubesOnclick() {

}


//MAINDISCORD
function mainDiscordDiscordOnclick() {
    window.open("https://discord.gg/8nu3ZdDkp7", "_blank");
}
function mainDiscordPostulacionesOnclick() {
    window.location.href = "https://tumonulo.github.io/TSComunityBrawl/Postulaciones"
}


//MAINCLUBES
function mainClubesVerClubesOnclick() {
    window.location.href = "https://tumonulo.github.io/TSComunityBrawl/Clubes";
}