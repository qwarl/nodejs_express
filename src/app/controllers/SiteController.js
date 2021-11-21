const Course = require('../models/Course');
class SiteController {
    // [GET] /      //la trang home do
    index(req, res) {
        Course.find({}, function (err, courses) {
            // if (!err) res.json(courses);
            // res.status(400).json({ error: 'error!' });
            if (err) res.status(400).json({ error: 'error!' });
            res.json(courses);
        });
        // res.render('home');
    }
    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController;