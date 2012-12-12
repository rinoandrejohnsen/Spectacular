define(['source/common/infrastructure/event'], function(Event) {
    function ObservableCollection() {
        var items = [];

        this.collectionChanged = new Event(this);

        this.add = function(item) {
            items.push(item);
            this.collectionChanged.notify({item: item});
        };

        this.get = function() {
            return [].concat(items);
        };

        this.remove = function(index) {
            var item;

            item = items[index];
            items.splice(index, 1);
            this.collectionChanged.notify({item: item});
        };
    };

    ObservableCollection.prototype = {
        constructor: ObservableCollection
    };

    return ObservableCollection;
});