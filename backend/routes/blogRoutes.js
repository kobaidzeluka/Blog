import { addNewBlog, getBlogs, getBlogWithId, updateBlog, deleteBlog } from "../controllers/blogController.js";
const routes = (app) => {
  app
    .route("/blogs")

    .get(getBlogs)

    .post(addNewBlog);

    app.route('/blogs/:blogID')
    .get(getBlogWithId)
    .put(updateBlog)
    .delete(deleteBlog)
};

export default routes;
