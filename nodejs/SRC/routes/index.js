//trang điều phối chung đến các trang 
const homeRouter = require('./Home1');
const sitesRouter = require('./site');
const bombPartyRouter = require('./bombParty');
const HarvestFestival = require('./HarvestFestival');
const DetectiveWord = require('./DetectiveWord');
function route(app) {
    app.use('/home', homeRouter);
    app.use('/HarvestFestival', HarvestFestival);
    app.use('/DetectiveWord', DetectiveWord);
    app.use('/bombParty', bombPartyRouter);
    app.use('/', sitesRouter);
}
module.exports = route;
