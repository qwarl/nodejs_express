const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /      //la trang home do
    index(req, res, next) {
        //show model to web
        //use callback
        // Course.find({}, function (err, courses, next) {
        //     if (err) {
        //         next(err);
        //     }
        //     else {
        //         res.json(courses);
        //     };
        // });
        //use promise, gon hon
        Course.find({})
            .then(courses => {
                // courses = courses.map(course => course.toObject())//template engine handlebars moi bi cai nay, may cai khac ko bi. chir can dong 21 thoi la du
                // res.render('home', { courses });
                res.render('home', { courses: mutipleMongooseToObject(courses) });
            })
            .catch(next);
        // res.render('home');
    }
    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;