import { moduleFor, test } from 'ember-qunit';
import { run } from '@ember/runloop';
import sinon from 'sinon';

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
