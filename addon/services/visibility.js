import Service from '@ember/service';
import { bind } from '@ember/runloop';

/**
 * This service keeps track of whether the window has ever lost visibility. This
 * happens when the user switches tabs, minimizes the window, etc.
 */
export default Service.extend({
  visible: true,
  lostVisibility: false,

  init() {
    this._super(...arguments);
    this._handleDocumentVisibilityChange();

    document.addEventListener('visibilitychange', bind(this, '_handleDocumentVisibilityChange'));
  },

  _handleDocumentVisibilityChange() {
    if (this.isDestroyed) { return; }
    this.set('visible', !document.hidden);
    if (document.hidden) {
      this.set('lostVisibility', true);
    }
  }
});
