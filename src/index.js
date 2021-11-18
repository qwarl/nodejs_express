// truy cap dependencies express trong node_modules nap vao const express
const path = require('path');
const express = require('express');
const morgan = require('morgan')// tuong tu express nha
const handlebars = require('express-handlebars');
const hbs = handlebars.create();


//khoi tao function express() gan vao const app, dependencies express co du? roi nen chi can khoi tao function
const app = express();
//chon port muon khoi chay
const port = 3000

//http logger
app.use(morgan('dev'))//dev, combine, common, tiny, short hien thi thong tin nhieu it tuy cau lenh
// '/' dinh nghia route (duong dan den trang chu sau dau /)| dang nhu: http://localhost:3000/trang-chu neu app.get('/trang-chu')

//Template engine
// app.engine('handlebars', handlebars());
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));
// console.log(__dirname, 'resources/views');
app.get('/', (req, res) => {
    res.render('home');
})

app.get('/news', (req, res) => {
    res.render('news');
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})