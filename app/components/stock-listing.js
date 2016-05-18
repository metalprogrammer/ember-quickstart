import Ember from 'ember';

export default Ember.Component.extend({
    search: null,
	store: Ember.inject.service(),
    actions: {
        onFilterTextChange() {
            Ember.run.debounce(this, this.filteredContent, 1500);

        }
    },
	
	updateList: function(results)
	{
		var list = [];
		
	},

    /*
     * Fires after a search have been completed on the backend
     * Take the search result and put them into a display array 
     * We can also take this chance to do minor front end proccessing. 
    */
    filteredContent: function() {
        
		var s = this.get('search');
		
		var store = this.get('store');
		store.find('stocklisting', s);
		this.set("filteredList",[]);
		//this.fill = this.get("filteredList");
		var that = this;
		store.findRecord("stocklisting",s).then(function(sl)
		{
			console.log("fil");
			//console.log(this.fil);
			console.log("got");
			var list = [];
			console.log("then");
			console.log(sl.get("listofstocks"));
			sl.get("listofstocks").forEach(function(element, index, array)
			{
				//fill.push(element);
				//console.log(element.id);
				list.push(element);
			});
			console.log(list);
			that.set("filteredList",list);

		}).catch(function (err){console.log(err);});
		
		//while(ref.value() == null){console.log("load wait")}
		console.log(store);
		console.log(this.get("stocks"));

		var rec = store.peekRecord("stocklisting",s);
		console.log(rec);
		
        
		//this.sendAction('action', this.get('search'));
        var tempList = this.get("stocks.listofstocks");
        var size = this.get("stocks.listofstocks.length");
		
		console.log(tempList);

		
        for (var i = 0; i < size; i++) {
            var stockObj = tempList.objectAt(i);
			//console.log(stockObj);
            //list.push(stockObj);
        }
    }
});