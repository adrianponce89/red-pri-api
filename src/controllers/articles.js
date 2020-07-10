const Article = require('../models/article');

module.exports = {
	index: async (req, res, next) => {
		const articles = await Article.find({});
		res.status(200).json(articles);
	},

	newArticle: async (req, res, next) => {
		const newArticle = new Article(req.body);
		const article = await newArticle.save();
		res.status(201).json(article);
	},

	getArticle: async (req, res, next) => {
		const { articleId } = req.params;
		const article = await Article.findById(articleId);
		res.status(200).json(article);
	},

	replaceArticle: async (req, res, next) => {
		const { articleId } = req.params;
		const newArticle = req.body;
		const oldArticle = await Article.findByIdAndUpdate(articleId, newArticle);
		res.status(200).json({success: true});
	},

	updateArticle: async (req, res, next) => {
		const { articleId } = req.params;
		const newArticle = req.body;
		const oldArticle = await Article.findByIdAndUpdate(articleId, newArticle);
		res.status(200).json({success: true});
	},
};
