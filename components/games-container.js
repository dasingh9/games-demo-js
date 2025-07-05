class GamesContainer {
    getGameCards(games) {
        let gamesHtml = "";
        games.forEach(game => {
            const gameHtml =
            `<div class="card">
                <img src="${game.thumbnail}" alt="">
                <div class="card-body">
                    <h3>${game.title}</h3>
                    <span>${game.genre}</span>
                    <a href="${game.gameUrl}">Play</a>
                </div>
            </div>`;

            gamesHtml += gameHtml;
        });
        return gamesHtml;
    }
}