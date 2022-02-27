const express = require('express');
const controller = require('./controllers');

const apiRouter = express.Router()

apiRouter.get('/trending/all/week',controller.getWeeklyTrending)
         .get('/search/multi', controller.getSearchResults)
         .get('/:uri/:id', controller.getDetails)

module.exports = apiRouter