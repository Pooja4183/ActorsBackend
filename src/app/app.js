const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fs = require('fs');

const Moviedb = require('./../models/moviedb');

const app = express();

mongoose
  .connect(
    'mongodb+srv://Bipul:YJxtNh3ZdUoGhLRB@moviecluster-dkliz.mongodb.net/movie-data?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log('connected to database!');
  })
  .catch((err) => {
    console.log('connection failed!' + err);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  console.log('Request: ' + req.body);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );

  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PATCH, DELETE, OPTIONS'
  );
  next();
});

app.post('/api/movies', (req, res, next) => {
  const moviedb = new Moviedb({
    title: req.body.title,
    director: req.body.director,
    movieYear: req.body.movieYear,
    Producer: req.body.Producer,
    actor: req.body.actor,
  });

  moviedb.save();
  console.log(moviedb);
  res.status(201).json({
    message: 'movie data added successfully',
  });
});

app.get('/api/movies', (req, res, next) => {
  Moviedb.find().then((docs) => {
    res.status(200).json({
      message: 'data fetched successfully!',
      movies: docs,
    });
  });
});

app.get('/api/movies/:id', (req, res, next) => {
  Moviedb.findById(req.params.id).then((movieid) => {
    res.status(200).json({
      message: 'Id fetched successfully!',
      movies: movieid,
    });
  });
});

app.get('/api/categories', (req, res, next) => {
  fs.readFile('./productData.json', 'utf-8', (err, data) => {
    res.status(200).json({
      category: JSON.parse(data),
    });
  });
});

module.exports = app;
