
function GuardianApi() {
  this.returnData = function(text) {
    var articles;
    $.get("http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?show-fields=main%2Cbody&order-by=newest&page-size=30&q=technology&",function(data) {
      console.log(data.response);
      var articles = data.response.results;
      for (var i = 0; i < articles.length; i++) {
        document.getElementById('articleBody').innerHTML += ("<h5>"+ articles[i].webTitle + "</h5><div>" + articles[i].fields.main + "</div>" + "<div><a href='" + articles[i].webUrl + "'>Link to Article</a></div>")
      }
    }).then(function(){
      return articles
    })
  }
}
