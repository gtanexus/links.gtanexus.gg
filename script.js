function connectToFiveM() {
    // URL del servidor FiveM al que te quieres conectar
    const serverUrl = 'fivem://connect/cfx.re/join/ogoldv';

    // Intentar abrir el enlace
    window.location.href = serverUrl;

    // Esperar un tiempo determinado y redirigir si no se pudo abrir
    setTimeout(() => {
        window.location.href = 'https://gtanexus.gg/';
    }, 2000);
}

document.oncontextmenu = function(){return false} // Deshabilitar el click derecho


// Función para cambiar el fondo de pantalla

document.addEventListener('DOMContentLoaded', function() {
    const wallpapers = [
        'styles/img/wallpapers/1.jpg',
        'styles/img/wallpapers/2.jpg',
        'styles/img/wallpapers/3.jpg',
        'styles/img/wallpapers/4.png',
        'styles/img/wallpapers/5.jpg',
        'styles/img/wallpapers/6.jpg',
        'styles/img/wallpapers/7.jpg',
        'styles/img/wallpapers/8.jpg',
        'styles/img/wallpapers/9.jpg'
    ];

    // Precargar imágenes
    wallpapers.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    let currentWallpaperIndex = 0;

    function changeBackground() {
        document.body.style.backgroundImage = `url('${wallpapers[currentWallpaperIndex]}')`;
        currentWallpaperIndex = (currentWallpaperIndex + 1) % wallpapers.length; // Avanzar al siguiente wallpaper
    }

    // Cambiar el fondo cada 3 segundos
    setInterval(changeBackground, 6000);
});
