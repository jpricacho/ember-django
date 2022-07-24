import DS from 'ember-data';

export default DS.Model.extend({
  controlnum: DS.attr(),
  accname: DS.attr(),
  address: DS.attr(),
  area: DS.attr(),
  value: DS.attr(),
});