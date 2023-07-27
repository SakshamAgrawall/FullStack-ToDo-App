const express = require ('express');
const app = express();
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());


const routes = require('./routes/ToDoRoutes');

app.use(routes);


module.exports = app;