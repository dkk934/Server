import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api', (req, res) => {
    console.log(req.body);
});

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`);
});