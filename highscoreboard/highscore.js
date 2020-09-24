/**
 **************************************************************************************************
let result = {userName: user, score: timeScore}

let highscore = []

highscore.push(result)

highscore.sort(function (a, b) {
return (a.timeScore - b.timeScore)
})

let hsTable = document.getElementById('highscores')

window.localStorage.setItem('highscore', JSON.stringify(highscore))

let retrievedScores = JSON.parse(window.localStorage.getItem('highscore'))


for (let i = 0; i < 5; i++) {
    hsTable.innerHTML += '<tr><td>' + retrievedScores[i].userName + '</td><td>' + retrievedScores[i].score + '</td></tr>'
  }
 

****************************************************************************************************

const result = {userName: user, score: timeScore}

const savedScores = localStorage.getItem('highscore') || '[]' // get the score, or the initial value if empty

const highscores = [...JSON.parse(savedScores), result] // add the result
  .sort((a, b) => b.score- a.score) // sort descending
  .slice(0, 5) // take highest 5

localStorage.setItem('highscore', JSON.stringify(highscores)) // store the scores
*/