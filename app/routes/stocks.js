import Ember from 'ember';


export default Ember.Route.extend({
	searchResult:[],
    lastSearchParam: "stockList",
	model() {
        return this.store.find('stocklisting', "search");
    },
    model(param) {
        return this.store.find('stocklisting', param.search);
    },
});