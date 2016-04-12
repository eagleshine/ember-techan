import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('advanced-all-plots', 'Integration | Component | advanced-all-plots', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.set('data', []);
  this.set('currentUrl', 'dummy-url');
  this.render(hbs`{{advanced-all-plots data=data currentUrl=currentUrl}}`);
  assert.equal(this.$('svg').length, 1);
});
