import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
form: computed(function() {
    const model = this.get('model');
    return {
      controlnum: model.get('controlnum'),
      accname: model.get('accname'),
      address: model.get('address'),
      area: model.get('area'),
      value: model.get('value'),
    }
  })
});