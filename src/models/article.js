const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema(
  {
    title: String,
    uid: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    content: String,
    category: String,
    tags: [String],
    picUrl: String,
    deletehash: String,
    published: Boolean,
  },
  {
    timestamps: true,
  },
);

articleSchema.statics.getArticleUidFor = async (title) => {
  let mainSlug = title.replace(/ /g, '-').toLowerCase();
  let uid = mainSlug;
  let article = await Article.findOne({ uid });
  let index = 1;
  while (!!article) {
    uid = `${mainSlug}-${index}`;
    article = await Article.findOne({ uid });
    index++;
  }
  return uid;
};

const Article = mongoose.model('article', articleSchema);
module.exports = Article;
