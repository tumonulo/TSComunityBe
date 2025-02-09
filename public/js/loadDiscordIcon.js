const output = document.getElementById('mainInicio-1')

window.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('/discord/icon')
        const data = await response.json()
        const icon = data.icon
    
        output.src = icon
    } catch (error) {
        console.error('An error occur by loading the Discord icon')
    }
})