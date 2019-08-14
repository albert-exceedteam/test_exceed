const Item = require('./model')


exports.addItem = (req, res) => {
    new Item ({ text: req.body.text, checked: req.body.checked, color: req.body.color })
        .save()
        .then(r => res.status(201).send({message: 'Created'}))
        .catch(err => res.status(400).send({message: 'Vse ne OK', error: err}))
}
exports.getItem = (req, res) => {    
    console.log ('GET')
    Item.find({}, (err, Item) => res.json(Item))
    .catch(err => res.status(400).send({message: 'Vse ne OK', error: err}))
}

exports.updateItem = (req, res) => {
    Item.updateOne(
        {_id:  req.body.id},
        {
            text: req.body.text,
            color: req.body.color
        }
    )
    .then(r => res.status(201).send({message: 'Created'})
    )
}

exports.deleteItem = (req, res) => {
    Item.deleteOne(
        {_id: req.body.id}
    )
    .then(r => res.status(201).send({message: 'Created'}))
}