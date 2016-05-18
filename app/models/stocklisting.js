import DS from 'ember-data';

export default DS.Model.extend({
    listofstocks: DS.hasMany('stock', {
        async: false
    })
});