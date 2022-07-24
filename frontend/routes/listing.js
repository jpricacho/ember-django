import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
    store: inject(),
    model(list) {
        return this.get('store').peekRecord('list', list.list_id);
    },

    setupController(controller, model) {
        this._super(controller, model);
        this.controller.set('confirmingDelete', false);
        this.controller.set('isEditing', false);
        this.controller.set('form.controlnum', model.get('controlnum'));
        this.controller.set('form.accname', model.get('accname'));
        this.controller.set('form.address', model.get('address'));
        this.controller.set('form.area', model.get('area'));
        this.controller.set('form.value', model.get('value'));
    },

    actions: {
        delete(listing) {
          listing.deleteRecord();
          listing.save().then(() => {
            this.transitionTo('lists');
          });
        },

        edit(listing) {
            const form = this.controller.get('form');
            listing.set('controlnum', form.controlnum);
            listing.set('accname', form.accname);
            listing.set('address', form.address);
            listing.set('area', form.area);
            listing.set('value', form.value);
            listing.save().then(() => {
                this.controller.set('isEditing', false);
            });
          }
    },

    

});