const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    title: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    content: String,
    category: String,
    tags: String,
  },
  {
    timestamps: true,
  },
);

const Article = mongoose.model('article', articleSchema);
module.exports = Article;
