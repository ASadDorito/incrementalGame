var gameData = {
    plus2: 0,
    plus2PerClick: 1
}

function plus2() {
    gameData.plus2 += gameData.plus2PerClick
    document.getElementById("plus2s").innerHTML = gameData.plus2 + "+2s"
}