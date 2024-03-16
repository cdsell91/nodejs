const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.post('/login', (req, res) => { 
    const { username, password } = req.body;
    if (username === 'user' && password === 'password') {
    
        res.status(200).json({
        token: 'token_de_autenticacion_generado',
        user: {
            username: username,
            email: 'usuario@example.com',
        },
        });
    } else {
        res.status(401).json({ error: 'Credenciales incorrectas' });
    }
});


app.listen(PORT, () => {
  console.log(`SERVER TEST http://localhost:${PORT}`);
});