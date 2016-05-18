import Ember from 'ember';


export default Ember.Controller.extend({
	updateCurrentPath: function() {
    App.set('currentPath', this.get('currentPath'));
  }.observes('currentPath'),
	actions:
	{
		OnRouteModelUpdate : function(sParam)
		{
			//this.lastSearchParam = "aaaa"
			//console.log("hii");
			//var param = this.get('params');
			//console.log(this.controllerFor("application"));;
			this.transitionToRoute('stocks', sParam);
			//this.transitionToRoute({queryParams: {stocks: sParam}});
			//this.refresh()
		}
	}
});
