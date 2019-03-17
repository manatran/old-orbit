const models = require("./../models");

// Get post by id
exports.get_post = (req, res, next) => {
  const { id } = req.params;
  models.Post.findById(id, {
    include: [
      {
        model: models.User,
        as: "author",
        attributes: {
          exclude: ["accessToken"]
        }
      },
      {
        model: models.Category,
        as: "subject"
      }
    ]
  })
    .then(post => {
      res.status(200).json(post);
    })
    .catch(err => {
      return res.status(500).json({ error: err });
    });
};

// Get all posts
exports.get_posts = (req, res, next) => {
  const { id } = req.params;
  models.Post.findAll({
    include: [
      {
        model: models.User,
        as: "author",
        attributes: {
          exclude: ["accessToken"]
        }
      },
      {
        model: models.Category,
        as: "subject"
      }
    ]
  })
    .then(posts => {
      res.status(200).json(posts);
    })
    .catch(err => {
      return res.status(401).json({ error: err });
    });
};

// Create post
exports.create_post = (req, res, next) => {
  const { id } = req.user;
  const { title, content, subject } = req.body;

  if (!title || !content || !subject) {
    return res.status(400).json({
      error: "Post must have both title, content and subject"
    });
  }

  const args = {
    title: title,
    content: content,
    pinned: false,
    authorId: id,
    subjectId: subject
  };

  models.Post.create(args)
    .then(post => {
      res.status(201).json(post);
    })
    .catch(err => {
      return res.status(500).json({ error: err });
    });
};

// Update post
exports.update_post = (req, res, next) => {
  const { id } = req.params;
  const { title, content, subject } = req.body;

  models.Post.findById(id)
    .then(post => {
      const fields = [];
      if (title) fields.push("title");
      if (content) fields.push("content");
      if (subject) fields.push("subjectId");

      post
        .update(
          { title: title, content: content, subjectId: subject },
          { fields: fields }
        )
        .then(newPost => {
          res.status(202).json(newPost);
        })
        .catch(err => {
          return res.status(500).json({ error: err });
        });
    })
    .catch(err => {
      return res.status(500).json({ error: err });
    });
};

// Delete post
exports.delete_post = (req, res, next) => {
  const { id } = req.params;
  models.Post.findById(id)
    .then(post => {
      post
        .destroy()
        .then(success => {
          res.status(200).json({
            success: "Post sucessfully deleted"
          });
        })
        .catch(err => {
          return res.status(500).json({ error: err });
        });
    })
    .catch(err => {
      return res.status(500).json({ error: err });
    });
};
