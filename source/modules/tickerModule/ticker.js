define(function() {

    var postFeedItems = null;
    var dataItems = null;
    var i = 0;

    var Ticker = function(postFeedService, data) {

        postFeedItems = postFeedService.getPostFeedItems();
        dataItems = data;

        var that = this;

        this.tickerStart = function() {           
            setTimeout(function() {    
                postFeedItems.add(dataItems.array[i]);          
                i++;                     
                if (i < dataItems.array.length) {            
                    that.tickerStart();    
                }
            }, Math.floor(Math.random()*10001));
        };
    };

    Ticker.prototype = {
        constructor: Ticker
    };

    return Ticker;
});