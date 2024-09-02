const {Schema, model} = require('mongoose');

const dataSchema = new Schema({
    name: String,
    value: Number,
    createdAt: { type: Date, default: Date.now }
},
{
    collection: 'data'
})

const dataModel = model('Data', dataSchema)

module.exports = dataModel