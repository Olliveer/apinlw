import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    return response.send('hellow world')
})

app.post('/', (request, response) => {
    return response.json({ message: "POST" })
})

app.listen(3333, () => console.log('SERVER RUNNING'));