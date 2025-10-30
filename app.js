import express, { response } from 'express';
import { DatabaseMemory } from './database.js';

const app = express();

app.use(express.json());

const database = new DatabaseMemory();

app.get('/videos', (request, response) => {
    const videos = database.list();

    console.log(videos);
    

    return response.send(videos);
});

app.post('/videos', (req, res) => {

    const { title, desc, duration } = req.body;

    database.create({
        title,
        desc,
        duration,
    });

    return res.status(201).send();
});

app.put('/videos/:id', (req, res) => {

    const videoId = req.params.id;
    const { title, desc, duration } = req.body;

    database.update(videoId, {
        title,
        desc,
        duration,
    });

    return res.status(204).send()
});
app.delete('/videos/:id', (req, res) => {
    const videoId = req.params.id;
    database.delete(videoId);
    return res.status(204).send();
});

app.listen(3000);

// 48:39