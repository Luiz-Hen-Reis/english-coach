import express from 'express';
import { chat } from './controller';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.post('/chat', chat);

app.listen(5000, () => {
    console.log('Server listening on port 5000');
})