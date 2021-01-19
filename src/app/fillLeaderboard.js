export const fillLeaderboard = (pokemonApiRanking) => {
    const leaderboardTable = document.querySelector('#leaderboardResults');
    const modeSelect = document.querySelector('#chooseModeLeaderboard');

    const addLeaderboardTableResults = (modeClass, modeNumber) => {
        leaderboardTable.innerHTML += 
        `<li class='leaderboardItem ${modeClass} leaderFirstPlace'><img src='./static/assets/ui/hall-of-fame/gold.png' /><span class='leaderboardPlayerName'>${pokemonApiRanking[modeNumber].scores[0] ? pokemonApiRanking[modeNumber].scores[0].name : "-"}</span><span class='leaderboardPoints'>${pokemonApiRanking[modeNumber].scores[0] ? pokemonApiRanking[modeNumber].scores[0].score : "-"}</span></li>
        <li class='leaderboardItem ${modeClass}'><img src='./static/assets/ui/hall-of-fame/silver.png' /><span class='leaderboardPlayerName'>${pokemonApiRanking[modeNumber].scores[1] ? pokemonApiRanking[modeNumber].scores[1].name : "-"}</span><span class='leaderboardPoints'>${pokemonApiRanking[modeNumber].scores[1] ? pokemonApiRanking[modeNumber].scores[1].score : "-"}</span></li>
        <li class='leaderboardItem ${modeClass}'><img src='./static/assets/ui/hall-of-fame/bronze.png' /><span class='leaderboardPlayerName'>${pokemonApiRanking[modeNumber].scores[2] ? pokemonApiRanking[modeNumber].scores[2].name : "-"}</span><span class='leaderboardPoints'>${pokemonApiRanking[modeNumber].scores[2] ? pokemonApiRanking[modeNumber].scores[2].score : "-"}</span></li>`
    }

        addLeaderboardTableResults('whosThatPokemonLeaderboard', 'mode1');
        addLeaderboardTableResults('whatItLooksLikeLeaderboard', 'mode2');
        addLeaderboardTableResults('whosThatPokemonHardModeLeaderboard', 'mode3');
        const rankingItemsCollection = document.querySelectorAll('.leaderboardItem');

        const changeLeaderboardView = () => {
            if (modeSelect.value === 'whoIsThatPokemon') {
                for (let rankingItem of rankingItemsCollection) {
                    rankingItem.style.display = rankingItem.classList.contains('whosThatPokemonLeaderboard') ? 'flex' : 'none'; 
                }
            } else if (modeSelect.value === 'whatItLooksLike') {
                for (let rankingItem of rankingItemsCollection) {
                    rankingItem.style.display = rankingItem.classList.contains('whatItLooksLikeLeaderboard') ? 'flex' : 'none'; 
                }
            } else if (modeSelect.value === 'whoIsThatPokemonHardMode') {
                for (let rankingItem of rankingItemsCollection) {
                    rankingItem.style.display = rankingItem.classList.contains('whosThatPokemonHardModeLeaderboard') ? 'flex' : 'none'; 
                }
            }
        }

        changeLeaderboardView();
        modeSelect.addEventListener('change', changeLeaderboardView); 
}