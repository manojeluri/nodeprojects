//importing the dependencies
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

//defining the express app
const app = express();

//defining an array to work as a database (temporary solution)