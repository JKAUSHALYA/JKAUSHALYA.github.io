/**
 * Main JavaScript handler.
 */

$(document).ready(function () {
    $('#waiting-for-feed').show();
    $.get("https://protected-eyrie-93269.herokuapp.com/get-feed", function (data) {
        if (data == null) {
            console.error("No data received from server.")
            return;
        }
        $('#waiting-for-feed').hide();
        $('#rss-title').text(data.title);
        var feedEntries = data.feedEntries;
        if (feedEntries != null) {
            var feedCount = feedEntries.length;
            var i = 0;
            setInterval(function () {
                if (i === feedCount) {
                    i = 0;
                }
                var rssFeedDiv = $('#rss-feed');
                rssFeedDiv.hide();
                rssFeedDiv.empty();
                rssFeedDiv.append('<div id="rss-entry-title">' + feedEntries[i].title + '</div>');
                rssFeedDiv.append('<div id="rss-entry">' + feedEntries[i].description + '</div>');
                i++;
                rssFeedDiv.slideDown();
            }, 5000);
        }
    });
});
