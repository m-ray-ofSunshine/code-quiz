function getHighScores() {
    var highscore = JSON.parse(localStorage.getItem("winner"))
    if (highscore !== null) {
        document.querySelector("leaderboard").textContent = highscore.nameAbrv + ": " + highscore.highScore
    }
}

document.addEventListener("onload", function() {
    var highscore = JSON.parse(localStorage.getItem("winner"));
    console.log(highscore);
    if (highscore !== null) {
        document.querySelector("#leaderboard").textContent = highscore.nameAbrv + ": " + highscore.highScore
    };
});