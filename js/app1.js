$(document).ready(function() {



$('#search-Term').submit(function(event) {



    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);



    function getRequest(searchTerm) {
        console.log(searchTerm);
        var params = {
            part: 'snippet',
            

            s: searchTerm,
            //q: 'dogs',
            maxResults: 10,
            key: 'AIzaSyBKACb8CHAV4Lr1v4uq65MCdmm-HglaapI'
        };
        url = 'https://www.googleapis.com/youtube/v3/search';
        


        $.getJSON(url, params, function(data) {
            //var myData= data.items;
            var myData= data.items;
            
            console.log("myData=" + myData);
            showResults(myData);
            
            
        });
    }
    
function showResults(results) {
    
        
    var htmlresults = "";
    $.each(results, function(index, value) {

        var snippeturl= value.snippet.thumbnails.medium.url;
        console.log ("snippeturl= "+ value.snippet.thumbnails.medium.url);
        htmlresults += '<p>' + value.snippet.title +   "<img src =" + snippeturl + ">" + '</p>';
        console.log( value.snippet.thumbnails);
        
    });
    $('#search-results').html(htmlresults);
}



  
   




})

});