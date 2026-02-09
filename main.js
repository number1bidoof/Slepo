let playing = false;
let pause = false;
let gaming = true;
let died = false;
let score = 0;
let highestScore = 0;
let movementSpeed = 0.25;
let edgeTime = 0;
let overlay = true;
const MAX_SPAWN_ODDS = 0.5;     // cap total spawn rate
const MAX_TEACHER_CHANCE = 0.65; // cap teacher ratio

const computer = document.getElementById("computer");
const scoreDiv = document.getElementById("score_div");
const edgeDiv = document.getElementById("time_div");

//Overlays
const deathOverlay = document.getElementById("deathOverlay");
const startOverlay = document.getElementById("startOverlay");
const pauseOverlay = document.getElementById("pauseOverlay");

//Overlay Variables
const playAgainButton = document.getElementById("playAgain");
const playButton = document.getElementById("play_div");
let finalScore = document.getElementById("finalScore")
let finalEdge = document.getElementById("finalEdge")

//Audios
const minecraftAudio = new Audio('audio/background.mp3');
const click = new Audio('audio/minecraft_click.mp3');
const gameOverAudio1 = new Audio("audio/gameOver.mp3");
const gameOverAudio2 = new Audio("audio/gameOver2.mp3");

playAgainButton.addEventListener("click", function(event){
    deathOverlay.style = "display: none;";
    click.play();
    window.location.reload();
})

function wait(ms) {
    return new Promise(r => setTimeout(r, ms))
}

const fakeStudents = document.querySelectorAll(".student_fake");
fakeStudents.forEach(student => {
    const randomNumber = Math.floor(Math.random() * 16) + 1;
    student.src = "images/students/student"+randomNumber+".png"
});
const student_player = document.getElementById("student_player");
const randomNumber = Math.floor(Math.random() * 16) + 1;
student_player.src = "images/students/student"+randomNumber+".png"


playButton.addEventListener("click", function(event) {
    playing = true;
    overlay = !overlay;
    click.play();
    minecraftAudio.volume = 0.2;
    minecraftAudio.play();
    startOverlay.style = "display: none;";    
})

document.addEventListener("keypress", function(event) {
    
    const keyName = event.key;
    if (keyName == " ") {
        if (playing) {
            click.play();
            gaming = !gaming;
            computer.src = gaming ? "images/computer_minecraft.png" : "images/computer_school.png";
            if (gaming) {
                minecraftAudio.play();
            } else {
                minecraftAudio.pause();
            }
        }
    }
    if (keyName == "p" || keyName == "P") {
        if (!died && !overlay) {
            click.play();
            pause = !pause;
            if (pause){
                minecraftAudio.pause();
                pauseOverlay.style = "display: flex;";
            } else {
                minecraftAudio.play();
                pauseOverlay.style = "display: none;";
            }
            playing = !playing;
        }
    }
})

async function handleScore() {
    while (true) {
        await wait(1000)
        if (playing) {
            score += gaming ? 1 : -0.5;
            if (gaming) {
                edgeTime += 1;
                edgeDiv.textContent = "Edge: " + edgeTime;
            }
            if (score > highestScore) {highestScore = score};
            scoreDiv.textContent = "Aura: " + score.toFixed(1);
        }
    }
}

const allPeople = []

function summonCharacter(isStudent) {
    const person = document.createElement("img")
    const randomNumber = Math.floor(Math.random() * 16) + 1;
    if (isStudent) {
        person.src = "images/students/student"+randomNumber+".png"
        person.classList.add("student");
    } else {
        person.src = "images/teachers/teacher"+randomNumber+".png"
        person.classList.add("teacher");
    }
    document.body.appendChild(person);
    const startsLeft = Math.random() < 0.5;
    const currentX = startsLeft ? -2.5 : 100;
    person.style.left = `calc(${currentX}% - 20px)`;

    allPeople.push({
        p: person,
        isPositive: startsLeft,  // current direction
        x: currentX,
        isStudent: isStudent,
        pauseTimer: 0,           // how long they've been stopped
        pauseDuration: 0,        // how long to pause
        isPaused: false,          // are they currently paused
        hasPaused: false          // did they pause already
    });
}

function movePeople() {
    const deadPeople = [];

    for (let i = 0; i < allPeople.length; i++) {
        const person = allPeople[i];

        // Mid-screen interactions (Aura / Game Over)
        if (person.x >= 35 && person.x <= 55) {
            if (person.isStudent) {
                if (gaming) {
                    score += 0.025; // Aura still gained even if paused
                    if (score > highestScore) { highestScore = score; }
                    scoreDiv.textContent = "Aura: " + score.toFixed(1);
                }
            } else {
                if (gaming) {
                    died = true;
                    playing = false;
                    minecraftAudio.pause();
                    finalScore.innerHTML = "High Score: " + highestScore.toFixed(1);
                    finalEdge.innerHTML = "Edge Time: " + edgeTime;
                    deathOverlay.style = "display: flex;";
                    gameOverAudio1.play();
                    gameOverAudio2.play();
                }
            }
        }

        // Handle pause
        if (person.isPaused) {
            person.pauseTimer++;
            if (person.pauseTimer >= person.pauseDuration) {
                // Done pausing: pick a random direction
                person.isPositive = Math.random() < 0.5;
                person.isPaused = false;
                person.pauseTimer = 0;
                person.hasPaused = true;
            }
        } else {
            // Random chance to pause only if they haven't paused yet
            if (!person.hasPaused && Math.random() < 0.003) {
                person.isPaused = true;
                person.pauseDuration = Math.floor(Math.random() * 100) + 50;
            }
        }

        // Move normally if not paused
        if (!person.isPaused) {
            const x = person.x + movementSpeed * (person.isPositive ? 1 : -1);
            person.x = x;
            person.p.style.left = `calc(${x}% - 20px)`;
        }

        // Remove off-screen people
        if (person.x <= -10 || person.x >= 100.5) {
            deadPeople.push(i);
        }
    }

    // Cleanup
    for (let i = deadPeople.length - 1; i >= 0; i--) {
        const deadI = deadPeople[i];
        allPeople[deadI].p.remove();
        allPeople.splice(deadI, 1);
    }
}

async function handlePeople() {
    let ticks = 0;
    let spawnOdds = 0.12;        // starting spawn rate
    let teacherChance = 0.05;    // starting teacher rate

    while (true) {
        await wait(25)
        if (playing) {
            ticks++;
            movePeople();

            if (ticks === 40) {
                ticks = 0;

                // Gradual difficulty increase
                spawnOdds = Math.min(spawnOdds + 0.002, MAX_SPAWN_ODDS);
                teacherChance = Math.min(teacherChance + 0.0025, MAX_TEACHER_CHANCE);

                const roll = Math.random();

                if (roll < spawnOdds) {
                    const isStudent = Math.random() > teacherChance;
                    summonCharacter(isStudent);
                }
            }
        }
    }
}

  let bounceTime = 0;

function animateStudent() {
    if (gaming && playing && !pause && !died) {
        bounceTime += 0.15;
        const bounce = Math.sin(bounceTime) * 25; // height of bounce
        student_player.style.transform = `translateY(${bounce}px)`;
    } else {
        // stop moving instantly
        student_player.style.transform = "translateY(0px)";
        bounceTime = 0;
    }
    requestAnimationFrame(animateStudent);
}

animateStudent();

handleScore();
handlePeople();
