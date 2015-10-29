$(document).ready(function() {



$('#search-Term').submit(function(event) {


//document.forms['search-Term'].reset()
   
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
    //$('#query').remove();
})



    function getRequest(searchTerm) {
        console.log(searchTerm);
        var params = {
            part: 'snippet',
            type: 'video',
            

            //s: searchTerm,
            q: searchTerm,
            maxResults: 10,
            videoCategoryId: 'list',

            key: 'AIzaSyBKACb8CHAV4Lr1v4uq65MCdmm-HglaapI'
        };
        url = 'https://www.googleapis.com/youtube/v3/search';
        


        $.getJSON(url, params, function(data) {
            
            var myData= data.items;
            
            console.log("myData=" + myData);
            showResults(myData);
            
            
        });
    }


 /*function getVideo()  {
        var iD= value.id.videoId;
        var videoSource = "http//www.youtube.com/embed/watch?v=" + iD + "autoplay = 0 >"
        var ifrm = document.createElement('iframe');
        ifrm.setAttribute('src'= videoSource);
            //, 'demo.html');
    };

   /* $('ul').on('click', 'li', function() {
       $(this).remove();
    }); */


    
function showResults(results) {
    
        
    var htmlresults = "";
    $.each(results, function(index, value) {

        var snippeturl= value.snippet.thumbnails.medium.url;
        var iD= value.id.videoId;
        //console.log("video id =" + iD);
        console.log("snippeturl= "+ value.snippet.thumbnails.medium.url);
        htmlresults += "<p>" + value.snippet.title +  "<img src = " + snippeturl + ">" + "</p>" 
        //"<a href=http://www.youtube.com/embed/watch?v=" + iD + "autoplay = 0 >" "<img src" = + snippeturl + "/>" + "</a>" 
        // "</p>"
        //getVideo(); 
        /* + "<iframe 
src="http:%2F%2Fwww.youtube.com/embed/watch?v=" + iD + "autoplay = 0 >
</iframe> + </p>";*/
        console.log( value.snippet.thumbnails);
        
    //});

    //src="http://www.youtube.com/embed/XGSy3_Czz8k?autoplay=1">
    $('#search-results').html(htmlresults);
    //getVideo();
     //searchTerm.empty="";
     //$('#query').val(''); to run again/reset

     //
 })

    //function playVideo () {
        $("<img>").click(function()  {
            alert("clicked")
        })

}

           // {document.createElement('iframe');
            //ifrm.setAttribute('src', 'http://www.youtube.com/embed/watch?v=' + iD + 'autoplay = 0');
            




            //htmlresults += snippeturl;
             //$('#gif').click(function(){
       /*alert('Clicked');
        //$('snippeturl').click
        $("<img>").click(function() 
            img src = 'http://www.youtube.com/embed/watch?v=' + iD + 'autoplay = 0');
            htmlresults += snippeturl;
             $('#gif').click(function(){
       alert('Clicked');
    })
};
//onYouTubePlayerAPIReady ();
     


//document.location.reload(true);


  
   






/*$("<img/>").mouseenter(function(){
        $(this).addClass('hover-state');
    }).mouseleave(function(){
        $(this).removeClass('hover-state');
    //}); */

//

    /*$("<img/>.click-to-play-video").click(function(){
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
    })*/
/*var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);




var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('<iframe>', {
    height: '258',
    width: '422',
    videoId: iD
  }); */
//}


});
