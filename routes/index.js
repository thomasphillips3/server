module.exports = function Route(app){
  app.get('/', function(request, response){
    response.render('index');
  })

  app.post('/result', function(request, response){
    submitted_info = {
      name: request.body.name,
      location: request.body.dojo_location,
      favLang: request.body.favorite_language,
      comment: request.body.comment
    };
    response.render('results', {user_data: submitted_info});
  })
};
