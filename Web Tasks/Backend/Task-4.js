const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
let posts = [
	{
		id: 1,
		title: 'Hello World'
	},
	{
		id: 2,
		title: 'Hi! Hello'
	},
	{
		id: 3,
		title: 'How are you ?'
	},
];
app.get('/posts', (req, res) => {
	res.json(posts);
});
app.post('/posts', (req, res) => {
	const newPost = {
		id: posts.length + 1,
		title: req.body.title
	};
	posts.push(newPost);
	res.status(201).json(newPost);
});
app.put('/posts/:id', (req, res) => {
	const post =
		posts.find(
			p =>
				p.id === parseInt(req.params.id)
		);
	if (!post) return res.status(404).send('Post not found.....');

	post.title = req.body.title;
	res.json(post);
});
app.delete('/posts/:id', (req, res) => {
	posts = posts
		.filter(p => p.id !== parseInt(req.params.id));
	res.status(204).send();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
	console.log(`Server is running.....${port}`);
});
