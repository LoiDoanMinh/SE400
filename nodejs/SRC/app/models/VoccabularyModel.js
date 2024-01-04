const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 const slug = require('mongoose-slug-generator');
  mongoose.plugin(slug);
const voc = new Schema({
  Word:{type: String},
});


const Vocabulary= mongoose.model('vocabulary', voc);

module.exports = Vocabulary;
//module.exports=mongoose.model('Course',Course)