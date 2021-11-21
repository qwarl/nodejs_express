// truy cap dependencies express trong node_modules nap vao const express
const path = require('path');
const express = require('express');
const morgan = require('morgan')// tuong tu express nha
const handlebars = require('express-handlebars');
const hbs = handlebars.create();
const db=require('./config/db')
const route=require('./routes')
//khoi tao function express() gan vao const app, dependencies express co du? roi nen chi can khoi tao function
const app = express();
//chon port muon khoi chay
const port = 3000
//connect DB
db.connect();
//http logger
app.use(morgan('dev'))//dev, combine, common, tiny, short hien thi thong tin nhieu it tuy cau lenh
// '/' dinh nghia route (duong dan den trang chu sau dau /)| dang nhu: http://localhost:3000/trang-chu neu app.get('/trang-chu')

//Template engine
// app.engine('handlebars', handlebars());
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
//routes init;
route(app);

//set anh cho trang, cau hinh de su dung static file, link, css
app.use(express.static(path.join(__dirname,'public')));

app.use(express.urlencoded({
    extended:true
}
));
app.use(express.json());// xem bai 16 f8 de nho lai
app.set('views', path.join(__dirname, 'resources','views'));
// console.log(__dirname, 'resources/views');

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})