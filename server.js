const express = require("express");
const cors = require("cors");
const app = express();
const port = 8000;

require(`dotenv`).config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

require("./server/config/mongoose.config");
require("./server/routes/pet.routes")(app);

app.listen(port, () => console.log(`listening on port:${port}`));
