import {randomUUID} from 'crypto';

export class DatabaseMemory {
    #videos = new Map();

    list() {
        return Array.from(this.#videos.entries()).map(props => {
            const id = props[0];
            const video = props[1];

            return {
                id,
                ...video
            }

        });
    }

    create(video) {
        const videoId = randomUUID();
    
        this.#videos.set(videoId, video);
    }

    update(id, video) {
        if(this.#videos.has(id)) {
            this.#videos.set(id, video)
        }
        return
    }

    delete(id) {
        if(this.#videos.has(id)) {
            this.#videos.delete(id) 
        }
        return
    }
}