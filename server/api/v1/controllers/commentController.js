const models = require("./../models");

// Get comment by id
exports.get_comment = (req, res, next) => {
  const { id } = req.params;
  models.Comment.findById(id, {
    include: [
      {
        model: models.User,
        as: "author",
        attributes: {
          exclude: ["accessToken"]
        }
      }
    ]
  })
    .then(comment => {
      res.status(200).json(comment);
    })
    .catch(err => {
      return res.status(500).json({ error: err });
    });
};

// Get all comments
exports.get_comments = (req, res, next) => {
  const { id } = req.params;
  models.Comment.findAll({
    include: [
      {
        model: models.User,
        as: "author",
        attributes: {
          exclude: ["accessToken"]
        }
      }
    ]
  })
    .then(comments => {
      res.status(200).json(comments);
    })
    .catch(err => {
      return res.status(401).json({ error: err });
    });
};

// Create comment
exports.create_comment = (req, res, next) => {
  const { id } = req.user;
  const { content, postId } = req.body;

  if (!content || !postId) {
    return res.status(400).json({
      error: "Comment must have content and parent post"
    });
  }

  const args = {
    content: content,
    pinned: false,
    authorId: id,
    postId: postId
  };

  models.Comment.create(args)
    .then(comment => {
      res.status(201).json(comment);
    })
    .catch(err => {
      return res.status(500).json({ error: err });
    });
};

// Delete comment
exports.delete_comment = (req, res, next) => {
  const { id } = req.params;
  models.Comment.findById(id)
    .then(comment => {
      comment
        .destroy()
        .then(success => {
          res.status(200).json({
            success: "Comment sucessfully deleted"
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
