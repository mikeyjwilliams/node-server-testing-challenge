/** @format */

const express = require('express');
const AnsModel = require('./answers-model');
const router = express.Router();

router.post('/', async (req, res, next) => {
  const { title, solution, comment } = req.body;
  if (!title) {
    return res.status(400).json({ message: 'title is required' });
  }
  if (!solution) {
    return res.status(400).json({ message: 'solution is required' });
  }
  const answer = {
    title: title,
    solution: solution,
    comment: comment,
  };
  try {
    const answers = await AnsModel.add(answer);
    res.status(201).json(answers);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const gone = await AnsModel.remove(id);

    if (gone) {
      res.status(204).end();
    } else {
      res.status(400).json({ message: 'answer ID not found' });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
