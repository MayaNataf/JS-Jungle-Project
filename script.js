const animals = {
    tiger: {
        sound: "sounds/Tiger.mp3",
        key: "t"
    },

    monkey: {
        sound: "sounds/monkey.mp3",
        key: "m"
    },

    lion: {
        sound: "sounds/lion.mp3",
        key: "l"
    },

    frog: {
        sound: "sounds/frog.mp3",
        key: "f"
    },

    elephant: {
        sound: "sounds/Elephant.mp3",
        key: "e"
    },

    duck: {
        sound: "sounds/duck.mp3",
        key: "d"
    },

    dog: {
        sound: "sounds/dog.mp3",
        key: "g"
    }
};

const animalCards = document.querySelectorAll(".animal-card");
const backgroundMusic = document.getElementById("backgroundMusic");
const musicBtn = document.getElementById("musicBtn");

let musicPlaying = true;

/* Start background music when page loads */
window.addEventListener("load", () => {
    backgroundMusic.volume = 0.3;
    backgroundMusic.play();
});

/* Play animal sound */
function playAnimalSound(animalName) {

    const sound = new Audio(animals[animalName].sound);

    sound.play();

    const card = document.querySelector(
        `[data-animal="${animalName}"]`
    );

    card.classList.add("active");

    setTimeout(() => {
        card.classList.remove("active");
    }, 400);
}

/* Mouse click */
animalCards.forEach(card => {

    card.addEventListener("click", () => {

        const animalName = card.dataset.animal;

        playAnimalSound(animalName);
    });
});

/* Keyboard click */
document.addEventListener("keydown", event => {

    const key = event.key.toLowerCase();

    for (let animal in animals) {

        if (animals[animal].key === key) {

            playAnimalSound(animal);

            break;
        }
    }
});

/* Music button */
musicBtn.addEventListener("click", () => {

    if (musicPlaying) {

        backgroundMusic.pause();

        musicBtn.textContent = "Play Background Music";

        musicPlaying = false;

    } else {

        backgroundMusic.play();

        musicBtn.textContent = "Stop Background Music";

        musicPlaying = true;
    }
});

/*
NEW JAVASCRIPT FEATURE

setTimeout()

setTimeout allows us to execute code after a delay.

In this project, when the user clicks an animal,
the animal card gets highlighted.

After 400 milliseconds, setTimeout removes the
highlight automatically.
*/