const express = require('express');
const morgan = require('morgan');
// const mongoose = require('mongoose');
const app = express();
const blogRoutes=require('./routes/blogRoutes');

app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'));

// const dbURI = 'mongodb://localhost:27017/blogs?readPreference=primary&appname=MongoDB%20Compass' +
//         '%20Community&ssl=false'

// mongoose
//     .connect(dbURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
//     .then((result) => {
//         //        console.log('coonected to db')
//         app.listen(3000);
//     })
//     .catch((err) => {
//         console.log(err)
//     });


app.listen(process.env.PORT||3000);
//middleware & static files
app.use(express.static('public'));

// app.use((req, res, next) => {
//     console.log('In another Middle ware');
//     next();
// });

app.get("/", (req, res) => {
    res.redirect('/blogs');
});
app.get("/about", (req, res) => {
    res.render("about", {Title: 'About this page'});
});

//blog routes

app.use('/blogs',blogRoutes);

//404
app.use((req, res) => {
    res
        .status(404)
        .render('404', {Title: 'Not Found 404'});
});