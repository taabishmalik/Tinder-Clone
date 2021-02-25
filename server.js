import express from 'express';
import mongoose from 'mongoose';
import bodyParser from "body-parser";

import Cors from 'cors';

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_url =
  'mongodb+srv://admin:tinderclone@cluster0.8oxe8.mongodb.net/tinderdb?retryWrites=true&w=majority';

app.set('view engine', 'ejs');
// Middlewares
app.use(express.json());
app.use(Cors());
app.use(bodyParser.urlencoded({extended: true}));

// DB config
// mongoose.connect(connection_url, {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true
// });

//mongodb://localhost:27017/tinderdb

mongoose.connect("mongodb+srv://admin:tinderclone@cluster0.8oxe8.mongodb.net/tinderdb?retryWrites=true&w=majority", {useNewUrlParser: true,useUnifiedTopology: true,useCreateIndex: true,});

const cardSchema = {
  name: String,
  imgUrl: String
};

const Card = mongoose.model("Card", cardSchema);



// API Endpoints
app.get('/', (req, res) => res.status(200).send('HELLO !'));

app.post('/tinder/cards', (req, res) => {
  const newCard = Card({
    name: req.body.name,
    imgUrl: req.body.imgUrl
  });
  newCard.save(function (err) {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send("Added Succesfully")
    }
  });
});

app.get('/tinder/cards', (req, res) => {
  Card.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

//Listner

app.listen(port, function(){
    console.log("server is running");
})