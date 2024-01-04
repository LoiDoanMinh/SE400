const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 const slug = require('mongoose-slug-generator');
  mongoose.plugin(slug);
const Course1 = new Schema({
  name: {type: String},
  descript:{type: String},
  image: {type:String},
  VideoID: {type:String},
   slug: { type: String, slug: 'name'}
},{
  timestamps:true,
});


const Course = mongoose.model('course', Course1);

module.exports = Course;
//module.exports=mongoose.model('Course',Course)