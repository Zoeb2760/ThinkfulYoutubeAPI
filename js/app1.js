$(document).ready(function() {
// declare global variables


$('#search-Term').submit(function(event) {
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);



    function getRequest(searchTerm) {
        console.log(searchTerm);
        var params = {
            part: 'snippet',
            //key: 'AIzaSyBKACb8CHAV4Lr1v4uq65MCdmm-HglaapI'

            s: searchTerm,
            //q: 'dogs',
            maxResults: 10,
            key: 'AIzaSyBKACb8CHAV4Lr1v4uq65MCdmm-HglaapI'
        };
        url = 'https://www.googleapis.com/youtube/v3/search';
        //key: 'AIzaSyBKACb8CHAV4Lr1v4uq65MCdmm-HglaapI';


        $.getJSON(url, params, function(data) {
            var myData= data.items;
            //console.log(myData.snippet);
            //var item = results.items;
            console.log(myData);
            showResults(myData);
            //searchByKeyword();
            
        });
    }
    
function showResults(results) {
    //var title = snippet.channelTitle; 
        
    var htmlresults = "";
    $.each(results, function(index, value) {
    
        htmlresults += '<p>' + value.snippet.title + '</p>';
        console.log( value.snippet.title );
    });
    $('#search-results').html(htmlresults);
}



  
    /*function getRequest(seachTerm) {
        $.getJSON("http://www.omdbapi.com/?s=" + searchTerm + "&r=json", function(data) {
            showResults(data.Search);
        });*/


    
//

/*function searchByKeyword() {
  var results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 25});
  for(var i in results.items) {
    var item = results.items[i];
    Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
  }
}*/




})

});