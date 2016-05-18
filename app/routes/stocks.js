import Ember from 'ember';


export default Ember.Route.extend({
	lastSearchParam: "stockList",
	model(param) 
	{
		return this.store.find('stocklisting',param.search);
	},
  setupController: function(controller, model) {
	  console.log("setip");
    controller.set('params', this.get('params'));
    this._super(controller, model);
  }
	
  
  
});

