export const fillLeaderboard = (pokemonApiRanking) => {
    const leaderboardTable = document.querySelector('#leaderboardResults');
    const modeSelect = document.querySelector('#chooseModeLeaderboard');

    // add who's that pokemon mode leaderboard
    leaderboardTable.innerHTML = 
        `<li class='leaderboardItem whoseThatPokemonLeaderboard leaderFirstPlace'><img src='./static/assets/ui/hall-of-fame/gold.png' /><span class='leaderboardPlayerName'>${pokemonApiRanking.mode1.scores[0] ? pokemonApiRanking.mode1.scores[0].name : "-"}</span><span class='leaderboardPoints'>${pokemonApiRanking.mode1.scores[0] ? pokemonApiRanking.mode1.scores[0].score : "-"}</span></li>
        <li class='leaderboardItem whoseThatPokemonLeaderboard'><img src='./static/assets/ui/hall-of-fame/silver.png' /><span class='leaderboardPlayerName'>${pokemonApiRanking.mode1.scores[1] ? pokemonApiRanking.mode1.scores[1].name : "-"}</span><span class='leaderboardPoints'>${pokemonApiRanking.mode1.scores[1] ? pokemonApiRanking.mode1.scores[1].score : "-"}</span></li>
        <li class='leaderboardItem whoseThatPokemonLeaderboard'><img src='./static/assets/ui/hall-of-fame/bronze.png' /><span class='leaderboardPlayerName'>${pokemonApiRanking.mode1.scores[2] ? pokemonApiRanking.mode1.scores[2].name : "-"}</span><span class='leaderboardPoints'>${pokemonApiRanking.mode1.scores[2] ? pokemonApiRanking.mode1.scores[2].score : "-"}</span></li>`

    // add what it looks like mode leaderboard
    leaderboardTable.innerHTML += 
        `<li class='leaderboardItem whatItLooksLikeLeaderboard leaderFirstPlace'><img src='./static/assets/ui/hall-of-fame/gold.png' /><span class='leaderboardPlayerName'>${pokemonApiRanking.mode2.scores[0] ? pokemonApiRanking.mode2.scores[0].name : "-"}</span><span class='leaderboardPoints'>${pokemonApiRanking.mode2.scores[0] ? pokemonApiRanking.mode2.scores[0].score : "-"}</span></li>
        <li class='leaderboardItem whatItLooksLikeLeaderboard'><img src='./static/assets/ui/hall-of-fame/silver.png' /><span class='leaderboardPlayerName'>${pokemonApiRanking.mode2.scores[1] ? pokemonApiRanking.mode2.scores[1].name : "-"}</span><span class='leaderboardPoints'>${pokemonApiRanking.mode2.scores[1] ? pokemonApiRanking.mode2.scores[1].score : "-"}</span></li>
        <li class='leaderboardItem whatItLooksLikeLeaderboard'><img src='./static/assets/ui/hall-of-fame/bronze.png' /><span class='leaderboardPlayerName'>${pokemonApiRanking.mode2.scores[2] ? pokemonApiRanking.mode2.scores[2].name : "-"}</span><span class='leaderboardPoints'>${pokemonApiRanking.mode2.scores[2] ? pokemonApiRanking.mode2.scores[2].score : "-"}</span></li>`

    // add guess the type mode leaderboard
    leaderboardTable.innerHTML += 
        `<li class='leaderboardItem guessTheTypeLeaderboard leaderFirstPlace'><img src='./static/assets/ui/hall-of-fame/gold.png' /><span class='leaderboardPlayerName'>${pokemonApiRanking.mode3.scores[0] ? pokemonApiRanking.mode2.scores[0].name : "-"}</span><span class='leaderboardPoints'>${pokemonApiRanking.mode3.scores[0] ? pokemonApiRanking.mode2.scores[0].score : "-"}</span></li>
        <li class='leaderboardItem guessTheTypeLeaderboard'><img src='./static/assets/ui/hall-of-fame/silver.png' /><span class='leaderboardPlayerName'>${pokemonApiRanking.mode3.scores[1] ? pokemonApiRanking.mode2.scores[1].name : "-"}</span><span class='leaderboardPoints'>${pokemonApiRanking.mode3.scores[1] ? pokemonApiRanking.mode2.scores[1].score : "-"}</span></li>
        <li class='leaderboardItem guessTheTypeLeaderboard'><img src='./static/assets/ui/hall-of-fame/bronze.png' /><span class='leaderboardPlayerName'>${pokemonApiRanking.mode3.scores[2] ? pokemonApiRanking.mode2.scores[2].name : "-"}</span><span class='leaderboardPoints'>${pokemonApiRanking.mode3.scores[2] ? pokemonApiRanking.mode2.scores[2].score : "-"}</span></li>`

        const rankingItemsCollection = document.querySelectorAll('.leaderboardItem');

        const changeLeaderboardView = () => {
            if (modeSelect.value === 'whoIsThatPokemon') {
                for (let rankingItem of rankingItemsCollection) {
                    rankingItem.style.display = rankingItem.classList.contains('whoseThatPokemonLeaderboard') ? 'flex' : 'none'; 
                }
            } else if (modeSelect.value === 'whatItLooksLike') {
                for (let rankingItem of rankingItemsCollection) {
                    rankingItem.style.display = rankingItem.classList.contains('whatItLooksLikeLeaderboard') ? 'flex' : 'none'; 
                }
            } else if (modeSelect.value === 'guessTheType') {
                for (let rankingItem of rankingItemsCollection) {
                    rankingItem.style.display = rankingItem.classList.contains('guessTheTypeLeaderboard') ? 'flex' : 'none'; 
                }
            }
        }

        changeLeaderboardView();

        modeSelect.addEventListener('change', changeLeaderboardView)
}