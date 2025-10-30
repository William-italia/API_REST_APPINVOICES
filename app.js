import express, { response } from 'express';
import { DatabaseMemory } from './database.js';
import videoRoutes from './src/routes/video-routes.js';


const database = new DatabaseMemory();
const app = express();
app.use(express.json());
app.use(videoRoutes);

app.listen(3000);

// 48:39