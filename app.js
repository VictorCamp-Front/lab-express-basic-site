const express = require('express');

const app = express();


app.get('/home', (request, response, next) => {
    
    response.sendFile(`${__dirname}/views/home.html`);
  });