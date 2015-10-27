$(document).ready(function() {



$('#search-Term').submit(function(event) {


//document.forms['search-Term'].reset()
   
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
    //$('#query').remove();



    function getRequest(searchTerm) {
        console.log(searchTerm);
        var params = {
            part: 'snippet',
            

            //s: searchTerm,
            q: searchTerm,
            maxResults: 10,
            key: 'AIzaSyBKACb8CHAV4Lr1v4uq65MCdmm-HglaapI'
        };
        url = 'https://www.googleapis.com/youtube/v3/search';
        


        $.getJSON(url, params, function(data) {
            
            var myData= data.items;
            
            console.log("myData=" + myData);
            showResults(myData);
            
            
        });
    }


   /* $('ul').on('click', 'li', function() {
       $(this).remove();
    }); */


    
function showResults(results) {
    
        
    var htmlresults = "";
    $.each(results, function(index, value) {

        var snippeturl= value.snippet.thumbnails.medium.url;
        console.log ("snippeturl= "+ value.snippet.thumbnails.medium.url);
        htmlresults += '<p>' + value.snippet.title +   "<img src =" + snippeturl + ">" + '</p>';
        console.log( value.snippet.thumbnails);
        
    });
    $('#search-results').html(htmlresults);
     //searchTerm.empty="";
     //$('#query').val(''); to run again/reset
}


//document.location.reload(true);


  
   




})

$("<img/>").mouseenter(function(){
        $(this).addClass('hover-state');
    }).mouseleave(function(){
        $(this).removeClass('hover-state');
    });

//

    $("<img/>.click-to-play-video").click(function(){
        $('#head').css({"background-color":"black"});

        player = new YT.Player('player', {
            width : '320',
            height : '180',
            videoId : 'qlEUrEVqDbo',
            playerVars: { 'autoplay': 1 },
            events : {
                'onReady' : onPlayerReady,
                'onStateChange' : onPlayerStateChange
            }
        });
    })



});