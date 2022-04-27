const Posts = require('../models/posts.model');

// Get All Posts
module.exports.list = (req, res, next) => {
	Posts.find()
		.then((posts) => {
			res.status(200).json(posts);
		})
		.catch(next);
};

// Get Post
module.exports.detail = (req, res, next) => {
	const id = req.params.id;

	Posts.findById(id)
		.then((post) => {
			if (post) {
				res.status(200).json(post);
			} else {
				res.status(404).json({ message: 'post not found' });
			}
		})
		.catch(next);
};

// Create Post
module.exports.create = (req, res, next) => {
	const data = ({ title, text, author } = req.body);

	Posts.create(data)
		.then((post) => {
			res.status(201).json(post);
		})
		.catch((err) => {
			res.status(400).json({ message: 'wrong body params'});
			next();
		});
};

// Update Post
module.exports.update = (req, res, next) => {
	const id = req.params.id;
	const data = ({ title, text, author } = req.body);

	Posts.findByIdAndUpdate(id, data, { new: true })
		.then((post) => {
			if (post) {
				res.status(200).json(post);
			} else {
				res.status(404).json({ message: 'post not found' });
			}
		})
		.catch(next);
};

// Delete Post
module.exports.delete = (req, res, next) => {
	const id = req.params.id;

	Posts.findByIdAndDelete(id)
		.then((post) => {
			if (post) {
				res.status(204).json({});
			} else {
				res.status(404).json({ message: 'post not found' });
			}
		})
		.catch(next);
};