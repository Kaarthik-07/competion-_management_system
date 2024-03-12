// import {Form }from '../backend/modals/form'
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const form = require('../backend/modals/form');
require('dotenv').config();

const app = express();
const url = process.env.ATLAS_URL;
app.use(cors());
app.use(express.json());


mongoose.set('strictQuery', false);
mongoose.connect(url)
  .then(() => console.log('chipi chipi chappa chappa . . .Successfully connected to MongoDB'))
  .catch(err => console.error('Connection error:', err));
mongoose.connection.once('open', () => {
  console.log('maja da mama MongoDB connection is open');
});

// Defining schema for the form data to store into mongodb
const formSchema = new mongoose.Schema({
  compname: String,
  date: String,
  day: String
});

// Create a model based on the schema
const Form = mongoose.model('Form', formSchema);

app.get('/', (req, res) => {
  res.json('Maja mame');
});

//post req from modals/form
app.post('/Form', (req, res) => {
  const { username, email, password } = req.body;
  console.log(username, email, password);

  // Create a new form instance
  const newForm = new Form({
    compname,
    date,
    Day
  });

  // Saving the form data to MongoDB
  newForm.save()
    .then(() => {
      console.log('mame Form data saved to MongoDB');
      res.status(200).json('chipi chipi chappa chappa ... mame Form data saved to MongoDB');
    })
    .catch(err => {
      console.error('bruhh u r wrong:', err);
      res.status(500).json('code padi da parama');
    });
});

const PORT = 6967;
app.listen(PORT, () => {
  console.log(`Maja mame Server is running on port ${PORT}`);
});