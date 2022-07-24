import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
  store: inject(),
  setupController(controller, model) {
    this._super(controller, model);
    this.controller.set('form.controlnum', '');
    this.controller.set('form.accname', '');
    this.controller.set('form.address', '');
    this.controller.set('form.area', '');
    this.controller.set('form.value', '');
  },
  actions: {
    add() {
      const form = this.controller.get('form');
      const store = this.get('store');
      const newListing = store.createRecord('list', {
        controlnum: form.controlnum,
        accname: form.accname,
        address: form.address,
        area: form.area,
        value: form.value,
      });
      newListing.save()
        .then(() => {
          this.transitionTo('lists');
        });
    },
    cancel() {
      this.transitionTo('lists');
    }
  }
});