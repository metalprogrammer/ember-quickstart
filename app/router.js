import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
    this.route('index');

    this.route('stocks', {
        path: '/stocks'
    }, function() {
        this.route('graph', {
            path: 'graph/:stock',
            resetNamespace: true
        });
    });

    this.route('dynamicUpdate');
});

export default Router;