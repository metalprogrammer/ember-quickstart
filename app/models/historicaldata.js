import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr("string"),
    listofdata: DS.hasMany('stockdatas', {async: false})
});