const express = require('express');
const Category = require('../models/Category');
const Item = require('../models/Item');

const router = express.Router();



/**
 * Load all items
 */
router.get('/allitems', (req, res, next) => {
  Item.find((err, data) => {
    if (err) return next(err);
    res.status(200).send(data);
  });
});

/**
 * Add new item
 */
router.post('/additem', (req, res, next) => {
  const { name, buyPrice, sellPrice, category } = req.body;
  const item = new Item({
    name,
    buyPrice,
    sellPrice,
    category,
  });

  item.save((err) => {
    if (err) return next(err);
    Item.find((error, data) => {
      if (error) return next(error);
      res.status(200).send(data);
    });
  });
});

/**
 * Edit item
 */
router.post('/edititem', (req, res, next) => {
  const { _id, name, buyPrice, sellPrice, category } = req.body;
  Item.update(
    { _id },
    {
      $set: { name, buyPrice, sellPrice, category },
    },
    (err) => {
      if (err) return next(err);
      Item.find((error, data) => {
        if (error) return next(error);
        res.status(200).send(data);
      });
    });
});

/**
 * Delete item
 */
router.post('/removeitem', (req, res, next) => {
  const id = req.body["_id"]
  Item.findByIdAndRemove(id, (err) => {
    if (err) return next(err);
    Item.find((error, data) => {
      if (error) return next(error);
      res.status(200).send(data);
    });
  });
});

/**
 * Load all categories
 */
router.get('/allcategories', (req, res, next) => {
  Category.find((err, data) => {
    if (err) return next(err);
    res.status(200).send(data);
  });
});

/**
 * Add new category
 */
router.post('/addcategory', (req, res, next) => {
  const category = new Category(req.body);

  category.save((err) => {
    if (err) return next(err);
    Category.find((error, data) => {
      if (error) return next(error);
      res.status(200).send(data);
    });
  });
});

/**
 * Edit category
 */
router.post('/editcategory', (req, res, next) => {
  const { id, name } = req.body;

  Category.update(
    { _id: id },
    {
      $set: { name },
    },
    (err) => {
      if (err) return next(err);
      res.status(200).send('category updated');
    });
});

/**
 * Delete category
 */
router.post('/removecategory', (req, res, next) => {
  const { id, name } = req.body;

  Category.findByIdAndRemove(id, (err) => {
    if (err) return next(err);
    Item.find((error, items) => {
      if (error) return next(error);

      items.forEach((item) => {
        if (item.category === name) item.category = '';
        item.save((saveError) => {
          if (saveError) return next(saveError);
        });
      });
    });

    Category.find((dbError, data) => {
      if (dbError) return next(dbError);
      res.status(200).send(data);
    });
  });
});


module.exports = router;
