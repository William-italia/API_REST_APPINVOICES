const express = require('express');
const app = express();
const mongoose = require('mongoose');
const helmet = require('helmet');
const routerUsers = require('./src/routes/users-routes');
const morgan = require('morgan');

app.use(morgan('tiny'));
app.use(routerUsers);
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(3000);
