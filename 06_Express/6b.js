const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/hello', (req, res) => {
    res.send('Hello World!');
});

app.get('/form', (req, res) => {
    const form = `
    <form method="POST" action="/formdata">
      <label for="firstName">Imie:</label><input type="text" name="firstName" id="firstName"><br><br>
      <label for="lastName">Nazwisko:</label><input type="text" name="lastName" id="lastName"><br><br>
      <label for="index">Nr indeksu:</label><input type="text" name="index" id="index"><br><br>
      <input type="submit" value="Wyslij">
    </form>
  `;
    res.send(form);
});

app.post('/formdata', (req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const index = req.body.index;

    const data = `
    <p>Imie: ${firstName}</p>
    <p>Nazwisko: ${lastName}</p>
    <p>Nr indeksu: ${index}</p>
  `;
    res.send(data);
});

app.listen(8000);