
let lastmodify = document.lastModified;
let ModifiedElement = document.getElementById("last-modified");
if (ModifiedElement) {
    ModifiedElement.textContent = `Last Modification: ${lastmodify}`;
}


function calculateWindChill(temp, windSpeed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(2);
}

document.addEventListener('DOMContentLoaded', () => {
    const temperature = 10; // Example static value in °C
    const windSpeed = 5; // Example static value in km/h
    const windChillElement = document.getElementById('wind-chill');

    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${windChill}°C`;
    } else {
        windChillElement.textContent = 'N/A';
    }
});
