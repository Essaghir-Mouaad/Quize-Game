// This function sidi achraf will udate the porgress

function updateProgress(gameId, current, total) {
    const progressElement = document.getElementById(`${gameId}-progress`);
    const scoreElement = document.getElementById(`${gameId}-score`);
    const progress = (current / total) * 100;
    progressElement.style.width = `${progress}%`;
    progressElement.setAttribute("aria-valuenow", current);
    scoreElement.textContent = `${current}/${total}`;
}


updateProgress('game2', 100, 500)