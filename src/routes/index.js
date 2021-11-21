const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    //cach cu khi chua boc tach ra
    // app.get('/news', (req, res) => {
    //     res.render('news');
    // })
    // cach moi gon hon
    app.use('/news', newsRouter);

    app.use('/', siteRouter);

}

module.exports = route;