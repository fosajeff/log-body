const express = require('express');

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;

app.get('/', (request, response) => {
    console.log("Running...")
    response.json({ status: true })
})

app.post('/', (request, response) => {
    console.log(request.body)
    response.json({ status: true })
})

app.listen(() => console.log("Listening on port:", PORT))