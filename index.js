const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

const PORT = process.env.PORT;

app.get('/', (request, response) => {
    console.log("Running...")
    response.json({ status: true })
})

app.post('/', (request, response) => {
    console.log(request.body)
    response.json({ status: true })
})

app.listen(PORT, () => console.log("Listening on port:", PORT))