const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const gifElement = document.getElementById("togepi-gif");
const buttonContainer = document.querySelector(".btn-container");

// GIFs and messages
const gifs = [
    "assets/images/togepi-happy.gif",
    "assets/images/togepi-sad-1.gif",
    "assets/images/togepi-sad-2.gif",
    "assets/images/togepi-crying.gif"
];

const messages = [
    "Are you sure??",
    "Noooo mimi",
    "mimi pleaseeee",
    "NOOOOO PLSSS!"
];

// Control variables
let clickCount = 0;
const maxClicks = gifs.length;

// Initial scales
let noScale = 1;
let yesScale = 1;
const scaleStep = 0.15;

noButton.addEventListener("click", () => {
    if (clickCount < maxClicks) {
        // Change GIF and NO message
        gifElement.src = gifs[clickCount];
        noButton.textContent = messages[clickCount];

        // Smooth scaling (both shrink/grow proportionally)
        noScale = Math.max(0.4, noScale - scaleStep);
        yesScale = yesScale + scaleStep;

        noButton.style.transform = `scale(${noScale})`;
        yesButton.style.transform = `scale(${yesScale})`;

        clickCount++;
    } else {
        // After NO attempts finish: proportional final YES
        noButton.style.display = "none"; // hide NO

        yesButton.style.transform = "none"; // reset scale
        yesButton.style.fontSize = "2.5rem"; // proportional bigger text
        yesButton.style.padding = "20px 40px"; // proportional padding
        yesButton.style.minWidth = "auto"; // fit text
        yesButton.style.width = "auto";
        yesButton.style.height = "auto";

        buttonContainer.style.justifyContent = "center"; // center horizontally
    }
});
