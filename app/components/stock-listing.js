import Ember from 'ember';


export default Ember.Component.extend({
	search: null,
	actions: 
	{
		onFilterTextChange()
		{
			Ember.run.debounce(this, this.filteredContent, 1500);
		}
	},
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
			
			if(name[0].toUpperCase()  !== s[0].toUpperCase() )
			{
				continue;
			}
			
			if(name.match(rx))
			{
				list.push(stockObj);
			}
			if(name[0].toUpperCase()  > s[0].toUpperCase() )
			{
				break;
			}
		}
		this.set('filteredList', list);
		
    }
});
