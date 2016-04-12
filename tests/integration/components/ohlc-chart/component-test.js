import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ohlc-chart', 'Integration | Component | ohlc chart', {
  integration: true
});

test('it renders', function(assert) {
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.set('data', []);
  this.set('currentUrl', 'dummy-url');
  this.render(hbs`{{ohlc-chart data=data currentUrl=currentUrl}}`);
  assert.equal(this.$('svg').length, 1);
});
