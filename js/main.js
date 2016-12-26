/**
 * Main JavaScript handler.
 */

$(document).ready(function () {
    $.get("http://localhost:8080/rss-reset-service/get-feed", function (data) {
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
