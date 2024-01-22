const express = require('express');
const blogControler = require('../controlles/blogController')
const router = express.Router();

    router.get('/create', blogControler.blog_create_get);
    router.get('/', blogControler.blog_index);
    router.post('/', blogControler.blog_create_post);
    router.get('/:id', blogControler.blog_details);
    router.delete('/:id', blogControler.blog_delete);

  

  module.exports = router;