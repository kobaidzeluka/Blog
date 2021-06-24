import mongoose from 'mongoose';
const Schema = mongoose.Schema;
export const BLogSchema = new Schema({
  title: {
    type: String,
    required: "Enter blog title"
  },
  subTitle: {
    type: String,
    required: "Enter a subtitle"
  },
  readTime: {
    type: Number,
    required:'Enter how much time do you want to read'
  },
  category: {
    type: String,
    required:'Enter which category it is'
  },
  author: {
    type: String,
    required:'Enter author name'
  },
  created_date: {
    type: Date,
    default: Date.now
  }
})