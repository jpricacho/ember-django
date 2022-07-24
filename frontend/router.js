import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('lists');
  this.route('listing');
  this.route('listing', { path: 'lists/:list_id' });
  this.route('add-listing');
  this.route('edit-listing');
});

export default Router;
