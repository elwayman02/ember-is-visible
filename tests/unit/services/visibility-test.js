import { moduleFor, test } from 'ember-qunit';
import { run } from '@ember/runloop';
import sinon from 'sinon';
import { APIs, detectApi } from 'ember-is-visible/services/visibility';

let service, eventListenerStub;

moduleFor('service:visibility', 'Unit | Service | visibility', {
  beforeEach() {
    eventListenerStub = sinon.stub(document, 'addEventListener');
    service = this.subject();
  },
  afterEach() {
    eventListenerStub.restore();
    run(service, 'destroy');
  }
});

test('it should listen to visibilitychange events', function (assert) {
  assert.ok(eventListenerStub.calledOnce);
  assert.equal(eventListenerStub.args[0][0], 'visibilitychange');
});

test('it should handle visibility change', function (assert) {
  let handleDocumentVisibilityChangeStub = sinon.stub(service, '_handleDocumentVisibilityChange');
  let handler = eventListenerStub.args[0][1];
  handler();

  assert.ok(handleDocumentVisibilityChangeStub.calledOnce);
});

test('it detects the current visibility API', function(assert) {
  assert.ok(detectApi({ hidden: true }), APIs.global);
  assert.ok(detectApi({ webkitHidden: true }), APIs.webkit);
  assert.ok(detectApi({ mozHidden: true }), APIs.mozilla);
  assert.ok(detectApi({ msHidden: true }), APIs.ie);
  assert.ok(detectApi({}), APIs.unsupported);
})
