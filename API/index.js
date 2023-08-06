const express = require('express');
const app = express();

app.use(express.json());

//Array for Games Database
const games = [{
    id: 1,
    game: 'Doom Eternal'
},
{
    id: 2,
    game: 'StarCraft 64'
},
{
    id: 3,
    game: 'Europa Universalis IV'
},
{
    id: 4,
    game: 'Onimusha'
},
{
    id: 5,
    game: 'Runescape'
},
{
    id: 6,
    game: 'Baldurs Gate: Dark Alliance'
},
{
    id: 7,
    game: 'Advance Wars'
},
{
    id: 8,
    game: 'Kingdom Hearts'
},
{
    id: 9,
    game: 'X-Men Legends'
},
{
    id: 10,
    game: 'Dynasty Warriors'
}];

//get all games
app.get('/api/games', (req, res) => {
    res.send(games);
});

//post
app.post('/api/games', (req, res) => {
    const mygame = {
        id: games.length + 1,
        game: req.body.game
    }

    games.push(mygame);
    res.send(mygame);
});

//put
app.put('/api/games/:id', (req, res) => {
    const mygame = games.find(t => t.id === parseInt(req.params.id));
    if (!mygame) return res.status(404).send('The game with the ID was not found');

    mygame.game = req.body.game;
    res.send(mygame);
});

//delete

//put
app.delete('/api/games/:id', (req, res) => {
    const mygame = games.find(t => t.id === parseInt(req.params.id));
    if (!mygame) return res.status(404).send('The game with the ID was not found');

    const index = games.indexOf(mygame);
    games.splice(index, 1);
    res.send(mygame);
});

//configuration
const port = process.env.port || 6001;
app.listen(port, () => console.log('Listening on port ${port}'));