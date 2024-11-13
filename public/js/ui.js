const middleBoardClubesInputText = document.getElementById("middleBoardClubes-1.0.1")
const middleBoardClubesSendButton = document.getElementById("middleBoardClubes-1.0.2")


middleBoardClubesInputText.addEventListener("keydown", event => {
    if (event.key === "#") {
        event.preventDefault();
    }
})

middleBoardClubesInputText.addEventListener("input", () => {
    if (middleBoardClubesInputText.value === "") {
        middleBoardClubesSendButton.style.filter = "grayscale(60%)";
        middleBoardClubesSendButton.style.cursor = "default";
    } else {
        middleBoardClubesSendButton.style.filter = "grayscale(0%)";
        middleBoardClubesSendButton.style.cursor = "default";
    }
})

middleBoardClubesSendButton.addEventListener("mouseenter", () => {
    if (middleBoardClubesInputText.value != "") {
        middleBoardClubesSendButton.style.filter = "grayscale(20%)";
        middleBoardClubesSendButton.style.cursor = "pointer";
    } else {
        middleBoardClubesSendButton.style.filter = "grayscale(60%)";
        middleBoardClubesSendButton.style.cursor = "default";
    }
})

middleBoardClubesSendButton.addEventListener("mouseleave", ()  => {
    if (middleBoardClubesInputText.value === "") {
        middleBoardClubesSendButton.style.filter = "grayscale(60%)";
        middleBoardClubesSendButton.style.cursor = "default";
    } else {
        middleBoardClubesSendButton.style.filter = "grayscale(0%)";
        middleBoardClubesSendButton.style.cursor = "default";
    }
})