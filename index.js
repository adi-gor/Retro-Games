const scoreDisplay = document.querySelector('#score');
let score = 0;
let memorygameScore = localStorage.getItem('memorygameScore');
let whacamoleScore = localStorage.getItem('whacamoleScore');
let breakoutScore = localStorage.getItem('breakoutScore');
let spaceinvadersScore = localStorage.getItem('spaceinvadersScore');
let snakeScore = localStorage.getItem('snakeScore');
let pacmanScore = localStorage.getItem('pacmanScore');
if (memorygameScore !== null)
{
    score += parseInt(memorygameScore);
}
if (whacamoleScore !== null)
{
    score += parseInt(whacamoleScore);
}
if (breakoutScore != null)
{
    score += parseInt(breakoutScore);
}
if (spaceinvadersScore != null)
{
    score += parseInt(spaceinvadersScore);
}
if (snakeScore != null)
{
    score += parseInt(snakeScore);
}
if (pacmanScore != null)
{
    score += parseInt(pacmanScore);
}
scoreDisplay.innerHTML = score;
scoreDisplay.addEventListener("change", (_event)  => {
    window.location.reload();
})
function clearScore() {
    localStorage.clear();
    location.reload();
}