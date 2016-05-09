import Ember from 'ember';


export default Ember.Route.extend({
	model() 
	{
		//return ["a","b","c"];
		return this.store.find('stocklisting',"stockList");
	}
  
  
});

