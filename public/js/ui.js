const mainClubesInputText = document.getElementById("mainClubes-1.0.1")
const mainClubesSendButton = document.getElementById("mainClubes-1.0.2")


mainClubesInputText.addEventListener("keydown", event => {
    if (event.key === "#") {
        event.preventDefault()
    }
})

mainClubesInputText.addEventListener("input", () => {
    if (mainClubesInputText.value === "") {
        mainClubesSendButton.style.filter = "grayscale(60%)"
        mainClubesSendButton.style.cursor = "default"
    } else {
        mainClubesSendButton.style.filter = "grayscale(0%)"
        mainClubesSendButton.style.cursor = "default"
    }
})

mainClubesSendButton.addEventListener("mouseenter", () => {
    if (mainClubesInputText.value != "") {
        mainClubesSendButton.style.filter = "grayscale(20%)"
        mainClubesSendButton.style.cursor = "pointer"
    } else {
        mainClubesSendButton.style.filter = "grayscale(60%)"
        mainClubesSendButton.style.cursor = "default"
    }
})

mainClubesSendButton.addEventListener("mouseleave", ()  => {
    if (mainClubesInputText.value === "") {
        mainClubesSendButton.style.filter = "grayscale(60%)"
        mainClubesSendButton.style.cursor = "default"
    } else {
        mainClubesSendButton.style.filter = "grayscale(0%)"
        mainClubesSendButton.style.cursor = "default"
    }
})