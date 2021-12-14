const express = require('express');
const characters = require('./models/charactersModel');
const router = express.Router();

router.get("/", (req, res) => {
    characters.getCharacters()
        .then(character => {
            res.status(200).json(character);
        })
        .catch(err => {
            res.status(500).json({
                error: 'Failed to get characters'
            })
            console.log(err)
        })
});
  
router.post('/', (req, res) => {
    const { name, image } = req.body;
    const newCharacter = { name, image };
   
    characters.add(newCharacter)
        .then(character => {
            res.status(201).json({
                message: 'Category created successfully',
                id: character.id
            })
        })
        .catch(err => {
            res.status(500).json({
                error: "Failed to create new character"
            })
            console.log(err)
        })
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
  
    characters.remove(id)
      .then(deleted => {
        if(deleted) {
          res.json({removed: deleted});
        } else {
          res.status(404).json({message: 'Could not find character with given id'});
        }
      })
      .catch(err => {
        res.status(500).json({message: 'Failed to delete character'});
      });
  });
  

module.exports = router