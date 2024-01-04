class SiteController {
  //[get]/news
  index(req, res,next) {
  
      res.render('home');
}
}
module.exports = new SiteController();
