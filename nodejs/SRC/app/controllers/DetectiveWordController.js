const room = require('../models/RoomModel');
const {mongooseToObject}=require('../../ultil/mongoose');
class DetectiveWordController {
  //[get]/news

    show(req, res,next) {
      var idPlayer={idPlayer:req.query.idplayer};
      var UserName={UserName:req.query.Username};
      var Loca={Loca:req.query.Loca};
      var Of={Of:req.query.Of};
      var range={range:req.query.range};
      var gameMode={gameMode:req.query.gameMode};

    res.render("DetectiveWord/DetectiveWordGame",{
      idPlayer:idPlayer,
      Username:UserName,
      Loca:Loca,
      Of:Of,
      range:range,
      gameMode:gameMode,
  });

    }
}
module.exports = new DetectiveWordController();
