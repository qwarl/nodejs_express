const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter=require('./courses');
function route(app) {
    //cach cu khi chua boc tach ra
    // app.get('/news', (req, res) => {
    //     res.render('news');
    // })
    // cach moi gon hon
    //news page
    app.use('/news', newsRouter);
//home page
    app.use('/', siteRouter);
//detail course page
    app.use('/courses',coursesRouter);

}

module.exports = route;