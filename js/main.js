/**
 * Main JavaScript handler.
 */

$(document).ready(function () {
    $.get("https://protected-eyrie-93269.herokuapp.com/get-feed", function (data) {
        if (data == null) {
            console.error("No data received from server.")
            return;
        }

        $('#rss-medium-title').text(data.title);

        var feedEntries = data.feedEntries;
        if (feedEntries != null) {
            var mediumDiv = $('#rss-medium');
            feedEntries.forEach(function (feedEntry) {
                mediumDiv.append('<div id="rss-medium-entry-title">' + feedEntry.title + '</div>');
                mediumDiv.append(feedEntry.description);
            });
        }
    });
});
