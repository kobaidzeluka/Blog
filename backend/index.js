import express from "express";
import routes from './routes/blogRoutes.js';
import mongoose from 'mongoose';
import cors from 'cors'
const app = express();
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = 4000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/blogs', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

routes(app);
// app.get("/", (req, res) =>
//   res.send(`Node and express server running on port ${PORT}`)
// );
app.listen(PORT, () => console.log(`Your server is running on port ${PORT}`));
