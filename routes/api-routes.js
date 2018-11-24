const User = require('../models/User');
const Kudo = require('../models/Kudo');
module.exports = function (app) {

	//User Routes
	app.get('/api/users/', function (req, res) {
		User.find({})
			.populate('kudos')
			.then(function (data) {
				res.json(data);
			})
			.catch(function (err) {
				res.json(err);
			});
	})

	app.post('/api/users', function(req,res){
		User.create(req.body)
		.then(function (data) {
			res.json(data);
		})
		.catch(function (err) {
			res.json(err);
		});
	})

	//Kudo routes
	app.get('/api/kudos', function (req, res) {
		Kudo.find({})
			.then(function (data) {
				res.json(data);
			})
			.catch(function (err) {
				res.json(err);
			});
	})

	app.post('/api/kudos', function (req, res) {
		const userId = req.body.userId;
		const newEntry = {
			sender: req.body.sender,
			receiver: req.body.receiver,			
			title: req.body.title,
			body: req.body.body
		}

		Kudo.create(newEntry)
		.then(function(data) {
			return User.findOneAndUpdate({_id: userId}, {$push: {kudos: data._id}}, {new:true});
		})
		.then(function (userData) {
			res.json(userData);
		  })
		  .catch(function (err) {
			res.json(err);
		  });
	})
}