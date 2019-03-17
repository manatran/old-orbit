const models = require("./../models");

// Get category by id
exports.get_category = (req, res, next) => {
  const { id } = req.params;
  models.Category.findById(id, {
    include: [
      {
        model: models.Category,
        as: "parentCategory"
      }
    ]
  })
    .then(category => {
      res.json(category);
    })
    .catch(err => {
      return res.status(500).json({ error: err });
    });
};

// Get all categories
exports.get_categories = (req, res, next) => {
  models.Category.findAll({
    include: [
      {
        model: models.Category,
        as: "parentCategory"
      }
    ]
  })
    .then(categories => {
      res.json(categories);
    })
    .catch(err => {
      return res.status(500).json({ error: err });
    });
};

// Create category
exports.create_category = (req, res, next) => {
  const { name, description, thumbnail, parent } = req.body;

  if (!name || !description) {
    return res.status(400).json({
      error: "Category must have both name, description and thumbnail"
    });
  }

  const args = {
    name: name,
    description: description,
    thumbnail: thumbnail,
    parentCategory: parent
  };

  models.Category.create(args)
    .then(category => {
      res.status(201).json(category);
    })
    .catch(err => {
      return res.status(500).json({ error: err });
    });
};

// Update category
exports.update_category = (req, res, next) => {
  const { id } = req.params;
  const { name, description, thumbnail } = req.body;

  models.Category.findById(id)
    .then(category => {
      const fields = [];
      if (name) fields.push("name");
      if (description) fields.push("description");
      if (thumbmail) fields.push("thumbmail");

      category
        .update(
          { name: name, description: description, thumbmail: thumbnail },
          { fields: fields }
        )
        .then(newCategory => {
          res.status(202).json(newCategory);
        })
        .catch(err => {
          return res.status(500).json({ error: err });
        });
    })
    .catch(err => {
      return res.status(500).json({ error: err });
    });
};

// Delete category
exports.delete_category = (req, res, next) => {
  const { id } = req.params;
  models.Category.findById(id)
    .then(category => {
      category
        .destroy()
        .then(success => {
          res.status(200).json({
            success: "Category sucessfully deleted"
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
