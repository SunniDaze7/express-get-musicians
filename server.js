const app = require("./src/app");
const { db } = require("./db/connection")
const port = 3000;
const router = require('./routes/musicianRoutes')

app.listen(port, () => {
    db.sync();
    console.log(`Listening at http://localhost:${port}/musicians`)
})