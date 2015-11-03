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

            var myData = data.items;
            //var iD= value.id.videoId;

            console.log("myData=" + myData);
            showResults(myData);
           

        });
    }



    function showResults(results) {


        var htmlresults = "";
        $.each(results, function(index, value) {

            var snippeturl = value.snippet.thumbnails.medium.url;
            var iD = value.id.videoId;
            var anchor = 'http://www.youtube.com/watch?v=' + iD

            console.log("video id =" + iD);
            console.log("snippeturl= " + value.snippet.thumbnails.medium.url);
            console.log("anchor= " + anchor);
            htmlresults += "<p>" + "<a href='http://www.youtube.com/watch?v=" + iD +  "' target='_blank'  >" + '<img src = ' + snippeturl + '>' + value.snippet.title + "</a>" + "</p>"

            /*$('<a>').click(function() {
                $(this).attr('target', '_blank');
            });*/

            $('#search-results').html(htmlresults);

        })
    }



});