const router = require('express').Router();
const notes = require('../db/notes.json');
const path = require('path');
const fs = require('fs');

// GET Route for homepage
router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

router.get('/api/notes', (req, res) => res.json(notes))

router.post('/api/notes', (req, res) => {
    req.body.id = notes.length
    notes.push(req.body)
    fs.writeFileSync('../db/notes.json', JSON.stringify(notes))
    res.json(notes)
})

// GET Route for feedback page
router.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/notes.html'))
);

// router.delete('/api/notes', (req, res) => {
//   fs.readFile('./db/notes.json', (err, data) => {
//     let notes = JSON.parse(data);
//     const newNotes = notes.filter(note => note.id !== (req.params.id))
//     console.log(newNotes);
//   })  
// })

module.exports = router;

