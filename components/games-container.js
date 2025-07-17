class GamesContainer {
    // Returns array of DOM elements using <template>
    getGameCardElements(games) {
        const template = document.getElementById('game-card-template');
        const cards = [];
        games.forEach(game => {
            const clone = template.content.cloneNode(true);
            const card = clone.querySelector('.card');
            const img = card.querySelector('img');
            img.src = game.thumbnail;
            img.alt = game.title;
            card.querySelector('.game-title').textContent = game.title;
            card.querySelector('.game-description').textContent = game.genre;
            const playBtn = card.querySelector('.play-btn');
            playBtn.href = game.gameUrl;
            playBtn.textContent = 'Play';
            cards.push(card);
        });
        return cards;
    }
}