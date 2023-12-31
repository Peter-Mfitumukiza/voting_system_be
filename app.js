require('./config/db').connect();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const authRouter = require('./routes/auth');
const candidateRouter = require('./routes/candidate');
const pollRouter = require('./routes/polls');

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"))

app.get("/", (req, res) => {
  res.status(200).send({
    message: "Welcome to national voting system",
    client: "National Election Commission",
    website: "nec.gov.rw",
  });
});
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/polls', pollRouter);
app.use('/api/v1/candidates', candidateRouter);

module.exports = app;