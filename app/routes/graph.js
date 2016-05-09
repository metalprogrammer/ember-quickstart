import Ember from 'ember';



export default Ember.Route.extend({
	actions: 
	{
		
	},
	model(params) 
	{
		//return Ember.$.getJSON('/graph/' + params.stock);
		return this.store.findRecord('historicaldata',params.stock);
		//return [params.stock, 1,0,1,0];
    //return this.store.findRecord('photo', params.photo_id);
	}
	
});
