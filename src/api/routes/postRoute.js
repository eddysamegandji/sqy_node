// src/api/routes/postRoutes.js
const postController = require('../controllers/postController');

module.exports = (app) => {
  app.route('/posts')
  .get(postController.list_all_posts)
  .post(postController.create_a_post);

  app.route('/posts/:id') // req.params.id
  .get(postController.get_a_post)
  //.put(postController.update_a_post)
  // .delete(postController.delete_a_post)
}
