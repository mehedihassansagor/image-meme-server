const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require("mongoose");
require('dotenv').config()
const PORT =  2929


app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connect to mongoDB"))
  .catch((err) => console.log(err));

const memeimage = require('./routes/memeimage')

app.use('/image',memeimage)

  app.listen(process.env.PORT || PORT);