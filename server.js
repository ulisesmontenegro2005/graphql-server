import express, { json } from 'express';
import GraphqlController from './controllers/controllers.js';

export const app = express();

app.use(json())
app.use('/graphql', new GraphqlController())

const PORT = process.env.PORT || 8080

app.listen(PORT, () => {
    console.log('Escuchando en', PORT);
})




