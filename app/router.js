import Ember from 'ember';
import config from './config/environment';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

const Router = Ember.Router.extend(ApplicationRouteMixin, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('signup');
  this.route('dashboard');
  this.route('index', {path: '/'});  
});

export default Router;
