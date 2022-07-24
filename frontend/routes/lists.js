import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  store: inject(),

  model() {
    const store = this.get('store');
    return store.findAll('list');
  },

  actions: {
    delete(listing) {
      listing.deleteRecord();
      listing.save().then(() => {
        this.transitionTo('lists');
      });
    }
  }

  
});