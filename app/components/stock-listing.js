import Ember from 'ember';

export default Ember.Component.extend({
	search: null,
	actions: 
	{
		onFilterTextChange()
		{
			Ember.run.debounce(this, this.sendUpdateModelAction, 1500);
			
		}
	},

	sendUpdateModelAction()
	{
		this.sendAction('action', this.get('search'));
		this.filteredContent();
	},
	
  // binding the property on the paged array
  // to a property on the controller
  totalPagesBinding: "pagedContent.totalPages",
   filteredContent:function()
	{
		var list = [];
		var s = this.get('search');
		var rx = new RegExp(s, 'ig');
		var tempList = this.get("stocks.listofstocks");
		var size = this.get("stocks.listofstocks.length");
		
		for (var i = 0; i < size; i++)
		{
			var stockObj = tempList.objectAt(i);
			var name = tempList.objectAt(i).get("name");
			
			list.push(stockObj);
		}
		this.set('filteredList', list);
		
    }
});
