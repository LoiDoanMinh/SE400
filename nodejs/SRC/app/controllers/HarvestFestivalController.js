const Room = require('../models/RoomModel');
const {mongooseToObject, mutipleMongooseToObject}=require('../../ultil/mongoose');
const Vocabulary=require('../models/VoccabularyModel');
class MeController {
  //[get]/news


  JoinRoom(req, res,next) {
      var idPlayer={idPlayer:req.query.idplayer};
      var UserName={UserName:req.query.Username};
      var Loca={Loca:req.query.Loca};
      var Of={Of:req.query.Of};
      var range={range:req.query.range};
      var gameMode={gameMode:req.query.gameMode};
   res.render('HarvestFestival/HarvestFestivalStartRoom',{
     idPlayer:idPlayer,
     Username:UserName,
     Loca:Loca,
     Of:Of,
     range:range,
     gameMode:gameMode,
 })
       }
  JoinGame(req,res)
  { 
    var id=req.params.id;
    // console.log(id);
    res.render('HarvestFestival/HarvestFestivalWaitingRoom',{id});
  }
  Save1(req, res) {

    var { data, range,gameMode } = req.body;
   
    var dataArray = JSON.parse(data);
// console.log(dataArray);
// console.log(keys);
    Room.deleteMany({})
  .then(() => {
    console.log("Đã xóa toàn bộ dữ liệu thành công!");

    // Thêm dữ liệu mới
    return Promise.all(
      dataArray.map((item) => {
        var bien = {
          Code: item.id,
          Room: item.Room,
          Range:range,
          gameMode:gameMode,
        };

        // Sử dụng updateOne với upsert và setOnInsert để tránh trùng mã Code
        return Room.updateOne(
          { Code: item.id },
          { $setOnInsert: bien },
          { upsert: true }
        );
      })
    );
  })
  .then(() => {
    console.log("Đã thêm mới dữ liệu thành công");
  })
  .catch((err) => {
    console.error(err);
  });

  }

async GetWord(req,res)
{
  
  const randomVocabularies = await Vocabulary.aggregate([{ $sample: { size: 33 } }]);
  
  res.status(200).json(randomVocabularies);
} catch (error) {
  console.error(error);
  res.status(500).json({ message: 'Internal server error' });
}


    // Lấy một danh sách ngẫu nhiên các từ vựng từ cơ sở dữ liệu
    // Lấy một danh sách ngẫu nhiên các từ vựng từ cơ sở dữ liệu
   
}
module.exports = new MeController();
