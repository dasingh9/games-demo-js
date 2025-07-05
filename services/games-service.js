class GamesService {
    async getGames() {
        const url = "https://raw.githubusercontent.com/dasingh9/public/refs/heads/main/games-data.json";
        const response = await fetch(url); //step 1
        const games = response.json();
        return games;
    }

    async addGame() {
        // make api call to save your new game to server
    }

    async deleteGame() {
        // make api call to delete your new game from server
    }
}