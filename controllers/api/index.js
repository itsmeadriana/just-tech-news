const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes.js');
const commentRoutes = require('./comment-routes.js');

router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);
router.use('/users', userRoutes);

module.exports = router;