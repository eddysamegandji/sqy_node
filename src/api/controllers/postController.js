// src/api/controller/postController.js
const mongoose = require('mongoose');
const postModel = require('../models/postModel');
const Post = mongoose.model('Post');

exports.list_all_posts = (req, res) => {
  Post.find({}, (error, posts) => {
    if(error) {
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else{
      res.status(200);
      res.json(posts);
    }
  })
}

exports.create_a_post = (req, res) => {
  // {
  //   title: "toto",
  //   content: "tata"
  // }
  let {body} = req;
  let new_post = new Post(body);

  new_post.save((error, post) => {
    if(error){
      res.status(500);
      console.log(error);
      res.json({message: "Erreur serveur."});
    }
    else {
      res.status(201);
      res.json(post);
    }
  })
}
