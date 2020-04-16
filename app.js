require("dotenv").config();

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

const mongoose = require("mongoose");
mongoose.set("useUnifiedTopology", true);

mongoose.connect(
  process.env.DATABASE_URL,
  { useNewUrlParser: true }
  
);
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => console.log("connected to database"));
 

const postsRouter = require('./routes/posts');
const usersRouter = require("./routes/users");
app.use('/posts', postsRouter);
app.use('/users',usersRouter);

app.use(express.json());

app.use((req, res, next) => {
  res.status(404).send('page not found')
})
app.listen(3003, () => console.log("server started"));
