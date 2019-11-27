const express = require('express');
const cors = require('cors');
const app = express();
const port = 3030;


app.use(cors());
app.use(express.json());
app.use(express.static('public'));





app.listen(port, () => `Listening on port ${port}!`);




