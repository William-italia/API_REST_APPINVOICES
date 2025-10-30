import { DatabaseMemory } from '../../database.js';

const database = new DatabaseMemory();

export const getVideo = (req, res) => {
    const videos = database.list();
    console.log(videos);

    return res.send(videos)
}

export const createVideo = (req, res) => {

    const { title, desc, duration } = req.body;

    database.create({
        title,
        desc,
        duration,
    });

    return res.status(201).send();
}

export const updateVideo = (req, res) => {

    const videoId = req.params.id;
    const { title, desc, duration } = req.body;

    database.update(videoId, {
        title,
        desc,
        duration
    })

    return res.status(204).send();
}

export const deleteVideo = (req, res) => {
    const videoId = req.params.id;
    database.delete(videoId);
    return res.status(204).send();
}