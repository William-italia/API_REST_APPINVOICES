import express, { response } from 'express';

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
    response.send('Hello World!');
    return response.end();
});

app.get('/node', (request, response) => {
    response.send('Hello Node.js!');
    return response.end();
});

app.get('/express', (request, response) => {
    response.send('Hello express!');
    return response.end();
});


app.listen(3000);

// 22:56