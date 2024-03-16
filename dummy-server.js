const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(cors());

app.use(bodyParser.json());

app.post('/login', (req, res) => { 
    const { username, password } = req.body;
    res.status(200).json({
        token: 'token_de_autenticacion_generado',
        user: {
            username: username,
            email: 'usuario@example.com',
        },
    });
});


app.listen(PORT, () => {
  console.log(`SERVER TEST http://localhost:${PORT}`);
});