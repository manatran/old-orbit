const models = require("./../models");

// Get revision by id
exports.get_revision = (req, res, next) => {
  const { id } = req.params;
  models.Revision.findById(id, {
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
    .then(revision => {
      res.status(200).json(revision);
    })
    .catch(err => {
      return res.status(500).json({ error: err });
    });
};

// Get all revisions
exports.get_revisions = (req, res, next) => {
  const { id } = req.params;
  models.Revision.findAll({
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
    .then(revisions => {
      res.status(200).json(revisions);
    })
    .catch(err => {
      return res.status(401).json({ error: err });
    });
};

// Create revision
exports.create_revision = (req, res, next) => {
  const { id } = req.user;
  const { title, content, postId } = req.body;

  if (!title || !content || !postId) {
    return res.status(400).json({
      error: "Revision must have both title, content and belong to a post"
    });
  }

  const args = {
    title: title,
    content: content,
    accepted: false,
    authorId: id,
    parentPostId: postId
  };

  models.Revision.create(args)
    .then(revision => {
      res.status(201).json(revision);
    })
    .catch(err => {
      return res.status(500).json({ error: err });
    });
};

// Update revision
exports.update_revision = (req, res, next) => {
  const { id } = req.params;
  const { title, content, accepted } = req.body;

  models.Revision.findById(id)
    .then(revision => {
      const fields = [];
      if (title) fields.push("title");
      if (content) fields.push("content");
      if (accepted) fields.push("accepted");

      revision
        .update(
          { title: title, content: content, accepted: accepted },
          { fields: fields }
        )
        .then(newRevision => {
          res.status(202).json(newRevision);
        })
        .catch(err => {
          return res.status(500).json({ error: err });
        });
    })
    .catch(err => {
      return res.status(500).json({ error: err });
    });
};

// Delete revision
exports.delete_revision = (req, res, next) => {
  const { id } = req.params;
  models.Revision.findById(id)
    .then(revision => {
      revision
        .destroy()
        .then(success => {
          res.status(200).json({
            success: "Revision sucessfully deleted"
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
