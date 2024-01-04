const Course = require('../models/CourseModel');
const room = require('../models/RoomModel');
const {mongooseToObject}=require('../../ultil/mongoose');
class detailController {
  //[get]/news

    show(req, res,next) {
      var idPlayer=req.query.idplayer;
      var UserName=req.query.Username;
        res.render('./bombParty/bombParty-1',{idPlayer,UserName});
    }

 JoinRoom(req,res,next)
  {
    var code=req.params.id;
    res.render('./bombParty/bombParty-joinRoom',{code});
  }

  store(req,res,next)
  {
    const formData=req.body;
    formData.image='https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbaed1dd.png';
    const course=new Course(formData);
    course.save()
    .then(()=>{
      res.redirect('/');})
    .catch((error)=>{
     res.send(error);
    })
    }

    edit(req,res,next)
    {
    Course.findById(req.params.id)
    .then(course=>res.render('detail/edit',{
      course:mongooseToObject(course)
    }))
    .catch(error=>next(error))
    }

    update(req,res,next)
    {
      Course.updateOne({_id:req.params.id},req.body)
      .then(()=>res.redirect('/me/store/courses'))
      .catch(error=>next(error))
    }
    
    delete(req,res,next)
    {
      Course.deleteOne({_id:req.params.id})
      .then(()=>res.redirect('back'))
      .catch(error=>next(error))
    }
}
module.exports = new detailController();
