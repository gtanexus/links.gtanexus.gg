function connectToFiveM() {
    // URL del servidor FiveM al que te quieres conectar
    const serverUrl = 'fivem://connect/play.gtanexus.gg';

    // Intentar abrir el enlace
    window.location.href = serverUrl;

    // Esperar un tiempo determinado y redirigir si no se pudo abrir
    setTimeout(() => {
        window.location.href = 'https://gtanexus.gg/';
    }, 2000);
}