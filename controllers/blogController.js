const Blog = require('../model/blog');

//  blog_index, blog_details, blog_create_get, blog_create_post, blog_delete

const blog_index = (req, res) => {
    Blog
        .find()
        .sort({createdAt: -1})
        .then((result) => {

            res.render('blogs/index', {
                Title: 'All blogs',
                blogs: result
            })

        })
        .catch((err) => {
            console.log(err)
        });

};

const blog_details = (req, res) => {

    var id = req.params.id;
    console.log(id);

    Blog
        .findById(id)
        .then((result) => {
            //console.log(result);
            res.render('blogs/detail', {
                blog: result,
                Title: 'Blog Details'
            })
        })
        .catch((err) => console.log(err));

};

const blog_create_get = (req, res) => {
    res.render("blogs/create", {Title: 'Create a Blog'});

};

const blog_create_post = (req, res) => {
    console.log(req.body);
    var blog = new Blog(req.body);
    blog
        .save()
        .then((result) => {
            res.redirect("/");
        })
        .catch((err) => {
            console.log(err);
        });

}

const blog_delete = (req, res) => {
    var id = req.params.id;
    console.log(id);

    Blog
        .findByIdAndDelete(id)
        .then((result) => {
            res.send({redirect: '/blogs'});
        })
        .catch((err) => {
            console.log(err);
        });

}

module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete
};