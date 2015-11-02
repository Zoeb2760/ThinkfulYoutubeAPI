$(document).ready(function() {



$('#search-Term').submit(function(event) {



   
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
    
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
            //var iD= value.id.videoId;
            
            console.log("myData=" + myData);
            showResults(myData);
           // showResults(iD);
            
            
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
        var anchor = 'http://www.youtube.com/watch?v=' + iD

        console.log("video id =" + iD);
        console.log("snippeturl= "+ value.snippet.thumbnails.medium.url);
        console.log("anchor= " + anchor);
        htmlresults += "<p>" + "<a href=http://www.youtube.com/watch?v=" + iD + target=_blank + ">" + '<img src = ' + snippeturl  + '>' + value.snippet.title + "</a>" + "</p>"
        //"</a>" +
        

       $('#search-results').html(htmlresults);
        
    } )
}

        //'<img src = ' + snippeturl + '>' + </a>" +

        //"</p>" 
        //"<a href='http://www.youtube.com/emb/watch?v=' + iD + target='_blank' > '<img src = ' + snippeturl + '>' + </a>"
        // + "</a>"

       //<a href="samesite.htm"><img src="image.gif"></a>
       // value.snippet.title 
        //<a href="http://www.w3schools.com/" target="_blank">Visit W3Schools!</a>
        // htmlresults += "<p>" + value.snippet.title +  "<img src = " + snippeturl + ">" + "</p>" 
        //"<a href=http://www.youtube.com/watch?v=" + iD + "autoplay = 0 >" "<img src" = + snippeturl + "/>" + "</a>" 
        // "</p>"
        //getVideo(); 


        //autoplay = "0"
        /* + "<iframe 
src="http:%2F%2Fwww.youtube.com/embed/watch?v=" + iD + "autoplay = 0 >
</iframe> + </p>";*/
        /*console.log(value.snippet.thumbnails);
        $("#search-results").click(function() {
        alert('Clicked');
        var iD= value.id.videoId;
        console.log("video id =" + iD);
        
    //});

    //src="http://www.youtube.com/embed/XGSy3_Czz8k?autoplay=1">
    $('#search-results').html(htmlresults);
    //getVideo();
     //searchTerm.empty="";
     //$('#query').val(''); to run again/reset

     //

} 

    //function playVideo () {
        //$("<img>").click(function()  {
           // alert("clicked")
        //})
//"<a href='http://www.youtube.com/watch?v=' + iD + target='_blank'+ ">"

//<p><a href="images/parrot.jpg" target="picdisplay"><img src="images/hyperlink-demo.gif" alt="button demo" /></a></p>




            
             /* $('#gif').click(function(){
       alert('Clicked');*/
        //$('snippeturl').click*/
       /*$("#search-results").click(function() {
        alert('Clicked');
        var iD= value.id.videoId;
        console.log("video id =" + iD);
        //"<a href='http://www.youtube.com/emb/watch?v=' + iD + 
        //target='_blank' >" Click to PLay*/
       // + 
        //'<img src = ' + snippeturl  + '>' + value.snippet.title + */
        //"</a>"
        // <h2 id="tips">Useful Tips Section</h2>

        //"<img src = 'http://www.youtube.com/embed/watch?v=' + iD + 'autoplay = 0' + '>' ";
  

         //   "<img src = 'http://www.youtube.com/embed/watch?v=' + iD + 'autoplay = 0' + '>' ";
            //<img src="smiley.gif" alt="Smiley face" height="42" width="42">

            //htmlresults += snippeturl;
             //$('#gif').click(function(){
       //alert('Clicked');
//}
//})

});
