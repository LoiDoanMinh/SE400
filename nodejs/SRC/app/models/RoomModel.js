const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 const slug = require('mongoose-slug-generator');
  mongoose.plugin(slug);
const room1 = new Schema({
  Code: {type: String},
  Room:{type: String},
  Range:{type: String},
  gameMode:{type: String},
});


const Room= mongoose.model('room', room1);

module.exports = Room;
//module.exports=mongoose.model('Course',Course)