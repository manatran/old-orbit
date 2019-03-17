const models = require("../models");

// Get tag by id
exports.get_tag = (req, res, next) => {
  const { id } = req.params;
  models.Tag.findById(id)
    .then(tag => {
      res.status(200).json(tag);
    })
    .catch(err => {
      return res.status(500).json({ error: err });
    });
};

// Get all tags
exports.get_tags = (req, res, next) => {
  models.Tag.findAll()
    .then(tags => {
      res.status(200).json(tags);
    })
    .catch(err => {
      return res.status(500).json({ error: err });
    });
};

// Create tag
exports.create_tag = (req, res, next) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).json({
      error: "Tag must have both name, description and thumbnail"
    });
  }

  const args = {
    name: name,
    description: description
  };

  models.Tag.create(args)
    .then(tag => {
      res.status(201).json(tag);
    })
    .catch(err => {
      return res.status(500).json({ error: err });
    });
};

// Update tag
exports.update_tag = (req, res, next) => {
  const { id } = req.params;
  const { name, description } = req.body;

  models.Tag.findById(id)
    .then(tag => {
      const fields = [];
      if (name) fields.push("name");
      if (description) fields.push("description");

      tag
        .update({ name: name, description: description }, { fields: fields })
        .then(newTag => {
          res.status(202).json(newTag);
        })
        .catch(err => {
          return res.status(500).json({ error: err });
        });
    })
    .catch(err => {
      return res.status(500).json({ error: err });
    });
};

// Delete tag
exports.delete_tag = (req, res, next) => {
  const { id } = req.params;
  models.Tag.findById(id)
    .then(tag => {
      tag
        .destroy()
        .then(success => {
          res.status(200).json({
            success: "Tag sucessfully deleted"
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
