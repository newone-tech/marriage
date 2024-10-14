/* ======================================
   1. COUNTDOWN Funktion
   ====================================== */

// Countdown-Funktion
function startCountdown() {
    // Ziel-Datum festlegen (11. Januar 2025)
    const targetDate = new Date("January 11, 2025 00:00:00").getTime();

    // Funktion, die jede Sekunde den Countdown aktualisiert
    const countdownInterval = setInterval(function() {
        // Aktuelles Datum und Uhrzeit
        const now = new Date().getTime();
        
        // Berechnung der verbleibenden Zeit bis zum Ziel-Datum
        const timeRemaining = targetDate - now;

        // Berechnung der Zeitkomponenten: Tage, Stunden, Minuten, Sekunden
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Countdown in die HTML-Elemente einfügen
        document.querySelector(".element_dountdown_days").innerText = days;
        document.querySelector(".element_dountdown_hours").innerText = hours;
        document.querySelector(".element_dountdown_minutes").innerText = minutes;
        document.querySelector(".element_dountdown_seconds").innerText = seconds;

        // Wenn der Countdown abgelaufen ist
        if (timeRemaining < 0) {
            clearInterval(countdownInterval);
            document.querySelector(".count_down_app").innerHTML = "<span>¡El día ha llegado!</span>";
        }
    }, 1000);
}

// Countdown beim Laden der Seite starten
document.addEventListener("DOMContentLoaded", startCountdown);

/* ======================================
   2. FOTOGRAM Bilder
   ====================================== */

let currentIndex = 0;

function render(){
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";
    for (let i = 0; i < myImgs.length; i++) {
        contentRef.innerHTML += returnImages(i);
    }

    document.getElementById('overlay').addEventListener('click', function(event){
        if (event.target === this){
            closeDialog();
        }
    });
}

function returnImages(i){
    return `
        <div onclick="openDialog(${i})">
            <img src="${myImgs[i]}" class="main_solo_img" alt="Bild ${i + 1}"></img>
        </div>
    `;
}

function openDialog(i){
    currentIndex = i;
    updateDialog();
    document.getElementById('overlay').style.display = 'flex';
}

function updateDialog(){
    let imageSrc = `${myImgs[currentIndex]}`;
    document.getElementById('dialogImg').src = imageSrc;
    document.getElementById('dialogImageName').textContent = imageSrc;
    document.getElementById('imageIndex').textContent = `${currentIndex + 1} / ${myImgs.length}`;
}

function nextImage(){
    currentIndex = (currentIndex + 1) % myImgs.length;
    document.getElementById('dialogImg').src = myImgs[currentIndex];
    updateDialog();
}

function prevImage(){
    currentIndex = (currentIndex - 1 + myImgs.length) % myImgs.length;
    document.getElementById('dialogImg').src = myImgs[currentIndex];
    updateDialog();
}

function closeDialog(){
    document.getElementById('overlay').style.display = 'none';
}

// Keydown Listener damit mit Pfeilen aus Tastatur sliden lässt
document.addEventListener('keydown', function(event) {
    // Überprüfen, ob das Overlay sichtbar ist
    const overlay = document.getElementById('overlay');
    if (overlay.style.display === 'flex') {
        if (event.key === 'ArrowRight') { // Rechte Pfeiltaste
            nextImage();
        } else if (event.key === 'ArrowLeft') { // Linke Pfeiltaste
            prevImage();
        } else if (event.key === 'Escape') { // Escape-Taste zum Schließen
            closeDialog();
        }
    }
});


